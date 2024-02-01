import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Sora } from 'next/font/google';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';

import { DEFAULT_SEO_PROPS } from '../configs/next-seo';
import { ClientProviders } from '../providers/client';

const bodyFont = Sora({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-body',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: ${bodyFont.style.fontFamily};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      <DefaultSeo {...DEFAULT_SEO_PROPS} />

      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <ClientProviders>
        <Component {...pageProps} />
      </ClientProviders>

      <NextNProgress color="#DD8F09" height={5} showOnShallow={true} />
    </>
  );
}
