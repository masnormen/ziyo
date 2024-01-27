import { useClickAway, useDebounce, usePrevious } from '@uidotdev/usehooks';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@ziyo/ui';
import { cn } from '@ziyo/ui/utils';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { searchAtom, valueAtom } from '../atoms';
import { Chip } from '../components/Chip';
import { useGetKanjiList } from '../hooks/query/useGetKanjiList';

export function Search({ floating = false }: { floating?: boolean }) {
  const router = useRouter();

  const [value, setValue] = useAtom(valueAtom);

  const [query, setQuery] = useAtom(searchAtom);
  const debQuery = useDebounce(query, 200);

  const {
    result,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    data,
  } = useGetKanjiList({
    query: {
      search: debQuery,
    },
  });

  const prevIsFetchingNextPage = usePrevious(isFetchingNextPage);

  // When the user scrolls to the bottom of the list, we want to
  // set the value to the last kanji in the list.
  useEffect(() => {
    setTimeout(() => {
      if (!isFetchingNextPage && prevIsFetchingNextPage) {
        const lastKey = data?.pages?.at(-2)?.data?.docs?.at(-1)?.literal;
        if (lastKey) {
          setValue(lastKey);
        }
      }
    }, 10);
  }, [data?.pages, isFetchingNextPage, prevIsFetchingNextPage, setValue]);

  const [isFocused, setIsFocused] = useState(false);
  const cmdRef = useClickAway<HTMLDivElement>(() => {
    setIsFocused(false);
  });

  return (
    <Command
      ref={cmdRef}
      value={value}
      onValueChange={setValue}
      shouldFilter={false}
      className={cn(
        'relative h-fit shadow-md outline outline-kiiro-300',
        floating && 'overflow-visible',
      )}
    >
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Type a Kanji, a Kanji reading, or search by meaning..."
        onFocus={() => setIsFocused(true)}
      />
      <CommandList
        className={cn(
          'transition-all',
          floating && !isFocused && 'max-h-0 !outline-none',
          floating &&
            'absolute top-[45px] z-10 w-full rounded-b-md bg-white outline outline-kiiro-300',
        )}
        onScroll={(e) => {
          const target = e.currentTarget;
          const hasReachedBottom =
            target.scrollTop + target.offsetHeight === target.scrollHeight;
          if (hasReachedBottom && hasNextPage) {
            fetchNextPage();
          }
        }}
      >
        {query && (
          <CommandEmpty>
            {isLoading ? 'Loading...' : 'No results found'}
          </CommandEmpty>
        )}
        {result.map((kanji) => {
          const excessOnyomi = Math.max(
            kanji.reading_ja_onyomi_katakana.length - 2,
            0,
          );
          const excessKunyomi = Math.max(
            kanji.reading_ja_kunyomi_hiragana.length - 4,
            0,
          );
          const excessPinyin = Math.max(
            kanji.reading_zh_pinyin_diacritics.length - 2,
            0,
          );
          const excessHangeul = Math.max(
            kanji.reading_ko_hangeul.length - 2,
            0,
          );
          return (
            <CommandItem
              key={kanji.literal}
              value={kanji.literal}
              onSelect={(literal) => {
                router.push(`/kanji/${literal}`);
              }}
              className="cursor-pointer border-b border-kiiro-50 py-0"
            >
              <Link
                href={`/kanji/${kanji.literal}`}
                className="flex h-full w-full flex-row items-start gap-3 px-1 py-2 md:gap-5 md:px-2"
                onClick={() => setIsFocused(false)}
              >
                <div className="text-2xl text-kiiro-900" lang="ja">
                  {kanji.literal}
                </div>
                <div className="flex flex-col gap-2 pt-0.5">
                  <div className="flex flex-row flex-wrap gap-2">
                    {kanji.reading_ja_onyomi_katakana
                      .slice(0, 2)
                      .map((reading) => (
                        <Chip
                          key={reading}
                          lang="ja"
                          className="cursor-pointer bg-rose-100 font-bold text-gray-900"
                        >
                          {reading}
                        </Chip>
                      ))}
                    {excessOnyomi > 0 && (
                      <Chip className="cursor-pointer bg-rose-100 font-normal text-gray-900">
                        +{excessOnyomi}
                      </Chip>
                    )}

                    {kanji.reading_ja_kunyomi_hiragana
                      .slice(0, 2)
                      .map((reading) => (
                        <Chip
                          key={reading}
                          lang="ja"
                          className="cursor-pointer bg-kiiro-200 font-bold text-gray-900"
                        >
                          {reading}
                        </Chip>
                      ))}
                    {excessKunyomi > 0 && (
                      <Chip className="cursor-pointer bg-kiiro-200 font-normal text-gray-900">
                        +{excessKunyomi}
                      </Chip>
                    )}

                    {kanji.reading_zh_pinyin_diacritics
                      .slice(0, 2)
                      .map((reading) => (
                        <Chip
                          key={reading}
                          lang="zh"
                          className="cursor-pointer bg-purple-100 text-gray-900"
                        >
                          {reading}
                        </Chip>
                      ))}
                    {excessPinyin > 0 && (
                      <Chip className="cursor-pointer bg-purple-100 font-normal text-gray-900">
                        +{excessPinyin}
                      </Chip>
                    )}

                    {kanji.reading_ko_hangeul.slice(0, 2).map((reading) => (
                      <Chip
                        key={reading}
                        lang="ko"
                        className="cursor-pointer bg-blue-100 text-gray-900"
                      >
                        {reading}
                      </Chip>
                    ))}
                    {excessHangeul > 0 && (
                      <Chip className="cursor-pointer bg-blue-100 font-normal text-gray-900">
                        +{excessHangeul}
                      </Chip>
                    )}
                  </div>

                  <div className="flex flex-row flex-wrap gap-2 text-xs text-kiiro-900">
                    {kanji.meanings.join(', ')}
                  </div>
                </div>
              </Link>
            </CommandItem>
          );
        })}
      </CommandList>
    </Command>
  );
}
