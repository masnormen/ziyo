import type { Kanji, Reading } from '@ziyo/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@ziyo/ui';
import type { z } from 'zod';

import { AudioPlay } from '../../components/AudioPlay';
import { Chip } from '../../components/Chip';
import { Ruby } from '../../components/typesetting/Ruby';

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

export default async function KanjiPage({ params }: KanjiPageProps) {
  const kanji = decodeURIComponent(params.kanji);

  const data = (await fetch(`http://127.0.0.1:3000/kanji/${kanji}`).then(
    (res) => res.json(),
  )) as Kanji;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 lang="ja" className="mb-12 text-8xl font-bold">
        {kanji}
      </h1>

      {data.readingMeanings?.map(({ readings, meanings }) => {
        return (
          <>
            <div className="flex flex-row gap-2">
              <span className="font-bold">Onyomi:</span>
              <div className="inline-flex flex-row gap-1">
                {getReadingType(readings, 'ja_onyomi').map((r) => (
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

            <div className="flex flex-row gap-2">
              <span className="font-bold">Kunyomi:</span>
              <div className="inline-flex flex-row gap-1">
                {getReadingType(readings, 'ja_kunyomi').map((r) => (
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
                          other={r.hiragana.replace(/^[^.]*\./, kanji)}
                          lang="ja"
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
            <div>{meanings.join(', ')}</div>
          </>
        );
      })}

      <div lang="ja">
        <Ruby furi="うき">浮</Ruby>
        <Ruby furi="よ">世</Ruby>
        <Ruby furi="うきよだ">絵</Ruby>
        <Ruby furi="よ">世</Ruby>
        <p>Depart immediately.</p>
      </div>
      <div lang="ja">
        <Ruby furi="ただ">直</Ruby>ちに<Ruby furi="しゅっぱつ">出発</Ruby>する。
        <p>Depart immediately.</p>
      </div>
    </div>
  );
}
