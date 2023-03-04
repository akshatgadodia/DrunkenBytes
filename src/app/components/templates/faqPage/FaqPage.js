import React, { useContext } from "react";
import styles from "./faqPage.module.css";
import Head from 'next/head'
import FirstFold from './components/FirstFold';
import SecondFold from './components/SecondFold';
const FAQPage = () => {
  return (
    <div className={styles.supportLogin}>
    <Head>
        <title>Frequently Asked Questions | Drunken Bytes</title>
      </Head>
      <FirstFold/>
      <SecondFold/>
    </div>
  );
};

export default FAQPage;
