import { NextSeo } from 'next-seo';

import { Branding } from '../components/Branding';
import { Search } from '../components/Search';

export default function Index() {
  return (
    <>
      <NextSeo
        title="Ziyo ジヨ · Japanese-focused Kanji dictionary"
        canonical="https://ziyo.nourman.com"
        openGraph={{
          url: 'https://ziyo.nourman.com',
        }}
      />

      <div className="!z-10 mx-auto flex h-full w-full max-w-[600px] flex-col items-center justify-center gap-6 px-8 py-16 md:justify-start md:gap-8 md:py-[calc(50vh-125px)]">
        <Branding />
        <Search />
      </div>
    </>
  );
}
