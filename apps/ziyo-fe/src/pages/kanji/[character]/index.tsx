import { TatoebaResponse } from '@ziyo/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@ziyo/ui';
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import { useCallback, useState } from 'react';

import { Branding } from '../../../components/Branding';
import { Chip } from '../../../components/Chip';
import { ReadingChip } from '../../../components/ReadingChip';
import { Ruby } from '../../../components/Ruby';
import { Search } from '../../../components/Search';
import { Settings } from '../../../components/Settings';
import { api } from '../../../lib/api';

export const VariantChip = ({
  lang,
  className,
  tooltipContent,
  children,
  ...props
}: JSX.IntrinsicElements['span'] & {
  tooltipContent: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <Chip lang={lang} className={className} {...props}>
            {children}
          </Chip>
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const getServerSideProps = async ({
  query: { character },
}: GetServerSidePropsContext) => {
  if (!character || Array.isArray(character)) return { notFound: true };

  try {
    const _kanji = api.kanji.one
      .$get({
        query: {
          character: decodeURIComponent(character),
        },
      })
      .then(async (res) => (await res.json()).data);

    const _sentences = fetch(
      `https://tatoeba.org/en/api_v0/search?from=jpn&has_audio=&list=3185&native=&orphans=no&query=${decodeURIComponent(
        character,
      )}&sort=random&sort_reverse=&tags=&to=eng&trans_filter=limit&trans_has_audio=&trans_link=&trans_orphan=&trans_to=eng&trans_unapproved=&trans_user=&unapproved=no&user=&word_count_max=&word_count_min=5`,
      {
        next: {
          revalidate: 0,
        },
      },
    ).then(async (res) => TatoebaResponse.parse(await res.json()));

    const [kanji, sentences] = await Promise.all([_kanji, _sentences]);

    return {
      props: {
        kanji,
        sentences,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default function KanjiPage({
  kanji,
  sentences: _sentences,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const sentences = _sentences.results.map((s) => {
    return {
      id: s.id,
      text: s.transcriptions[0]?.text,
      translation: s.translations[0]?.[0]?.text || (
        <span className="italic">No translation available</span>
      ),
    };
  });

  const [hoveredVariants, setHoveredVariants] = useState<{
    lang: string;
    char: string;
  } | null>(null);

  const createHoveredProps = useCallback(
    (lang: string, char: string) => ({
      onMouseEnter: () => setHoveredVariants({ lang, char }),
      onMouseLeave: () => setHoveredVariants(null),
    }),
    [],
  );

  return (
    <>
      <NextSeo
        title={`Kanji: ${kanji.literal} · Ziyo ジヨ`}
        canonical={`https://ziyo.nourman.com/kanji/${kanji.literal}`}
        openGraph={{
          url: `https://ziyo.nourman.com/kanji/${kanji.literal}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_API_URL}/api/og-image.png?charData=${encodeURIComponent(Buffer.from(`${kanji.literal}::${kanji.reading_ja_onyomi_katakana.join(',')}::${kanji.reading_ja_kunyomi_hiragana.join(',')}::${kanji.meanings.join(',')}`).toString('base64'))}`,
              width: 1200,
              height: 630,
              alt: `${kanji.literal} · Ziyo ジヨ`,
            },
          ],
        }}
      />

      <div className="!z-10 mx-auto flex h-full w-full max-w-[600px] flex-col items-center justify-center gap-6 px-8 py-16 md:justify-start">
        <Branding small />
        <Search />
        <Settings />

        <h1
          lang={hoveredVariants ? hoveredVariants.lang : 'ja'}
          className="mb-6 mt-8 text-8xl [text-shadow:5px_5px_60px_#DD8F09]"
        >
          {hoveredVariants ? hoveredVariants.char : kanji.literal}
        </h1>

        {/* Variants */}
        <section className="mb-6 flex flex-row items-center justify-center gap-2 font-medium md:gap-4">
          <span className="mr-3 text-sm font-semibold text-kiiro-800">
            Variants
          </span>
          {kanji.literal_simplified && (
            <VariantChip
              tooltipContent="Simplified Chinese"
              lang="zh-Hans"
              className="border border-indigo-100 bg-indigo-50 text-2xl font-normal hover:bg-indigo-600 hover:text-gray-100"
              {...createHoveredProps('zh-Hans', kanji.literal_simplified)}
            >
              {kanji.literal_simplified}
            </VariantChip>
          )}

          {kanji.literal_kyujitai && (
            <VariantChip
              tooltipContent="Traditional Chinese / Kyūjitai"
              lang="zh-Hant"
              className="border border-emerald-100 bg-emerald-50 text-2xl font-normal hover:bg-emerald-700 hover:text-gray-100"
              {...createHoveredProps('zh-Hant', kanji.literal_kyujitai)}
            >
              {kanji.literal_kyujitai}
            </VariantChip>
          )}

          {kanji.literal_kyujitai && (
            <VariantChip
              tooltipContent="Korean / Hanja"
              lang="ko"
              className="border border-yellow-100 bg-yellow-50 text-2xl font-normal hover:bg-yellow-600 hover:text-gray-100"
              {...createHoveredProps('ko', kanji.literal_kyujitai)}
            >
              {kanji.literal_kyujitai}
            </VariantChip>
          )}
        </section>

        <div className="mb-6 text-center text-sm font-medium">
          {kanji.meanings.join(' · ')}
        </div>

        {/* Reading-Meanings */}
        <section className="flex w-full flex-col gap-3">
          {kanji.reading_ja_onyomi_katakana.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="mt-0.5 min-w-20 text-sm font-semibold text-kiiro-800">
                Onyomi
              </span>
              <div className="inline-flex flex-row flex-wrap gap-1">
                {kanji.reading_ja_onyomi_katakana.map((onyomi, onyomiIdx) => (
                  <ReadingChip
                    key={onyomi}
                    voice="jp_001"
                    lang="ja"
                    text={onyomi}
                    latin={kanji.reading_ja_onyomi_latin[onyomiIdx]}
                    className="bg-rose-100 text-gray-900 hover:bg-rose-700 hover:text-gray-100"
                  />
                ))}
              </div>
            </div>
          )}

          {kanji.reading_ja_kunyomi_hiragana.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="mt-0.5 min-w-20 text-sm font-semibold text-kiiro-800">
                Kunyomi
              </span>
              <div className="inline-flex flex-row flex-wrap gap-1">
                {kanji.reading_ja_kunyomi_hiragana.map(
                  (kunyomi, kunyomiIdx) => (
                    <ReadingChip
                      key={kunyomi}
                      voice="jp_001"
                      lang="ja"
                      text={kunyomi}
                      latin={kanji.reading_ja_kunyomi_latin[kunyomiIdx]}
                      other={kunyomi.replace(/^[^.]*\./, kanji.literal)}
                      className="bg-kiiro-200 text-gray-900 hover:bg-kiiro-800 hover:text-gray-100"
                    />
                  ),
                )}
              </div>
            </div>
          )}

          {kanji.reading_zh_pinyin_diacritics.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="mt-0.5 min-w-20 text-sm text-kiiro-800">
                Chinese
              </span>
              <div className="inline-flex flex-row flex-wrap gap-1">
                {kanji.reading_zh_pinyin_diacritics.map((pinyin, pinyinIdx) => (
                  <ReadingChip
                    key={pinyin}
                    voice={null}
                    lang="zh"
                    text={pinyin}
                    latin={pinyin}
                    other={kanji.reading_zh_pinyin_numbered[pinyinIdx]}
                    className="bg-purple-100 text-gray-900 hover:bg-purple-600 hover:text-gray-100"
                  />
                ))}
              </div>
            </div>
          )}

          {kanji.reading_ko_hangeul.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="mt-0.5 min-w-20 text-sm text-kiiro-800">
                Korean
              </span>
              <div className="inline-flex flex-row flex-wrap gap-1">
                {kanji.reading_ko_hangeul.map((hangeul, hangeulIdx) => (
                  <ReadingChip
                    key={hangeul}
                    voice="kr_002"
                    lang="ko"
                    text={hangeul}
                    latin={kanji.reading_ko_latin[hangeulIdx]}
                    className="bg-blue-100 text-gray-900 hover:bg-blue-600 hover:text-gray-100"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-row gap-4">
            <span className="mt-0.5 min-w-20 text-sm text-kiiro-800">
              Level
            </span>
            <div className="mt-0.5 inline-flex flex-row flex-wrap gap-1 text-sm">
              {kanji.jlpt ? `JLPT N${kanji.jlpt} (old)` : 'N/A'} /{' '}
              {kanji.grade ? `Grade ${kanji.grade}` : 'N/A'}
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <span className="mt-0.5 min-w-20 text-sm text-kiiro-800">
              Frequency
            </span>
            <div className="mt-0.5 inline-flex flex-row flex-wrap gap-1 text-sm">
              #{kanji.frequency ?? 'N/A'}
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <span className="mt-0.5 min-w-20 text-sm text-kiiro-800">
              Strokes
            </span>
            <div className="mt-0.5 inline-flex flex-row flex-wrap gap-1 text-sm">
              {kanji.strokeCounts} strokes
            </div>
          </div>
        </section>

        <section className="mt-4 flex w-full flex-col gap-4">
          <span className="text-sm font-semibold text-kiiro-900">
            {sentences.length > 0 ? 'Examples' : 'No examples found 😢'}
          </span>
          {sentences.map((s) => (
            <div key={s.id} lang="ja" className="flex flex-col">
              <Ruby rubyString={s.text} />
              <span className="text-sm">{s.translation}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
