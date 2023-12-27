import { Button, Input } from '@ziyo/ui';
import { Search } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

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
    <div className="flex h-full w-full flex-col items-center justify-center gap-16 py-32">
      <IndexHeader />
      <search className="flex w-full max-w-[600px] gap-4">
        <Input className="bg-white" placeholder="Search Kanji..." />
        <Button asChild>
          <Link href="/kanji">
            <Search size={18} />
          </Link>
        </Button>
      </search>
    </div>
  );
}
