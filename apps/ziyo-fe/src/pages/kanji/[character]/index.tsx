import { isHan } from '@scriptin/is-han';
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

import { AudioPlay } from '../../../components/AudioPlay';
import { Branding } from '../../../components/Branding';
import { Chip } from '../../../components/Chip';
import { Search } from '../../../components/Search';
import { api } from '../../../lib/api';

const KanjiLink = ({
  kanji,
  highlight,
}: {
  kanji: string;
  highlight?: boolean;
}) =>
  `<a href="${kanji}" class="underline decoration-gray-400 underline-offset-4 hover:no-underline${
    highlight ? ` font-semibold` : ''
  }">${kanji}</a>`;

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
    const rawText = s.transcriptions[0]?.html ?? s.transcriptions[0]?.text;
    const text = Array.from(rawText)
      .map((char) => {
        return isHan(char)
          ? KanjiLink({ kanji: char, highlight: char === kanji.literal })
          : char;
      })
      .join('');
    return {
      id: s.id,
      text: text,
      translation: s.translations[0]?.[0]?.text || 'No translation available',
    };
  });

  return (
    <>
      <NextSeo
        title={`${kanji.literal} · Ziyo (ジヨ)`}
        canonical={`https://ziyo.nourman.com/kanji/${kanji.literal}`}
        openGraph={{
          url: `https://ziyo.nourman.com/kanji/${kanji.literal}`,
        }}
      />

      <div className="!z-10 mx-auto flex h-full w-full max-w-[600px] flex-col items-center justify-center gap-6 px-8 py-16 md:justify-start">
        <Branding small />
        <Search floating />

        <h1
          lang="ja"
          className="mb-8 mt-16 text-8xl [text-shadow:5px_5px_60px_#DD8F09]"
        >
          {kanji.literal}
        </h1>

        {/* Variants */}
        <section className="mb-4 flex flex-row items-center justify-center gap-4 font-medium">
          {kanji.literal_simplified && (
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Chip
                    lang="zh-Hans"
                    className="bg-red-100 text-2xl font-normal"
                  >
                    {kanji.literal_simplified}
                  </Chip>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Simplified Chinese
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {kanji.literal_kyujitai && (
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Chip
                    lang="zh-Hant"
                    className="bg-slate-200 text-2xl font-normal"
                  >
                    {kanji.literal_kyujitai}
                  </Chip>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Traditional Chinese / Kyūjitai
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {kanji.literal_kyujitai && (
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <Chip lang="ko" className="bg-blue-100 text-2xl font-normal">
                    {kanji.literal_kyujitai}
                  </Chip>
                </TooltipTrigger>
                <TooltipContent side="bottom">Korean / Hanja</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </section>

        {/* Reading-Meanings */}
        <section className="flex w-full flex-col gap-3">
          {kanji.reading_ja_onyomi_katakana.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="font-bold">Onyomi</span>
              <div className="inline-flex flex-row gap-1">
                {kanji.reading_ja_onyomi_katakana.map((onyomi, onyomiIdx) => (
                  <TooltipProvider key={onyomi}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <Chip
                          lang="ja"
                          className="bg-red-200 text-gray-900 hover:bg-red-700 hover:text-gray-100"
                        >
                          {onyomi}
                        </Chip>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <AudioPlay
                          voice="jp_001"
                          text={onyomi}
                          latin={kanji.reading_ja_onyomi_latin[onyomiIdx]}
                          lang="ja"
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          )}

          {kanji.reading_ja_kunyomi_hiragana.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="font-bold">Kunyomi</span>
              <div className="inline-flex flex-row gap-1">
                {kanji.reading_ja_kunyomi_hiragana.map(
                  (kunyomi, kunyomiIdx) => (
                    <TooltipProvider key={kunyomi}>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                          <Chip
                            lang="ja"
                            className="bg-amber-200 text-gray-900 hover:bg-amber-600 hover:text-gray-100"
                          >
                            {kunyomi}
                          </Chip>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <AudioPlay
                            voice="jp_001"
                            text={kunyomi.replace('.', '')}
                            latin={kanji.reading_ja_kunyomi_latin[
                              kunyomiIdx
                            ]?.replace('.', '')}
                            other={kunyomi.replace(/^[^.]*\./, kanji.literal)}
                            lang="ja"
                          />
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ),
                )}
              </div>
            </div>
          )}

          {kanji.reading_zh_pinyin_diacritics.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="font-bold">Chinese</span>
              <div className="inline-flex flex-row gap-1">
                {kanji.reading_zh_pinyin_diacritics.map((pinyin, pinyinIdx) => (
                  <TooltipProvider key={pinyin}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <Chip
                          lang="zh"
                          className="bg-purple-100 text-gray-900 hover:bg-purple-600 hover:text-gray-100"
                        >
                          {pinyin}
                        </Chip>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <AudioPlay
                          voice={null}
                          text={pinyin}
                          latin={pinyin}
                          other={kanji.reading_zh_pinyin_numbered[pinyinIdx]}
                          lang="zh"
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          )}

          {kanji.reading_ko_hangeul.length > 0 && (
            <div className="flex flex-row gap-4">
              <span className="font-bold">Korean</span>
              <div className="inline-flex flex-row gap-1">
                {kanji.reading_ko_hangeul.map((hangeul, hangeulIdx) => (
                  <TooltipProvider key={hangeul}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger>
                        <Chip
                          lang="ko"
                          className="bg-blue-200 text-gray-900 hover:bg-blue-600 hover:text-gray-100"
                        >
                          {hangeul}
                        </Chip>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="text-xs">*Might not be accurate</span>
                        <AudioPlay
                          voice="kr_002"
                          text={`${hangeul}!`}
                          latin={kanji.reading_ko_latin[hangeulIdx].replace(
                            '.',
                            '',
                          )}
                          lang="ko"
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          )}

          <div>{kanji.meanings.join(', ')}</div>
        </section>

        <section className="flex w-[600px] flex-col gap-4">
          {sentences.map((s) => (
            <div key={s.id} lang="ja" className="flex flex-col">
              <span key={s.id} dangerouslySetInnerHTML={{ __html: s.text }} />
              <span className="text-sm">{s.translation}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
