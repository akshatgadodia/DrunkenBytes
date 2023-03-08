import React, { useReducer, useLayoutEffect, useEffect } from "react";
import Head from "next/head";
import 'antd/dist/reset.css';
import "../app/styles/globals.css"
import "../app/styles/antdOverrides.css"
import { useRouter } from "next/router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import AppContext from "@/app/context/AppContext";
import { reducer, initialLoggedInDetails } from "@/app/context/Reducer";
import Cookies from "js-cookie";
import Script from 'next/script'
export default function MyApp({ Component, pageProps }) {
  const [loggedInDetails, dispatch] = useReducer(
    reducer,
    initialLoggedInDetails
  );
  useEffect(() => {
    const setLoggedInDetails = async () => {
      const isConnected = Cookies.get("db_login");
      const address = Cookies.get("db_login_address");
      if (isConnected === 'true') {
        dispatch({
          type: "UserLogin",
          payload: { address: address ?? null }
        });
      }
    };
    setLoggedInDetails();
  }, []);
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
    <AppContext.Provider value={{ loggedInDetails, dispatch }}>
      <Head>
        <title>Drunken Bytes</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Akshat Gadodia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-VYMRDDLQCS" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VYMRDDLQCS', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
