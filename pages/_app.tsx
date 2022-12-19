import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

declare global {
  interface Window {
    core: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== undefined) {
      const core = require('@govbr-ds/core/dist/core-init');
      window.core = core;
    }
  })

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
