/**
 * @file Infty Google Analytics Component.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2021
 * @license MIT
 */

import * as React from "react";

import { GA_TRACKING_ID } from "lib/ga";
import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    <Script
      defer
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      strategy="afterInteractive"
    />
    <Script id="ga" defer strategy="afterInteractive">
      {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
          `}
    </Script>
  </>
);

export default GoogleAnalytics;
