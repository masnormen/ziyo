import { Button, Icon, Input } from '@ziyo/ui';
import Link from 'next/link';

const IndexHeader = () => (
  <header>
    <h1 className="text-7xl font-bold">
      ジヨ <span className="text-2xl">Ziyo</span>
    </h1>
  </header>
);

export default async function Index() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16">
      <IndexHeader />
      <search className="flex w-full max-w-md gap-4">
        <Input className="bg-white" placeholder="Search Kanji..." />
        <Button asChild>
          <Link href="/kanji">
            <Icon name="search" />
          </Link>
        </Button>
      </search>
    </div>
  );
}
