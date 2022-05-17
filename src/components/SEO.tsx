/**
 * @file Infty SEO component
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2021
 * @license MIT
 */

// import "tailwindcss/tailwind.css";

import * as React from "react";

import { META_DEFAULT_COVER_IMAGE, META_DESCRIPTION } from "data/const";

import Head from "next/head";
import { useRouter } from "next/router";

export type SEOProps = {
  title?: string;
  description?: string;
  cover?: string;
};

const SEO: React.FC<SEOProps> = ({
  title = "Infty ~あらゆる学びを共有する、東大生限定SNS~",
  description = META_DESCRIPTION,
  cover = META_DEFAULT_COVER_IMAGE,
  ...props
}) => {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title} - Infty</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Infty" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`} />
        {description && <meta name="description" content={description} />}
        <meta property="og:image" content={cover} />
        <meta
          name="keywords"
          content="東大, 東京大学, 学び, プラットフォーム, the University of Tokyo, Infty, SNS, UT"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@infty_tokyo" />
        <meta name="twitter:creator" content="@infty_tokyo" />
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={cover} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
    </>
  );
};

export default SEO;
