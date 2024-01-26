import type { DefaultSeoProps } from 'next-seo';

export const DEFAULT_SEO_PROPS: DefaultSeoProps = {
  title: 'Ziyo ジヨ · Japanese-focused Kanji dictionary',
  description:
    'A stupidly simple, no-BS Japanese Kanji dictionary for Japanese learners',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: 'Ziyo ジヨ · Japanese-focused Kanji dictionary',
    url: 'https://ziyo.nourman.com/',
    siteName: 'Ziyo',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Ziyo ジヨ · Japanese-focused Kanji dictionary',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [{ rel: 'icon', href: 'https://fav.farm/ジ' }],
};
