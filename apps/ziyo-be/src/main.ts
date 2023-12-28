import { serve } from '@hono/node-server';
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
import { z } from 'zod';

import { err, ok } from './utils/response';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db = await open({
  filename: `${__dirname}/assets/kanji.sqlite`,
  driver: sqlite3.cached.Database,
  mode: sqlite3.OPEN_READONLY,
});

const app = new Hono()
  .use('/api/*', cors())
  .use(
    '*',
    logger((str) => console.log(decodeURIComponent(str))),
  )
  .use('*', compress())
  .get('*', async (c, next) => {
    c.header('Cache-Control', 'public, max-age=3600');
    await next();
  })
  .get('/kanji/:kanji', async (c) => {
    const { kanji } = c.req.param();
    const res = await db.get<(typeof Kanji)['_input']>(
      "SELECT * FROM 'kanji' WHERE literal = ? LIMIT 1",
      [kanji],
    );

    const parsed = Kanji.safeParse(res);
    if (!parsed.success) {
      throw new HTTPException(500, {
        message: "There's a problem processing your request.",
      });
    }

    return c.json(ok(parsed.data));
  })
  .get('/kanji/by-reading/:reading', async (c) => {
    const { reading } = c.req.param();
    const query = c.req.query() as {
      limit?: string;
      offset?: string;
    };

    const parsedQuery = z
      .object({
        limit: z.coerce.number().default(10),
        offset: z.coerce.number().default(0),
      })
      .safeParse(query);

    if (!reading || !parsedQuery.success) {
      throw new HTTPException(400, {
        message: 'Invalid readings, limit, or offset',
      });
    }

    const { limit, offset } = parsedQuery.data;

    const res = await db.get<(typeof Kanji)['_input'][]>(
      "SELECT * FROM 'kanji' WHERE readingMeanings LIKE ? LIMIT ? OFFSET ?",
      [`%${reading}%`, limit, offset],
    );

    const parsed = KanjiList.safeParse(res);
    if (!parsed.success) {
      throw new HTTPException(500, {
        message: "There's a problem processing your request.",
      });
    }
    return c.json(ok(parsed.data));
  })
  .notFound((c) => {
    c.status(404);
    return c.json(err(new Error('Not found')));
  });

export type AppType = typeof app;

serve(app, (info) => {
  console.log(`✅ Listening on http://localhost:${info.port}`);
});
