///<amd-module name='~api-types'/>

import { serve } from '@hono/node-server';
import { zValidator } from '@hono/zod-validator';
import { Resvg } from '@resvg/resvg-wasm';
import { isHan } from '@scriptin/is-han';
import { Kanji } from '@ziyo/types';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { logger } from 'hono/logger';
import path from 'path';
import satori from 'satori';
import ky from 'ky';
import { DatabaseSync } from 'node:sqlite';
import type { SearchParams, SearchResponse } from 'typesense/lib/Typesense/Documents';
import { fileURLToPath } from 'url';
import { isHiragana, isKana, isKatakana, isRomaji, toRomaji } from 'wanakana';
import { z } from 'zod';

import { IndexOpenGraphImage, KanjiOpenGraphImage } from './og-images';
import isHangeul from './utils/isHangeul';
import { err, ok, okPagination } from './utils/response';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db = new DatabaseSync(`${__dirname}/assets/kanji.sqlite`);

const app = new Hono()
  .basePath('/api')

  /* Middlewares */
  .use('*', cors())
  .use(
    '*',
    logger((str) =>
      console.log(
        `${decodeURIComponent(str)} on ${new Date().toLocaleString('sv-SE').replace(' ', 'T').split('.')[0]}`,
      ),
    ),
  )
  .use('*', compress())
  .get('*', async (c, next) => {
    c.header('Cache-Control', 'public, max-age=3600');
    await next();
  })

  .get(
    '/og-image.png',
    /**
     * `charData` is a string of the form: `${kanji}::${onyomi}::${kunyomi}::${pinyin}::${korean}::${meanings}`
     * where each field is separated by `::` and each field is a string of comma-separated values
     */
    zValidator(
      'query',
      z.object({
        charData: z.string().optional(),
      }),
    ),
    async (c) => {
      const query = c.req.valid('query');

      const CharDataSchema =
        z.custom<`${string}::${string}::${string}::${string}`>((value) => {
          return typeof value === 'string' && /^([^:]+::){3}[^:]+$/.test(value);
        }, 'charData must be a string of the form: `${kanji}::${onyomi}::${kunyomi}::${meanings}`');

      const parsedCharData = query.charData
        ? CharDataSchema.parse(
          Buffer.from(query.charData, 'base64').toString('utf-8'),
        )
        : null;

      const imageHash = parsedCharData
        ? parsedCharData.split('::')[0]
        : 'index';

      const isFileExists = existsSync(
        path.join(__dirname, `./assets/images/${imageHash}.png`),
      );

      if (isFileExists) {
        const image = readFileSync(
          path.join(__dirname, `./assets/images/${imageHash}.png`),
        );
        return c.newResponse(image, 200, {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=86400',
        });
      }

      const OpenGraphImage = parsedCharData
        ? KanjiOpenGraphImage({
          charData: parsedCharData,
        })
        : IndexOpenGraphImage();

      const svg = await satori(OpenGraphImage, {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Noto Sans JP',
            data: readFileSync(`${__dirname}/assets/NotoSansJP-Bold.ttf`),
            weight: 700,
            style: 'normal',
          },
          {
            name: 'Sora',
            data: readFileSync(`${__dirname}/assets/Sora-Regular.ttf`),
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Sora',
            data: readFileSync(`${__dirname}/assets/Sora-Bold.ttf`),
            weight: 700,
            style: 'normal',
          },
        ],
      });

      const resvg = new Resvg(svg, {
        background: 'rgba(238, 235, 230, .9)',
      });
      const pngBuffer = resvg.render().asPng();

      // Save to filesystem
      const base64Image = btoa(
        pngBuffer.reduce((data, byte) => data + String.fromCharCode(byte), ''),
      );

      try {
        mkdirSync(path.join(__dirname, `./assets/images`), { recursive: true });
        writeFileSync(
          path.join(__dirname, `./assets/images/${imageHash}.png`),
          base64Image,
          {
            encoding: 'base64',
          },
        );
      } catch (e) {
        console.error('Failed to save image!', e);
      }

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

      const _kanji = db.prepare(
        "SELECT * FROM 'kanji' WHERE literal = ? LIMIT 1",
      ).get(character);

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

      let search: string | undefined = undefined;
      let searchMode: 'latin' | 'hangeul' | 'han' = 'latin';

      for (const char of _search) {
        if (isHan(char)) {
          // Strip non-Han characters
          search = Array.from(_search).filter(isHan).join('');
          searchMode = 'han';
          break;
        }
        if (isHiragana(char) || isKatakana(char)) {
          // Strip non-kana characters, then convert to Latin
          search = toRomaji(Array.from(_search).filter(isKana).join(''));
          searchMode = 'latin';
          break;
        }
        if (isHangeul(char, 1)) {
          // Strip non-Hangeul characters
          search = Array.from(_search)
            .filter((c) => isHangeul(c, 1))
            .join('');
          searchMode = 'hangeul';
          break;
        }
        if (isRomaji(char)) {
          search = _search.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
        }
      }

      if (search == null) {
        search = _search.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
      }

      const searchParams = (() => {
        switch (searchMode) {
          case 'latin':
            return {
              q: search,
              query_by:
                'reading_ja_onyomi_latin_stripped_raw,reading_ja_kunyomi_latin_stripped_raw,meanings,reading_ko_latin,reading_zh_pinyin_numbered',
              query_by_weights: '10,10,5,8,7',
              text_match_type: 'max_weight',
              sort_by: '_text_match:desc,freq_percentage:desc',
              limit: limit.toString(),
              offset: offset.toString(),
            };
          case 'hangeul':
            return {
              q: search,
              query_by: 'reading_ko_hangeul',
              limit: limit.toString(),
              offset: offset.toString(),
            };
          default:
            // Han mode
            return {
              q: search,
              query_by: 'literal,literal_kyujitai,literal_simplified',
              limit: limit.toString(),
              offset: offset.toString(),
            };
        }
      })()

      const res = await ky.get<SearchResponse<Kanji>>(`${process.env.TYPESENSE_API_URL}/collections/kanji/documents/search`,
        {
          searchParams: searchParams as Record<string, string>,
          headers: {
            'Accept': 'application/json, text/plain',
            'X-TYPESENSE-API-KEY': process.env.TYPESENSE_API_KEY,
            'Content-Type': 'application/json'
          }
        }
      )

      if (res.status !== 200) {
        throw new HTTPException(500, {
          message: "There's a problem processing your request.",
        });
      }

      const data = await res.json()

      return c.json(
        okPagination({
          data: data.hits?.map((hit) => hit.document) ?? [],
          limit,
          offset,
          total: data.found,
        }),
      );
    },
  )
  .notFound((c) => {
    c.status(404);
    return c.json(err(new Error('Not found')));
  });

serve(
  {
    fetch: app.fetch,
    port: Number(process.env.PORT || 4200),
  },
  (info) => {
    console.log(`✅ Listening on http://localhost:${info.port}`);
  },
);

process.on('exit', () => db.close());

export type BackendType = typeof app;
