import { z } from 'zod';

const Reading = z.union([
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

const Nanori = z.object({
  hiragana: z.string(),
  latin: z.string(),
});

export const Kanji = z.object({
  literal: z.string(),
  strokeCounts: z.number(),
  grade: z.number().nullable(),
  jlpt: z.number().nullable(),
  radical: z.number().nullable(),
  readingMeanings: z
    .string()
    .transform((str) => JSON.parse(str))
    .transform<z.infer<typeof ReadingMeaning>>((arr) =>
      arr.map(ReadingMeaning.parse),
    )
    .nullable(),
  nanori: z
    .string()
    .transform((str) => JSON.parse(str))
    .transform<z.infer<typeof Nanori>>((arr) => arr.map(Nanori.parse)),
});

export type Kanji = z.infer<typeof Kanji>;
