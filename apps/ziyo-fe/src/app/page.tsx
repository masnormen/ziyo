import type { Metadata } from 'next';

import { Search } from '../components/Search';

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
      <Search />
    </div>
  );
}
