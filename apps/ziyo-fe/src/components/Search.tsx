'use client';

import { useDebounce } from '@uidotdev/usehooks';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@ziyo/ui';
import { CommandLoading } from 'cmdk';
import Link from 'next/link';
import { useState } from 'react';

import { Chip } from '../components/Chip';
import { useGetKanjiList } from '../hooks/query/useGetKanjiList';

export function Search() {
  const [value, setValue] = useState('apple');

  const [query, setQuery] = useState('');
  const dQuery = useDebounce(query, 500);

  const kanjiList = useGetKanjiList({
    query: {
      search: dQuery,
    },
  });

  return (
    <Command
      loop
      shouldFilter={false}
      value={value}
      onValueChange={setValue}
      className="h-fit shadow-md outline outline-gray-200"
    >
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Type a Kanji, or its reading in Kana/Romaji..."
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {kanjiList.isLoading && <CommandLoading>Loading...</CommandLoading>}
        {kanjiList.data?.data.map((kanji) => (
          <CommandItem
            key={kanji.literal}
            value={kanji.literal}
            className="py-0"
          >
            <Link
              href={`/kanji/${kanji.literal}`}
              className="flex h-full w-full flex-row items-center gap-3 py-1.5"
            >
              <span className="text-xl" lang="ja">
                {kanji.literal}
              </span>
              <div className="flex flex-row gap-2">
                {kanji.reading_ja_onyomi_katakana.map((reading) => (
                  <Chip
                    key={reading}
                    lang="ja"
                    className="cursor-pointer bg-red-200 text-gray-900"
                  >
                    {reading}
                  </Chip>
                ))}
                {kanji.reading_ja_kunyomi_hiragana.map((reading) => (
                  <Chip
                    key={reading}
                    lang="ja"
                    className="bg-amber-200 text-gray-900"
                  >
                    {reading}
                  </Chip>
                ))}
              </div>
            </Link>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}
