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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        literal?: string;
        literal_kyujitai?: string;
        literal_simplified?: string;
        frequency?: number;
        strokeCounts?: number;
        grade?: number;
        jlpt?: number;
        radical?: number;
        reading_zh_pinyin_numbered?: string[];
        reading_zh_pinyin_diacritics?: string[];
        reading_ko_hangeul?: string[];
        reading_ko_latin?: string[];
        reading_ja_onyomi_katakana?: string[];
        reading_ja_onyomi_latin?: string[];
        reading_ja_kunyomi_hiragana?: string[];
        reading_ja_kunyomi_latin?: string[];
        reading_ja_nanori_hiragana?: string[];
        reading_ja_nanori_latin?: string[];
        meanings?: string[];
    }, {
        literal?: string;
        literal_kyujitai?: string;
        literal_simplified?: string;
        frequency?: number;
        strokeCounts?: number;
        grade?: number;
        jlpt?: number;
        radical?: number;
        reading_zh_pinyin_numbered?: string;
        reading_zh_pinyin_diacritics?: string;
        reading_ko_hangeul?: string;
        reading_ko_latin?: string;
        reading_ja_onyomi_katakana?: string;
        reading_ja_onyomi_latin?: string;
        reading_ja_kunyomi_hiragana?: string;
        reading_ja_kunyomi_latin?: string;
        reading_ja_nanori_hiragana?: string;
        reading_ja_nanori_latin?: string;
        meanings?: string;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
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
        })[])[])[])[])[])[])[])[])[])[], string>, z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        literal?: string;
        literal_kyujitai?: string;
        literal_simplified?: string;
        frequency?: number;
        strokeCounts?: number;
        grade?: number;
        jlpt?: number;
        radical?: number;
        reading_zh_pinyin_numbered?: string[];
        reading_zh_pinyin_diacritics?: string[];
        reading_ko_hangeul?: string[];
        reading_ko_latin?: string[];
        reading_ja_onyomi_katakana?: string[];
        reading_ja_onyomi_latin?: string[];
        reading_ja_kunyomi_hiragana?: string[];
        reading_ja_kunyomi_latin?: string[];
        reading_ja_nanori_hiragana?: string[];
        reading_ja_nanori_latin?: string[];
        meanings?: string[];
    }, {
        literal?: string;
        literal_kyujitai?: string;
        literal_simplified?: string;
        frequency?: number;
        strokeCounts?: number;
        grade?: number;
        jlpt?: number;
        radical?: number;
        reading_zh_pinyin_numbered?: string;
        reading_zh_pinyin_diacritics?: string;
        reading_ko_hangeul?: string;
        reading_ko_latin?: string;
        reading_ja_onyomi_katakana?: string;
        reading_ja_onyomi_latin?: string;
        reading_ja_kunyomi_hiragana?: string;
        reading_ja_kunyomi_latin?: string;
        reading_ja_nanori_hiragana?: string;
        reading_ja_nanori_latin?: string;
        meanings?: string;
    }>, "many">;
    export type KanjiList = z.infer<typeof KanjiList>;
    export const ArrayWithTotalCount: <T extends z.ZodArray<z.AnyZodObject, "many">>(type: T) => z.ZodArray<z.ZodObject<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }>, (z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }> extends infer T_4 extends object ? { [k_4 in keyof T_4]: undefined extends z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }>[k_4] ? never : k_4; } : never)[keyof (T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) | "total_count"]> extends infer T_3 ? { [k_3 in keyof T_3]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }>, (z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }> extends infer T_4 extends object ? { [k_4 in keyof T_4]: undefined extends z.baseObjectOutputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }>[k_4] ? never : k_4; } : never)[keyof (T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) | "total_count"]>[k_3]; } : never, z.baseObjectInputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }> extends infer T_5 ? { [k_5 in keyof T_5]: z.baseObjectInputType<(T extends z.ZodArray<infer A extends z.AnyZodObject, "many"> ? A extends z.ZodObject<infer B extends z.ZodRawShape, z.UnknownKeysParam, z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<infer B extends z.ZodRawShape>, { [k_1 in keyof z.baseObjectOutputType<infer B extends z.ZodRawShape>]: undefined extends z.baseObjectOutputType<B>[k_1] ? never : k_1; }[keyof infer B extends z.ZodRawShape]>[k]; } : never, z.baseObjectInputType<infer B extends z.ZodRawShape> extends infer T_2 ? { [k_2 in keyof T_2]: z.baseObjectInputType<infer B extends z.ZodRawShape>[k_2]; } : never> ? B : never : never) & {
        total_count: z.ZodNumber;
    }>[k_5]; } : never>, "many">;
    export const TatoebaResponse: z.ZodObject<{
        paging: z.ZodObject<{
            Sentences: z.ZodObject<{
                finder: z.ZodString;
                page: z.ZodNumber;
                current: z.ZodNumber;
                count: z.ZodNumber;
                perPage: z.ZodNumber;
                start: z.ZodNumber;
                end: z.ZodNumber;
                prevPage: z.ZodBoolean;
                nextPage: z.ZodBoolean;
                pageCount: z.ZodNumber;
                sort: z.ZodString;
                direction: z.ZodBoolean;
                sortDefault: z.ZodBoolean;
                directionDefault: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                finder?: string;
                page?: number;
                current?: number;
                count?: number;
                perPage?: number;
                start?: number;
                end?: number;
                prevPage?: boolean;
                nextPage?: boolean;
                pageCount?: number;
                sort?: string;
                direction?: boolean;
                sortDefault?: boolean;
                directionDefault?: boolean;
            }, {
                finder?: string;
                page?: number;
                current?: number;
                count?: number;
                perPage?: number;
                start?: number;
                end?: number;
                prevPage?: boolean;
                nextPage?: boolean;
                pageCount?: number;
                sort?: string;
                direction?: boolean;
                sortDefault?: boolean;
                directionDefault?: boolean;
            }>;
        }, "strip", z.ZodTypeAny, {
            Sentences?: {
                finder?: string;
                page?: number;
                current?: number;
                count?: number;
                perPage?: number;
                start?: number;
                end?: number;
                prevPage?: boolean;
                nextPage?: boolean;
                pageCount?: number;
                sort?: string;
                direction?: boolean;
                sortDefault?: boolean;
                directionDefault?: boolean;
            };
        }, {
            Sentences?: {
                finder?: string;
                page?: number;
                current?: number;
                count?: number;
                perPage?: number;
                start?: number;
                end?: number;
                prevPage?: boolean;
                nextPage?: boolean;
                pageCount?: number;
                sort?: string;
                direction?: boolean;
                sortDefault?: boolean;
                directionDefault?: boolean;
            };
        }>;
        results: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            text: z.ZodString;
            lang: z.ZodString;
            correctness: z.ZodNumber;
            license: z.ZodString;
            translations: z.ZodArray<z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                text: z.ZodString;
                lang: z.ZodString;
                correctness: z.ZodNumber;
                audios: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    author: z.ZodString;
                    sentence_id: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }, {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }>, "many">;
                isDirect: z.ZodOptional<z.ZodBoolean>;
                lang_name: z.ZodString;
                dir: z.ZodString;
                lang_tag: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id?: number;
                text?: string;
                lang?: string;
                correctness?: number;
                audios?: {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }[];
                isDirect?: boolean;
                lang_name?: string;
                dir?: string;
                lang_tag?: string;
            }, {
                id?: number;
                text?: string;
                lang?: string;
                correctness?: number;
                audios?: {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }[];
                isDirect?: boolean;
                lang_name?: string;
                dir?: string;
                lang_tag?: string;
            }>, "many">, "many">;
            transcriptions: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                sentence_id: z.ZodNumber;
                script: z.ZodString;
                text: z.ZodString;
                needsReview: z.ZodBoolean;
                modified: z.ZodString;
                readonly: z.ZodBoolean;
                type: z.ZodString;
                html: z.ZodString;
                info_message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id?: number;
                sentence_id?: number;
                script?: string;
                text?: string;
                needsReview?: boolean;
                modified?: string;
                readonly?: boolean;
                type?: string;
                html?: string;
                info_message?: string;
            }, {
                id?: number;
                sentence_id?: number;
                script?: string;
                text?: string;
                needsReview?: boolean;
                modified?: string;
                readonly?: boolean;
                type?: string;
                html?: string;
                info_message?: string;
            }>, "many">;
            audios: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                author: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id?: number;
                author?: string;
            }, {
                id?: number;
                author?: string;
            }>, "many">;
            lang_name: z.ZodString;
            dir: z.ZodString;
            lang_tag: z.ZodString;
            is_owned_by_current_user: z.ZodBoolean;
            max_visible_translations: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id?: number;
            text?: string;
            lang?: string;
            correctness?: number;
            license?: string;
            translations?: {
                id?: number;
                text?: string;
                lang?: string;
                correctness?: number;
                audios?: {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }[];
                isDirect?: boolean;
                lang_name?: string;
                dir?: string;
                lang_tag?: string;
            }[][];
            transcriptions?: {
                id?: number;
                sentence_id?: number;
                script?: string;
                text?: string;
                needsReview?: boolean;
                modified?: string;
                readonly?: boolean;
                type?: string;
                html?: string;
                info_message?: string;
            }[];
            audios?: {
                id?: number;
                author?: string;
            }[];
            lang_name?: string;
            dir?: string;
            lang_tag?: string;
            is_owned_by_current_user?: boolean;
            max_visible_translations?: number;
        }, {
            id?: number;
            text?: string;
            lang?: string;
            correctness?: number;
            license?: string;
            translations?: {
                id?: number;
                text?: string;
                lang?: string;
                correctness?: number;
                audios?: {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }[];
                isDirect?: boolean;
                lang_name?: string;
                dir?: string;
                lang_tag?: string;
            }[][];
            transcriptions?: {
                id?: number;
                sentence_id?: number;
                script?: string;
                text?: string;
                needsReview?: boolean;
                modified?: string;
                readonly?: boolean;
                type?: string;
                html?: string;
                info_message?: string;
            }[];
            audios?: {
                id?: number;
                author?: string;
            }[];
            lang_name?: string;
            dir?: string;
            lang_tag?: string;
            is_owned_by_current_user?: boolean;
            max_visible_translations?: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        paging?: {
            Sentences?: {
                finder?: string;
                page?: number;
                current?: number;
                count?: number;
                perPage?: number;
                start?: number;
                end?: number;
                prevPage?: boolean;
                nextPage?: boolean;
                pageCount?: number;
                sort?: string;
                direction?: boolean;
                sortDefault?: boolean;
                directionDefault?: boolean;
            };
        };
        results?: {
            id?: number;
            text?: string;
            lang?: string;
            correctness?: number;
            license?: string;
            translations?: {
                id?: number;
                text?: string;
                lang?: string;
                correctness?: number;
                audios?: {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }[];
                isDirect?: boolean;
                lang_name?: string;
                dir?: string;
                lang_tag?: string;
            }[][];
            transcriptions?: {
                id?: number;
                sentence_id?: number;
                script?: string;
                text?: string;
                needsReview?: boolean;
                modified?: string;
                readonly?: boolean;
                type?: string;
                html?: string;
                info_message?: string;
            }[];
            audios?: {
                id?: number;
                author?: string;
            }[];
            lang_name?: string;
            dir?: string;
            lang_tag?: string;
            is_owned_by_current_user?: boolean;
            max_visible_translations?: number;
        }[];
    }, {
        paging?: {
            Sentences?: {
                finder?: string;
                page?: number;
                current?: number;
                count?: number;
                perPage?: number;
                start?: number;
                end?: number;
                prevPage?: boolean;
                nextPage?: boolean;
                pageCount?: number;
                sort?: string;
                direction?: boolean;
                sortDefault?: boolean;
                directionDefault?: boolean;
            };
        };
        results?: {
            id?: number;
            text?: string;
            lang?: string;
            correctness?: number;
            license?: string;
            translations?: {
                id?: number;
                text?: string;
                lang?: string;
                correctness?: number;
                audios?: {
                    id?: number;
                    author?: string;
                    sentence_id?: number;
                }[];
                isDirect?: boolean;
                lang_name?: string;
                dir?: string;
                lang_tag?: string;
            }[][];
            transcriptions?: {
                id?: number;
                sentence_id?: number;
                script?: string;
                text?: string;
                needsReview?: boolean;
                modified?: string;
                readonly?: boolean;
                type?: string;
                html?: string;
                info_message?: string;
            }[];
            audios?: {
                id?: number;
                author?: string;
            }[];
            lang_name?: string;
            dir?: string;
            lang_tag?: string;
            is_owned_by_current_user?: boolean;
            max_visible_translations?: number;
        }[];
    }>;
    export type TatoebaResponse = z.infer<typeof TatoebaResponse>;
}
declare module "apps/ziyo-be/src/og-images" {
    export const IndexOpenGraphImage: () => import("react/jsx-runtime").JSX.Element;
    export const KanjiOpenGraphImage: ({ kanji }: {
        kanji: string;
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
    export function okPagination<TData extends Array<TObject>, TObject extends {
        total_count?: number;
    }>({ data, limit, offset }: {
        data: TData;
        limit: number;
        offset: number;
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
/// <amd-module name="BackendType" />
declare module "BackendType" {
    import { Hono } from 'hono';
    const app: Hono<import("hono").Env, import("hono").ToSchema<"get", "/api/*", unknown, any> & import("hono").ToSchema<"get", "/api/og-image.png", {
        query?: {
            character?: string;
        };
    }, {}> & import("hono").ToSchema<"get", "/api/kanji/one", {
        query?: {
            character?: string;
        };
    }, import("hono/utils/types").JSONParsed<{
        readonly ok: true;
        readonly data: {
            literal?: string;
            literal_kyujitai?: string;
            literal_simplified?: string;
            frequency?: number;
            strokeCounts?: number;
            grade?: number;
            jlpt?: number;
            radical?: number;
            reading_zh_pinyin_numbered?: string[];
            reading_zh_pinyin_diacritics?: string[];
            reading_ko_hangeul?: string[];
            reading_ko_latin?: string[];
            reading_ja_onyomi_katakana?: string[];
            reading_ja_onyomi_latin?: string[];
            reading_ja_kunyomi_hiragana?: string[];
            reading_ja_kunyomi_latin?: string[];
            reading_ja_nanori_hiragana?: string[];
            reading_ja_nanori_latin?: string[];
            meanings?: string[];
        };
        readonly message: "success";
    }>> & import("hono").ToSchema<"get", "/api/kanji/list", {
        query?: {
            search?: string;
            limit?: string;
            offset?: string;
        };
    }, import("hono/utils/types").JSONParsed<{
        readonly ok: true;
        readonly data: {
            readonly docs: {
                literal?: string;
                literal_kyujitai?: string;
                literal_simplified?: string;
                frequency?: number;
                strokeCounts?: number;
                grade?: number;
                jlpt?: number;
                radical?: number;
                reading_zh_pinyin_numbered?: string[];
                reading_zh_pinyin_diacritics?: string[];
                reading_ko_hangeul?: string[];
                reading_ko_latin?: string[];
                reading_ja_onyomi_katakana?: string[];
                reading_ja_onyomi_latin?: string[];
                reading_ja_kunyomi_hiragana?: string[];
                reading_ja_kunyomi_latin?: string[];
                reading_ja_nanori_hiragana?: string[];
                reading_ja_nanori_latin?: string[];
                meanings?: string[];
                total_count?: number;
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
