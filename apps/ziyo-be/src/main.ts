import { serve } from '@hono/node-server';
import { Kanji } from '@ziyo/types';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';

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
      c.status(404);
      return c.json({ error: 'Kanji not found' });
    }
    return c.json(parsed.data);
  })
  .notFound((c) => {
    c.status(404);
    return c.json({ error: 'Not found' });
  });

export type AppType = typeof app;

serve(app, (info) => {
  console.log(`✅ Listening on http://localhost:${info.port}`);
});
