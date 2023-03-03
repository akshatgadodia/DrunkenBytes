import React, { useReducer, useLayoutEffect, useEffect } from "react";
import Head from "next/head";
import 'antd/dist/reset.css';
import "../app/styles/globals.css"
import "../app/styles/antdOverrides.css"
import { useRouter } from "next/router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import authenticatedRoutes from "@/app/constants/authenticatedRoutes"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = url => {
      NProgress.start()
    };
    const handleStop = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  },
    [router]
  );
  return (
    <>
      <Head>
        <title>Drunken Bytes</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Akshat Gadodia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
