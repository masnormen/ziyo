import { Client } from 'typesense';
import type { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';
import { readFileSync } from 'fs';
import { join } from 'path';

let client = new Client({
  nodes: [
    {
      host: process.env.TYPESENSE_API_URL,
      port: 8108,
      protocol: 'http',
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 2,
});

let kanjiSchema = {
  name: 'kanji',
  fields: [
    { name: 'literal', type: 'string', facet: true },
    { name: 'literal_kyujitai', type: 'string', facet: true },
    { name: 'literal_simplified', type: 'string', facet: true },
    { name: 'reading_zh_pinyin_numbered', type: 'string[]', facet: true },
    { name: 'reading_ko_hangeul', type: 'string[]', facet: true },
    { name: 'reading_ko_latin', type: 'string[]', facet: true },
    { name: 'meanings', type: 'string[]', facet: true },
    {
      name: 'reading_ja_onyomi_latin_stripped_raw',
      type: 'string[]',
      facet: true,
    },
    {
      name: 'reading_ja_kunyomi_latin_stripped_raw',
      type: 'string[]',
      facet: true,
    },
    { name: 'freq_percentage', type: 'float' },
  ],
  default_sorting_field: 'freq_percentage',
} satisfies CollectionCreateSchema;

await client.collections().create(kanjiSchema);

const kanjiJsonl = readFileSync(join(__dirname, 'kanji.jsonl'), 'utf-8');
await client.collections('kanji').documents().import(kanjiJsonl);
