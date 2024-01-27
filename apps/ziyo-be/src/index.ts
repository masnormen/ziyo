import { serve } from '@hono/node-server';
import { zValidator } from '@hono/zod-validator';
import { Resvg } from '@resvg/resvg-js';
import { isHan } from '@scriptin/is-han';
import { ArrayWithTotalCount, Kanji, KanjiList } from '@ziyo/types';
import { readFileSync } from 'fs';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { logger } from 'hono/logger';
import path from 'path';
import satori from 'satori';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { isHiragana, isKana, isKatakana, toRomaji } from 'wanakana';
import { z } from 'zod';

import { IndexOpenGraphImage, KanjiOpenGraphImage } from './og-images';
import isHangeul from './utils/isHangeul';
import { err, ok, okPagination } from './utils/response';

export const config = {
  runtime: 'nodejs',
};

const sql = String.raw;

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

  .get(
    '/og-image.png',
    zValidator(
      'query',
      z.object({
        character: z.string().trim().optional(),
      }),
    ),
    async (c) => {
      const query = c.req.valid('query');

      const OpenGraphImage = query.character
        ? KanjiOpenGraphImage({
            kanji: query.character,
          })
        : IndexOpenGraphImage();

      const svg = await satori(OpenGraphImage, {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Noto Sans JP',
            data: readFileSync(`${__dirname}/assets/NotoSansJP-subset.ttf`),
            weight: 700,
            style: 'normal',
          },
        ],
      });

      const resvg = new Resvg(svg, {
        background: 'rgba(238, 235, 230, .9)',
      });
      const pngData = resvg.render();
      const pngBuffer = pngData.asPng();

      return c.newResponse(pngBuffer, 200, {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      });
    },
  )

  .get(
    '/kanji/one',
    zValidator(
      'query',
      z.object({
        character: z.string().trim().min(1),
      }),
    ),
    async (c) => {
      const { character } = c.req.valid('query');

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
    },
  )

  .get(
    '/kanji/list',
    zValidator(
      'query',
      z.object({
        search: z.string().trim().min(1),
        limit: z.coerce
          .string()
          .default('10')
          .transform((s) => parseInt(s, 10)),
        offset: z.coerce
          .string()
          .default('0')
          .transform((s) => parseInt(s, 10)),
      }),
    ),
    async (c) => {
      const { search: _search, limit, offset } = c.req.valid('query');

      let search: string = _search;
      let searchMode: 'latin' | 'hangeul' | 'han' = 'latin';

      for (const char of _search) {
        if (isHan(char)) {
          // Strip non-Han characters
          search = Array.from(search).filter(isHan).join('');
          searchMode = 'han';
          break;
        }
        if (isHiragana(char) || isKatakana(char)) {
          // Strip non-kana characters, then convert to Latin
          search = toRomaji(Array.from(search).filter(isKana).join(''));
          searchMode = 'latin';
          break;
        }
        if (isHangeul(char, 1)) {
          // Strip non-Hangeul characters
          search = Array.from(search)
            .filter((c) => isHangeul(c, 1))
            .join('');
          searchMode = 'hangeul';
          break;
        }
        search = search.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
      }

      const sqlQuery = sql`
        SELECT
          literal,
          literal_kyujitai,
          literal_simplified,
          strokeCounts,
          grade,
          jlpt,
          radical,
          meanings,
          frequency,
          reading_ja_onyomi_katakana,
          reading_ja_kunyomi_hiragana,
          reading_ja_onyomi_latin,
          reading_ja_kunyomi_latin,
          reading_ja_nanori_hiragana,
          reading_ja_nanori_latin,
          reading_zh_pinyin_numbered,
          reading_zh_pinyin_diacritics,
          reading_ko_hangeul,
          reading_ko_latin,
          COALESCE((100 - (frequency * 100 / (SELECT MAX(frequency) FROM kanji))), 10) AS freq_percentage,
          REPLACE(reading_ja_onyomi_latin, '.', '') as reading_ja_onyomi_latin_stripped_raw,
          REPLACE(reading_ja_kunyomi_latin, '.', '') as reading_ja_kunyomi_latin_stripped_raw,
          COUNT(*) OVER() AS total_count
        FROM
          kanji
          -- Additional JSON columns
          ${(() => {
            if (searchMode === 'latin') {
              return sql`
                ,json_each(reading_ja_onyomi_latin_stripped_raw) reading_ja_onyomi_latin_json,
                json_each(reading_ja_kunyomi_latin_stripped_raw) reading_ja_kunyomi_latin_json,
                json_each(meanings) meanings_json,
                json_each(reading_ko_latin) reading_ko_latin_json,
                json_each(reading_zh_pinyin_numbered) reading_zh_pinyin_numbered_json
              `;
            }
            if (searchMode === 'hangeul') {
              return sql`
                ,json_each(reading_ko_hangeul) reading_ko_hangeul_json
              `;
            }
          })()}
        WHERE
          ${(() => {
            if (searchMode === 'latin') {
              return sql`
                reading_ja_onyomi_latin_json.value like $search || '%'
                OR reading_ja_kunyomi_latin_json.value like $search || '%'
                OR meanings_json.value like $search || '%'
                OR reading_ko_latin_json.value like $search || '%'
                OR reading_zh_pinyin_numbered_json.value like $search || '%'
              `;
            }
            if (searchMode === 'hangeul') {
              return sql`
                reading_ko_hangeul_json.value like $search || '%'
              `;
            }
            // Han
            return sql`
              $search LIKE literal || '%'
              OR $search LIKE literal_kyujitai || '%'
              OR $search LIKE literal_simplified || '%'
            `;
          })()}
        GROUP BY literal
        ORDER BY (
          -- 40% frequency
          (0.3 * freq_percentage)
          +
          -- 60% likeness
          (0.7 * CASE
            ${(() => {
              if (searchMode === 'latin') {
                return sql`
                  WHEN reading_ja_onyomi_latin_json.value LIKE $search || '%' THEN (LENGTH($search) * 100 / LENGTH(reading_ja_onyomi_latin_json.value))
                  WHEN reading_ja_kunyomi_latin_json.value LIKE $search || '%' THEN (LENGTH($search) * 100 / LENGTH(reading_ja_kunyomi_latin_json.value))
                  WHEN meanings_json.value LIKE $search || '%' THEN (LENGTH($search) * 100 / LENGTH(meanings_json.value)) * 0.5
                  WHEN reading_ko_latin_json.value LIKE $search || '%' THEN (LENGTH($search) * 100 / LENGTH(reading_ko_latin_json.value)) * 0.8
                  WHEN reading_zh_pinyin_numbered_json.value LIKE $search || '%' THEN (LENGTH($search) * 100 / LENGTH(reading_zh_pinyin_numbered_json.value)) * 0.7
                `;
              }
              if (searchMode === 'hangeul') {
                return sql`
                  WHEN reading_ko_hangeul_json.value LIKE $search || '%' THEN 1
                `;
              }
              // Han
              return sql`
                WHEN $search LIKE literal || '%' THEN 1
                WHEN $search LIKE literal_kyujitai || '%' THEN 1
                WHEN $search LIKE literal_simplified || '%' THEN 1
              `;
            })()}
          ELSE 50
          END)
        ) DESC
        LIMIT $limit
        OFFSET $offset
      `;

      const _kanjiList = await db.all(sqlQuery, {
        $search: search,
        $limit: limit,
        $offset: offset,
      });

      const kanjiList = ArrayWithTotalCount(KanjiList).safeParse(_kanjiList);
      if (!kanjiList.success) {
        throw new HTTPException(500, {
          message: "There's a problem processing your request.",
        });
      }

      return c.json(
        okPagination({
          data: kanjiList.data,
          limit,
          offset,
        }),
      );
    },
  )
  .notFound((c) => {
    c.status(404);
    return c.json(err(new Error('Not found')));
  });

export type AppType = typeof app;

serve(
  {
    fetch: app.fetch,
    port: Number(process.env.PORT || 4200),
  },
  (info) => {
    console.log(`✅ Listening on http://localhost:${info.port}`);
  },
);
