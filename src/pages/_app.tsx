import "tailwindcss/tailwind.css";
import "input.css";

import * as React from "react";

import { GA_TRACKING_ID, pageview } from "lib/ga";
import { NextRouter, useRouter } from "next/router";

import type { AppProps } from "next/app";
import GoogleAnalytics from "components/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  React.useEffect(() => {
    if (!GA_TRACKING_ID) return;
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
