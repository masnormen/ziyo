import { isHan } from '@scriptin/is-han';
import type { Kanji, Reading } from '@ziyo/types';
import { TatoebaResponse } from '@ziyo/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@ziyo/ui';
import { Fragment } from 'react';
import type { z } from 'zod';

import { AudioPlay } from '../../components/AudioPlay';
import { Chip } from '../../components/Chip';

type GetReadingType<T extends z.infer<typeof Reading>['type']> = Extract<
  (typeof Reading)['_output'],
  { type: T }
>;

function getReadingType<T extends z.infer<typeof Reading>['type']>(
  readings: (typeof Reading)['_output'][],
  type: T,
): GetReadingType<T>[] {
  return readings.filter((rm): rm is GetReadingType<T> => rm.type === type);
}

type KanjiPageProps = {
  params: {
    kanji: string;
  };
};

const KanjiLink = ({
  kanji,
  highlight,
}: {
  kanji: string;
  highlight?: boolean;
}) =>
  `<a href="${kanji}" class="underline decoration-gray-400 underline-offset-4 hover:no-underline${
    highlight ? ` font-bold` : ''
  }">${kanji}</a>`;

export default async function KanjiPage({ params }: KanjiPageProps) {
  const res1 = await fetch(
    `http://127.0.0.1:3000/kanji/${decodeURIComponent(params.kanji)}`,
    {
      next: {
        revalidate: 0,
      },
    },
  ).then((res) => res.json() as Promise<Kanji>);

  const res2 = await fetch(
    `https://tatoeba.org/en/api_v0/search?from=jpn&has_audio=&list=3185&native=&orphans=no&query=${params.kanji}&sort=random&sort_reverse=&tags=&to=eng&trans_filter=limit&trans_has_audio=&trans_link=&trans_orphan=&trans_to=eng&trans_unapproved=&trans_user=&unapproved=no&user=&word_count_max=&word_count_min=10`,
    {
      next: {
        revalidate: 60 * 60 * 6,
      },
    },
  ).then(async (res) => TatoebaResponse.parse(await res.json()));

  const [kanji, { results: _sentences }] = await Promise.all([res1, res2]);

  const sentences = _sentences.map((s) => {
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
    <div className="flex h-full w-full max-w-[600px] flex-col items-center justify-center gap-8 py-32">
      <h1 lang="ja" className="mb-4 text-8xl font-bold">
        {kanji.literal}
      </h1>

      {/* Variants */}
      <section className="mb-8 flex flex-row items-center justify-center gap-4 font-medium">
        {kanji.variants.simplified && (
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Chip lang="zh-Hans" className="text-2xl font-normal">
                  {kanji.variants.simplified}
                </Chip>
              </TooltipTrigger>
              <TooltipContent side="bottom">Simplified Chinese</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {kanji.variants.kyujitai && (
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Chip lang="zh-Hant" className="text-2xl font-normal">
                  {kanji.variants.kyujitai}
                </Chip>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Traditional Chinese / Kyūjitai
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {kanji.variants.kyujitai && (
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Chip lang="ko" className="text-2xl font-normal">
                  {kanji.variants.kyujitai}
                </Chip>
              </TooltipTrigger>
              <TooltipContent side="bottom">Korean / Hanja</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </section>

      {/* Reading-Meanings */}
      <section className="flex w-full flex-col gap-3">
        {kanji.readingMeanings?.map(({ readings, meanings }, idx) => {
          const onyomi = getReadingType(readings, 'ja_onyomi');
          const kunyomi = getReadingType(readings, 'ja_kunyomi');
          const korean = getReadingType(readings, 'ko');
          const mandarin = getReadingType(readings, 'zh');

          return (
            <Fragment key={idx}>
              {onyomi.length > 0 && (
                <div className="flex flex-row gap-4">
                  <span className="font-bold">Onyomi</span>
                  <div className="inline-flex flex-row gap-1">
                    {onyomi.map((r) => (
                      <TooltipProvider key={r.katakana}>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Chip
                              lang="ja"
                              className="bg-red-200 text-gray-900 hover:bg-red-700 hover:text-gray-100"
                            >
                              {r.katakana}
                            </Chip>
                          </TooltipTrigger>
                          <TooltipContent>
                            <AudioPlay
                              voice="jp_001"
                              text={r.katakana}
                              latin={r.latin}
                              lang="ja"
                            />
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              )}

              {kunyomi.length > 0 && (
                <div className="flex flex-row gap-4">
                  <span className="font-bold">Kunyomi</span>
                  <div className="inline-flex flex-row gap-1">
                    {kunyomi.map((r) => (
                      <TooltipProvider key={r.hiragana}>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Chip
                              lang="ja"
                              className="bg-amber-200 text-gray-900 hover:bg-amber-600 hover:text-gray-100"
                            >
                              {r.hiragana}
                            </Chip>
                          </TooltipTrigger>
                          <TooltipContent>
                            <AudioPlay
                              voice="jp_001"
                              text={r.hiragana}
                              latin={r.latin.replace('.', '')}
                              other={r.hiragana.replace(
                                /^[^.]*\./,
                                kanji.literal,
                              )}
                              lang="ja"
                            />
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              )}

              {mandarin.length > 0 && (
                <div className="flex flex-row gap-4">
                  <span className="font-bold">Chinese</span>
                  <div className="inline-flex flex-row gap-1">
                    {mandarin.map((r) => (
                      <TooltipProvider key={r.pinyinWithDiacritics}>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Chip
                              lang="zh"
                              className="bg-amber-200 text-gray-900 hover:bg-amber-600 hover:text-gray-100"
                            >
                              {r.pinyinWithDiacritics}
                            </Chip>
                          </TooltipTrigger>
                          <TooltipContent>
                            <AudioPlay
                              voice={null}
                              text={r.pinyinWithDiacritics}
                              latin={r.pinyinWithDiacritics.replace('.', '')}
                              other={r.pinyinWithNumber}
                              lang="zh"
                            />
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              )}

              {korean.length > 0 && (
                <div className="flex flex-row gap-4">
                  <span className="font-bold">Korean</span>
                  <div className="inline-flex flex-row gap-1">
                    {korean.map((r) => (
                      <TooltipProvider key={r.hangeul}>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Chip
                              lang="ko"
                              className="bg-amber-200 text-gray-900 hover:bg-amber-600 hover:text-gray-100"
                            >
                              {r.hangeul}
                            </Chip>
                          </TooltipTrigger>
                          <TooltipContent className="flex flex-col items-center justify-center">
                            <span className="text-xs">
                              Sound might not be accurate
                            </span>
                            <AudioPlay
                              voice="kr_002"
                              text={`${r.hangeul}!`}
                              latin={r.latin.replace('.', '')}
                              lang="ko"
                            />
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              )}

              <div>{meanings.join(', ')}</div>
            </Fragment>
          );
        })}
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
  );
}
