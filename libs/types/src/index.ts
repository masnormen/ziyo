import { z } from 'zod';
import { zu } from 'zod_utilz';

export const Kanji = z.object({
  literal: z.string(),
  literal_kyujitai: z.string().nullable(),
  literal_simplified: z.string().nullable(),
  frequency: z.number().nullable(),
  strokeCounts: z.number(),
  grade: z.number().nullable(),
  jlpt: z.number().nullable(),
  radical: z.number().nullable(),
  reading_zh_pinyin_numbered: zu.stringToJSON().pipe(z.array(z.string())),
  reading_zh_pinyin_diacritics: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ko_hangeul: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ko_latin: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ja_onyomi_katakana: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ja_onyomi_latin: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ja_kunyomi_hiragana: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ja_kunyomi_latin: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ja_nanori_hiragana: zu.stringToJSON().pipe(z.array(z.string())),
  reading_ja_nanori_latin: zu.stringToJSON().pipe(z.array(z.string())),
  meanings: zu.stringToJSON().pipe(z.array(z.string())),
});
export type Kanji = z.infer<typeof Kanji>;

export const KanjiList = z.array(Kanji);
export type KanjiList = z.infer<typeof KanjiList>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ArrayWithTotalCount = <T extends z.ZodArray<z.AnyZodObject>>(
  type: T,
) => {
  type ObjectType = T extends z.ZodArray<infer A extends z.AnyZodObject>
    ? A extends z.ZodObject<infer B>
      ? B
      : never
    : never;

  const newType = type._def.type.merge(
    z.object({
      total_count: z.number(),
    }),
  );
  return z.array(newType) as z.ZodArray<
    z.ZodObject<ObjectType & { total_count: z.ZodNumber }>
  >;
};

// export type ArrayWithTotalCount<
//   T extends z.ZodArray<A>,
//   A extends z.ZodObject<{
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     [x: string]: any;
//   }>,
// > = typeof;

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
