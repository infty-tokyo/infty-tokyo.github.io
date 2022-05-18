import { Head, Html, Main, NextScript } from "next/document";
import { INFTY_SITE_URL, META_DEFAULT_COVER_IMAGE, META_DESCRIPTION } from "data/const";

import Script from "next/script";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="infty" />
        <meta name="theme-color" content="#f0efeb" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon-180x180.png" />
        {/* <--- Default OGP --- */}
        <meta property="og:title" content="Infty" />
        <meta property="og:site_name" content="Infty" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={INFTY_SITE_URL} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta
          name="keywords"
          content="東大, 東京大学, 学び, プラットフォーム, the University of Tokyo, Infty, SNS, UT"
        />
        <meta property="og:image" content={META_DEFAULT_COVER_IMAGE} />
        {/* --- Default OGP ---> */}

        {/* <--- Twitter Meta Tag --- */}
        <meta name="twitter:title" content="Infty" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@infty_tokyo" />
        <meta name="twitter:creator" content="@infty_tokyo" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={META_DEFAULT_COVER_IMAGE} />
        {/* --- Twitter Meta Tag ---> */}

        {/* <--- Manifest for Windows --- */}
        <meta name="msapplication-square70x70logo" content="favicon/favicon-70x70.png" />
        <meta name="msapplication-square150x150logo" content="favicon/favicon-150x150.png" />
        <meta name="msapplication-square310x310logo" content="favicon/favicon-310x310.png" />
        <meta name="msapplication-TileColor" content="#000" />
        {/* --- Manifest for Windows --- */}

        {/* <--- Manifest for Safari --- */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
        <meta name="apple-mobile-web-app-title" content="infty" />
        {/* --- Manifest for Safari ---> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
