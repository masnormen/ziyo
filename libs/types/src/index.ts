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

const Variants = z.object({
  kyujitai: z.string().nullable(),
  simplified: z.string().nullable(),
});

type Variants = z.infer<typeof Variants>;

export const Kanji = z.object({
  literal: z.string(),
  variants: z
    .string()
    .transform((str) => Variants.parse(JSON.parse(str)) as Variants),
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

export const KanjiList = z.array(Kanji);

export type KanjiList = z.infer<typeof KanjiList>;

export const TatoebaResponse = z.object({
  paging: z.object({
    Sentences: z.object({
      finder: z.string(),
      page: z.number(),
      current: z.number(),
      count: z.number(),
      perPage: z.number(),
      start: z.number(),
      end: z.number(),
      prevPage: z.boolean(),
      nextPage: z.boolean(),
      pageCount: z.number(),
      sort: z.string(),
      direction: z.boolean(),
      sortDefault: z.boolean(),
      directionDefault: z.boolean(),
    }),
  }),
  results: z.array(
    z.object({
      id: z.number(),
      text: z.string(),
      lang: z.string(),
      correctness: z.number(),
      license: z.string(),
      translations: z.array(
        z.array(
          z.object({
            id: z.number(),
            text: z.string(),
            lang: z.string(),
            correctness: z.number(),
            audios: z.array(
              z.object({
                id: z.number(),
                author: z.string(),
                sentence_id: z.number().optional(),
              }),
            ),
            isDirect: z.boolean().optional(),
            lang_name: z.string(),
            dir: z.string(),
            lang_tag: z.string(),
          }),
        ),
      ),
      transcriptions: z.array(
        z.object({
          id: z.number(),
          sentence_id: z.number(),
          script: z.string(),
          text: z.string(),
          needsReview: z.boolean(),
          modified: z.string(),

          readonly: z.boolean(),
          type: z.string(),
          html: z.string(),
          info_message: z.string(),
        }),
      ),
      audios: z.array(
        z.object({
          id: z.number(),
          author: z.string(),
        }),
      ),
      lang_name: z.string(),
      dir: z.string(),
      lang_tag: z.string(),
      is_owned_by_current_user: z.boolean(),
      max_visible_translations: z.number(),
    }),
  ),
});

export type TatoebaResponse = z.infer<typeof TatoebaResponse>;
