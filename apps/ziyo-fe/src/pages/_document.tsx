import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <Script
          id="load-tag"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          strategy="beforeInteractive"
        />
        <Script id="setup-tag" async strategy="beforeInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
  `}
        </Script>
      </body>
    </Html>
  );
}
