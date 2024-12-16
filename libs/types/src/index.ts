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
  type ObjectType =
    T extends z.ZodArray<infer A extends z.AnyZodObject>
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

export const TatoebaResponse = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      text: z.string(),
      lang: z.string(),
      script: z.any(),
      license: z.string(),
      transcriptions: z.array(
        z.object({
          script: z.string(),
          text: z.string(),
          needsReview: z.boolean(),
          type: z.string(),
          html: z.string(),
        }),
      ),
      audios: z.array(z.any()),
      translations: z.array(
        z.array(
          z.object({
            id: z.number(),
            text: z.string(),
            lang: z.string(),
            script: z.any(),
            license: z.string(),
            transcriptions: z.array(z.any()),
            audios: z.array(
              z.object({
                author: z.string(),
                attribution_url: z.string(),
                license: z.string(),
                download_url: z.string(),
              }),
            ),
            owner: z.string().optional(),
          }),
        ),
      ),
      owner: z.string().optional(),
    }),
  ),
});

export type TatoebaResponse = z.infer<typeof TatoebaResponse>;
