import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@ziyo/ui';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Chip } from '../components/Chip';

const IndexHeader = () => (
  <header>
    <h1 className="text-7xl font-bold">
      ジヨ <span className="text-2xl">Ziyo</span>
    </h1>
  </header>
);

export const metadata: Metadata = {
  title: 'Ziyo (ジヨ) · Japanese-focused Kanji dictionary',
  description:
    'A simple, no-BS Japanese Kanji dictionary for Japanese learners',
};

export default async function Index() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[600px] flex-col items-center gap-16 py-32">
      <IndexHeader />
      <Command className="h-fit shadow-md outline outline-gray-200">
        <CommandInput placeholder="Type a Kanji, or its reading in Kana/Romaji..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Kanji">
            <CommandItem className="py-0">
              <Link
                href="/kanji/直"
                className="flex h-full w-full flex-row items-center gap-3 py-1.5"
              >
                <span className="text-xl" lang="ja">
                  直
                </span>
                <div className="flex flex-row gap-2">
                  <Chip
                    lang="ja"
                    className="cursor-pointer bg-red-200 text-gray-900"
                  >
                    なお
                  </Chip>
                  <Chip
                    lang="ja"
                    className="cursor-pointer bg-amber-200 text-gray-900"
                  >
                    ただ.ちに
                  </Chip>
                </div>
              </Link>
            </CommandItem>
            <CommandItem className="py-0">
              <Link href="/char/直" className="flex h-full w-full py-1.5">
                s
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
