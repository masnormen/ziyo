import Head from 'next/head';

import { Search } from '../components/Search';

const IndexHeader = () => (
  <header>
    <h1 className="text-7xl font-bold">
      ジヨ <span className="text-2xl">Ziyo</span>
    </h1>
  </header>
);

const metadata = {
  title: 'Ziyo (ジヨ) · Japanese-focused Kanji dictionary',
  description:
    'A simple, no-BS Japanese Kanji dictionary for Japanese learners',
};

export default function Index() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="mx-auto flex h-full w-full max-w-[600px] flex-col items-center justify-center gap-12">
        <IndexHeader />
        <Search />
      </div>
    </>
  );
}
