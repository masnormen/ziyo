import { serve } from '@hono/node-server';
import { zValidator } from '@hono/zod-validator';
import { isHan } from '@scriptin/is-han';
import { Kanji, KanjiList } from '@ziyo/types';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { logger } from 'hono/logger';
import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { isHiragana, isKatakana } from 'wanakana';
import { z } from 'zod';

import isHangeul from './utils/isHangeul';
import { err, ok } from './utils/response';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db = await open({
  filename: `${__dirname}/assets/kanji.sqlite`,
  driver: sqlite3.cached.Database,
  mode: sqlite3.OPEN_READONLY,
});

const app = new Hono()
  .basePath('/api')

  /* Middlewares */
  .use('*', cors())
  .use(
    '*',
    logger((str) => console.log(decodeURIComponent(str))),
  )
  .use('*', compress())
  .get('*', async (c, next) => {
    c.header('Cache-Control', 'public, max-age=3600');
    await next();
  })

  /* Get One Kanji */
  .get('/kanji/one', async (c) => {
    const { character } = c.req.query();
    if (!character) {
      throw new HTTPException(400, {
        message: 'No character specified',
      });
    }

    const _kanji = await db.get(
      "SELECT * FROM 'kanji' WHERE literal = ? LIMIT 1",
      [character],
    );
    const kanji = Kanji.safeParse(_kanji);
    if (!kanji.success) {
      throw new HTTPException(500, {
        message: "There's a problem processing your request.",
      });
    }

    return c.json(ok(kanji.data));
  })

  .get(
    '/kanji/list',
    zValidator(
      'query',
      z.object({
        search: z.string().min(1),
        limit: z
          .string()
          .default('10')
          .transform((s) => parseInt(s, 10)),
        offset: z
          .string()
          .default('0')
          .transform((s) => parseInt(s, 10)),
      }),
    ),
    async (c) => {
      const { search, limit, offset } = c.req.valid('query');

      type SearchType = 'latin' | 'hangeul' | 'hiragana' | 'katakana' | 'han';
      const searchType: SearchType = (() => {
        // Search based on the first found character type
        for (const char of search) {
          if (isHan(char)) {
            return 'han';
          }
          if (isHiragana(char)) {
            return 'hiragana';
          }
          if (isKatakana(char)) {
            return 'katakana';
          }
          if (isHangeul(char, 1)) {
            return 'hangeul';
          }
        }
        return 'latin';
      })();

      const whereToSearch = {
        latin: [
          'reading_ja_onyomi_latin',
          'reading_ja_kunyomi_latin',
          'meanings',
          'reading_zh_pinyin_numbered',
          'reading_ko_latin',
        ],
        han: ['literal', 'literal_kyujitai', 'literal_simplified'],
        hangeul: ['reading_ko_hangeul'],
        hiragana: ['reading_ja_kunyomi_hiragana'],
        katakana: ['reading_ja_onyomi_katakana'],
      } as Record<SearchType, (keyof Kanji)[]>;

      const strippedColumns = (() => {
        if (searchType === 'latin') {
          return `
          REPLACE(reading_ja_onyomi_latin, '.', '') as reading_ja_onyomi_latin_stripped,
          REPLACE(reading_ja_kunyomi_latin, '.', '') as reading_ja_kunyomi_latin_stripped
        `;
        }
        if (searchType === 'katakana') {
          return `
          REPLACE(reading_ja_onyomi_katakana, '.', '') as reading_ja_onyomi_katakana_stripped
        `;
        }
        if (searchType === 'hiragana') {
          return `
          REPLACE(reading_ja_kunyomi_hiragana, '.', '') as reading_ja_kunyomi_hiragana_stripped
        `;
        }
        return '';
      })();

      const whereClauses = whereToSearch[searchType]!.map((column) => {
        if (searchType === 'han') {
          return `(${column} = $searchTerm COLLATE NOCASE)`;
        }
        if (
          column === 'reading_ja_kunyomi_hiragana' ||
          column === 'reading_ja_onyomi_katakana' ||
          column === 'reading_ja_kunyomi_latin' ||
          column === 'reading_ja_onyomi_latin'
        ) {
          return `(${column}_stripped LIKE '%' || $searchTerm || '%' COLLATE NOCASE)`;
        }
        if (column === 'meanings') {
          return `(${column} LIKE '%' || '"' || $searchTerm || '"' || '%' COLLATE NOCASE) OR (${column} LIKE '%' || $searchTerm || '%' COLLATE NOCASE)`;
        }
        return `(${column} LIKE '%' || $searchTerm || '%' COLLATE NOCASE)`;
      }).join(' OR ');

      const likenessSortClauses = (() => {
        if (searchType === 'latin') {
          return `
          WHEN reading_ja_onyomi_latin_stripped LIKE '%' || $searchTerm || '%' COLLATE NOCASE
            OR reading_ja_kunyomi_latin_stripped LIKE '%' || $searchTerm || '%' COLLATE NOCASE
            THEN CASE
              WHEN (LENGTH($searchTerm) * 100 / LENGTH(reading_ja_onyomi_latin_stripped)) > (LENGTH($searchTerm) * 100 / LENGTH(reading_ja_kunyomi_latin_stripped))
                THEN (LENGTH($searchTerm) * 100 / LENGTH(reading_ja_onyomi_latin_stripped))
              ELSE (LENGTH($searchTerm) * 100 / LENGTH(reading_ja_kunyomi_latin_stripped))
            END
          WHEN meanings LIKE '%' || '"' || $searchTerm || '"' || '%' COLLATE NOCASE THEN (LENGTH('"' || $searchTerm || '"') * 100 / LENGTH(meanings)) * 0.6
          WHEN meanings LIKE '%' || $searchTerm || '%' COLLATE NOCASE THEN (LENGTH($searchTerm) * 100 / LENGTH(meanings)) * 0.5
          WHEN reading_ko_latin LIKE '%' || $searchTerm || '%' COLLATE NOCASE THEN (LENGTH($searchTerm) * 100 / LENGTH(reading_ko_latin)) * 0.8
          WHEN reading_zh_pinyin_numbered LIKE '%' || $searchTerm || '%' COLLATE NOCASE THEN (LENGTH($searchTerm) * 100 / LENGTH(reading_zh_pinyin_numbered)) * 0.7
        `;
        }
        if (searchType === 'han') {
          return `
          WHEN literal = $searchTerm THEN 1
          WHEN literal_kyujitai = $searchTerm THEN 1
          WHEN literal_simplified = $searchTerm THEN 1
        `;
        }
        if (searchType === 'hangeul') {
          return `
          WHEN reading_ko_hangeul LIKE '%' || $searchTerm || '%' COLLATE NOCASE THEN 1
        `;
        }
        if (searchType === 'hiragana') {
          return `
          WHEN reading_ja_kunyomi_hiragana_stripped LIKE '%' || $searchTerm || '%' COLLATE NOCASE THEN (LENGTH(reading_ja_kunyomi_hiragana_stripped) - LENGTH($searchTerm))
        `;
        }
        return `
        WHEN reading_ja_onyomi_katakana_stripped LIKE '%' || $searchTerm || '%' COLLATE NOCASE THEN (LENGTH(reading_ja_onyomi_katakana_stripped) - LENGTH($searchTerm))
      `;
      })();

      const sqlQuery = `
      SELECT * ${
        strippedColumns !== '' ? `, ${strippedColumns}` : ''
      }, (100 - (frequency * 100 / (SELECT MAX(frequency) FROM kanji))) AS freq_percentage
      FROM kanji
      WHERE
          ${whereClauses}
      ORDER BY (
        (COALESCE(freq_percentage, 10) * 0.4)
        +
        ((CASE
          ${likenessSortClauses}
          ELSE 50
        END) * 0.6)
      ) DESC
      LIMIT $limit
      OFFSET $offset
    ` as const;

      const searchStripped =
        searchType === 'latin'
          ? // Normalize the search term to remove diacritics
            search.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
          : search;

      console.time('query');
      const _kanjiList = await db.all(sqlQuery, {
        $searchTerm: searchStripped,
        $limit: limit,
        $offset: offset,
      });
      console.timeEnd('query');

      const kanjiList = KanjiList.safeParse(_kanjiList);
      if (!kanjiList.success) {
        throw new HTTPException(500, {
          message: "There's a problem processing your request.",
        });
      }

      return c.json(ok(kanjiList.data));
    },
  )
  .notFound((c) => {
    c.status(404);
    return c.json(err(new Error('Not found')));
  });

export type AppType = typeof app;

serve(app, (info) => {
  console.log(`✅ Listening on http://localhost:${info.port}`);
});
