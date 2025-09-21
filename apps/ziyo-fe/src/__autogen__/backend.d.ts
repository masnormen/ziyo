/* eslint-disable */
declare module "libs/types/src/index" {
    import { z } from 'zod';
    export const Kanji: z.ZodObject<{
        literal: z.ZodString;
        literal_kyujitai: z.ZodNullable<z.ZodString>;
        literal_simplified: z.ZodNullable<z.ZodString>;
        frequency: z.ZodNullable<z.ZodNumber>;
        strokeCounts: z.ZodNumber;
        grade: z.ZodNullable<z.ZodNumber>;
        jlpt: z.ZodNullable<z.ZodNumber>;
        radical: z.ZodNullable<z.ZodNumber>;
        reading_zh_pinyin_numbered: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_zh_pinyin_diacritics: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ko_hangeul: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ko_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_onyomi_katakana: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_onyomi_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_kunyomi_hiragana: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_kunyomi_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_nanori_hiragana: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_nanori_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        meanings: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        literal: string;
        literal_kyujitai: string | null;
        literal_simplified: string | null;
        frequency: number | null;
        strokeCounts: number;
        grade: number | null;
        jlpt: number | null;
        radical: number | null;
        reading_zh_pinyin_numbered: string[];
        reading_zh_pinyin_diacritics: string[];
        reading_ko_hangeul: string[];
        reading_ko_latin: string[];
        reading_ja_onyomi_katakana: string[];
        reading_ja_onyomi_latin: string[];
        reading_ja_kunyomi_hiragana: string[];
        reading_ja_kunyomi_latin: string[];
        reading_ja_nanori_hiragana: string[];
        reading_ja_nanori_latin: string[];
        meanings: string[];
    }, {
        literal: string;
        literal_kyujitai: string | null;
        literal_simplified: string | null;
        frequency: number | null;
        strokeCounts: number;
        grade: number | null;
        jlpt: number | null;
        radical: number | null;
        reading_zh_pinyin_numbered: string;
        reading_zh_pinyin_diacritics: string;
        reading_ko_hangeul: string;
        reading_ko_latin: string;
        reading_ja_onyomi_katakana: string;
        reading_ja_onyomi_latin: string;
        reading_ja_kunyomi_hiragana: string;
        reading_ja_kunyomi_latin: string;
        reading_ja_nanori_hiragana: string;
        reading_ja_nanori_latin: string;
        meanings: string;
    }>;
    export type Kanji = z.infer<typeof Kanji>;
    export const KanjiList: z.ZodArray<z.ZodObject<{
        literal: z.ZodString;
        literal_kyujitai: z.ZodNullable<z.ZodString>;
        literal_simplified: z.ZodNullable<z.ZodString>;
        frequency: z.ZodNullable<z.ZodNumber>;
        strokeCounts: z.ZodNumber;
        grade: z.ZodNullable<z.ZodNumber>;
        jlpt: z.ZodNullable<z.ZodNumber>;
        radical: z.ZodNullable<z.ZodNumber>;
        reading_zh_pinyin_numbered: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_zh_pinyin_diacritics: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ko_hangeul: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ko_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_onyomi_katakana: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_onyomi_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_kunyomi_hiragana: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_kunyomi_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_nanori_hiragana: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        reading_ja_nanori_latin: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
        meanings: z.ZodPipeline<z.ZodEffects<z.ZodString, string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | {
            [key: string]: any;
        } | (string | number | boolean | any[] | {
            [key: string]: any;
        } | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, string>, z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        literal: string;
        literal_kyujitai: string | null;
        literal_simplified: string | null;
        frequency: number | null;
        strokeCounts: number;
        grade: number | null;
        jlpt: number | null;
        radical: number | null;
        reading_zh_pinyin_numbered: string[];
        reading_zh_pinyin_diacritics: string[];
        reading_ko_hangeul: string[];
        reading_ko_latin: string[];
        reading_ja_onyomi_katakana: string[];
        reading_ja_onyomi_latin: string[];
        reading_ja_kunyomi_hiragana: string[];
        reading_ja_kunyomi_latin: string[];
        reading_ja_nanori_hiragana: string[];
        reading_ja_nanori_latin: string[];
        meanings: string[];
    }, {
        literal: string;
        literal_kyujitai: string | null;
        literal_simplified: string | null;
        frequency: number | null;
        strokeCounts: number;
        grade: number | null;
        jlpt: number | null;
        radical: number | null;
        reading_zh_pinyin_numbered: string;
        reading_zh_pinyin_diacritics: string;
        reading_ko_hangeul: string;
        reading_ko_latin: string;
        reading_ja_onyomi_katakana: string;
        reading_ja_onyomi_latin: string;
        reading_ja_kunyomi_hiragana: string;
        reading_ja_kunyomi_latin: string;
        reading_ja_nanori_hiragana: string;
        reading_ja_nanori_latin: string;
        meanings: string;
    }>, "many">;
    export type KanjiList = z.infer<typeof KanjiList>;
    export const ArrayWithTotalCount: <T extends z.ZodArray<z.AnyZodObject, "many">>(type: T) => z.ZodArray<z.ZodObject<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_1]; } : never> ? B : never : never) & {
        total_count: number;
    }, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_1]; } : never> ? B : never : never) & {
        total_count: number;
    }>, any> extends infer T_3 ? { [k_2 in keyof T_3]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_1]; } : never> ? B : never : never) & {
        total_count: number;
    }>, any>[k_2]; } : never, z.baseObjectInputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_1]; } : never> ? B : never : never) & {
        total_count: number;
    }> extends infer T_4 ? { [k_3 in keyof T_4]: z.baseObjectInputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, any>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_1]; } : never> ? B : never : never) & {
        total_count: number;
    }>[k_3]; } : never>, "many">;
    export const TatoebaResponse: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            text: z.ZodString;
            lang: z.ZodString;
            script: z.ZodAny;
            license: z.ZodString;
            transcriptions: z.ZodArray<z.ZodObject<{
                script: z.ZodString;
                text: z.ZodString;
                needsReview: z.ZodBoolean;
                type: z.ZodString;
                html: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                text: string;
                script: string;
                needsReview: boolean;
                html: string;
            }, {
                type: string;
                text: string;
                script: string;
                needsReview: boolean;
                html: string;
            }>, "many">;
            audios: z.ZodArray<z.ZodAny, "many">;
            translations: z.ZodArray<z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                text: z.ZodString;
                lang: z.ZodString;
                script: z.ZodAny;
                license: z.ZodString;
                transcriptions: z.ZodArray<z.ZodAny, "many">;
                audios: z.ZodArray<z.ZodObject<{
                    author: z.ZodString;
                    attribution_url: z.ZodString;
                    license: z.ZodString;
                    download_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }, {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }>, "many">;
                owner: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: number;
                text: string;
                lang: string;
                license: string;
                transcriptions: any[];
                audios: {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }[];
                script?: any;
                owner?: string | undefined;
            }, {
                id: number;
                text: string;
                lang: string;
                license: string;
                transcriptions: any[];
                audios: {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }[];
                script?: any;
                owner?: string | undefined;
            }>, "many">, "many">;
            owner: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: number;
            text: string;
            lang: string;
            license: string;
            transcriptions: {
                type: string;
                text: string;
                script: string;
                needsReview: boolean;
                html: string;
            }[];
            audios: any[];
            translations: {
                id: number;
                text: string;
                lang: string;
                license: string;
                transcriptions: any[];
                audios: {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }[];
                script?: any;
                owner?: string | undefined;
            }[][];
            script?: any;
            owner?: string | undefined;
        }, {
            id: number;
            text: string;
            lang: string;
            license: string;
            transcriptions: {
                type: string;
                text: string;
                script: string;
                needsReview: boolean;
                html: string;
            }[];
            audios: any[];
            translations: {
                id: number;
                text: string;
                lang: string;
                license: string;
                transcriptions: any[];
                audios: {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }[];
                script?: any;
                owner?: string | undefined;
            }[][];
            script?: any;
            owner?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        data: {
            id: number;
            text: string;
            lang: string;
            license: string;
            transcriptions: {
                type: string;
                text: string;
                script: string;
                needsReview: boolean;
                html: string;
            }[];
            audios: any[];
            translations: {
                id: number;
                text: string;
                lang: string;
                license: string;
                transcriptions: any[];
                audios: {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }[];
                script?: any;
                owner?: string | undefined;
            }[][];
            script?: any;
            owner?: string | undefined;
        }[];
    }, {
        data: {
            id: number;
            text: string;
            lang: string;
            license: string;
            transcriptions: {
                type: string;
                text: string;
                script: string;
                needsReview: boolean;
                html: string;
            }[];
            audios: any[];
            translations: {
                id: number;
                text: string;
                lang: string;
                license: string;
                transcriptions: any[];
                audios: {
                    license: string;
                    author: string;
                    attribution_url: string;
                    download_url: string;
                }[];
                script?: any;
                owner?: string | undefined;
            }[][];
            script?: any;
            owner?: string | undefined;
        }[];
    }>;
    export type TatoebaResponse = z.infer<typeof TatoebaResponse>;
}
declare module "apps/ziyo-be/src/og-images" {
    export const IndexOpenGraphImage: () => import("react/jsx-runtime").JSX.Element;
    /**
     * `charData` is a string of the form: `${kanji}::${onyomi}::${kunyomi}::${meanings}`
     * where each field is separated by `::` and each field is a string of comma-separated values
     */
    export const KanjiOpenGraphImage: ({ charData, }: {
        charData: `${string}::${string}::${string}::${string}`;
    }) => import("react/jsx-runtime").JSX.Element;
}
declare module "apps/ziyo-be/src/utils/isHangeul" {
    export default function isHangeul(str: string, len: number): boolean;
}
declare module "apps/ziyo-be/src/utils/response" {
    import type { JSONValue } from 'hono/utils/types';
    export function ok<T extends JSONValue>(data: T): {
        readonly ok: true;
        readonly data: T;
        readonly message: "success";
    };
    export function okPagination<TData extends Array<{
        total_count?: number;
        [key: string]: unknown;
    }>>({ data, limit, offset, total, }: {
        data: TData;
        limit: number;
        offset: number;
        total?: number;
    }): {
        readonly ok: true;
        readonly data: {
            readonly docs: TData;
            readonly page: number;
            readonly totalDocs: number;
            readonly totalPages: number;
        };
        readonly message: "success";
    };
    export function err<T extends Error>(error: T): {
        readonly ok: false;
        readonly errorId: string;
        readonly message: string;
    };
}
/// <amd-module name="~api-types" />
declare module "~api-types" {
    import { Hono } from 'hono';
    const app: Hono<import("hono").Env, import("hono").ToSchema<"get", "/api/*", unknown, any> & import("hono").ToSchema<"get", "/api/og-image.png", {
        query: {
            charData?: string | undefined;
        };
    }, {}> & import("hono").ToSchema<"get", "/api/kanji/one", {
        query: {
            character: string;
        };
    }, import("hono/utils/types").JSONParsed<{
        readonly ok: true;
        readonly data: {
            literal: string;
            literal_kyujitai: string | null;
            literal_simplified: string | null;
            frequency: number | null;
            strokeCounts: number;
            grade: number | null;
            jlpt: number | null;
            radical: number | null;
            reading_zh_pinyin_numbered: string[];
            reading_zh_pinyin_diacritics: string[];
            reading_ko_hangeul: string[];
            reading_ko_latin: string[];
            reading_ja_onyomi_katakana: string[];
            reading_ja_onyomi_latin: string[];
            reading_ja_kunyomi_hiragana: string[];
            reading_ja_kunyomi_latin: string[];
            reading_ja_nanori_hiragana: string[];
            reading_ja_nanori_latin: string[];
            meanings: string[];
        };
        readonly message: "success";
    }>> & import("hono").ToSchema<"get", "/api/kanji/list", {
        query: {
            search: string;
            limit?: string | undefined;
            offset?: string | undefined;
        };
    }, import("hono/utils/types").JSONParsed<{
        readonly ok: true;
        readonly data: {
            readonly docs: {
                literal: string;
                literal_kyujitai: string | null;
                literal_simplified: string | null;
                frequency: number | null;
                strokeCounts: number;
                grade: number | null;
                jlpt: number | null;
                radical: number | null;
                reading_zh_pinyin_numbered: string[];
                reading_zh_pinyin_diacritics: string[];
                reading_ko_hangeul: string[];
                reading_ko_latin: string[];
                reading_ja_onyomi_katakana: string[];
                reading_ja_onyomi_latin: string[];
                reading_ja_kunyomi_hiragana: string[];
                reading_ja_kunyomi_latin: string[];
                reading_ja_nanori_hiragana: string[];
                reading_ja_nanori_latin: string[];
                meanings: string[];
            }[];
            readonly page: number;
            readonly totalDocs: number;
            readonly totalPages: number;
        };
        readonly message: "success";
    }>>, "/api">;
    export type BackendType = typeof app;
}
declare module "apps/ziyo-be/src/utils/isHan" {
    export const isHan: (str: string) => boolean;
}
