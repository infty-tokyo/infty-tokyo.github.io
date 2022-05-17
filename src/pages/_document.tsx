import { Head, Html, Main, NextScript } from "next/document";
import { INFTY_SITE_URL, META_DEFAULT_COVER_IMAGE, META_DESCRIPTION } from "data/const";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="infty" />
        <meta name="theme-color" content="#f0efeb" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/infty-dark-icons-180x180.png" />
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
