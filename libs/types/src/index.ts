import { z } from 'zod';

export const Reading = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('zh'),
    pinyinWithNumber: z.string(),
    pinyinWithDiacritics: z.string(),
  }),
  z.object({
    type: z.literal('ko'),
    hangeul: z.string(),
    latin: z.string(),
  }),
  z.object({
    type: z.literal('ja_onyomi'),
    katakana: z.string(),
    latin: z.string(),
  }),
  z.object({
    type: z.literal('ja_kunyomi'),
    hiragana: z.string(),
    latin: z.string(),
  }),
]);

const ReadingMeaning = z.object({
  readings: z.array(Reading),
  meanings: z.array(z.string()),
});

type ReadingMeaning = z.infer<typeof ReadingMeaning>;

const Nanori = z.object({
  hiragana: z.string(),
  latin: z.string(),
});

type Nanori = z.infer<typeof Nanori>;

export const Kanji = z.object({
  literal: z.string(),
  strokeCounts: z.number(),
  grade: z.number().nullable(),
  jlpt: z.number().nullable(),
  radical: z.number().nullable(),
  readingMeanings: z
    .string()
    .transform(
      (str) => JSON.parse(str).map(ReadingMeaning.parse) as ReadingMeaning[],
    )
    .nullable(),
  nanori: z
    .string()
    .transform((str) => JSON.parse(str).map(Nanori.parse) as Nanori[]),
});

export type Kanji = z.infer<typeof Kanji>;
