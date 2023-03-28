import React from "react";
import styles from "./issuesPage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const NftTransactionsPage = () => {
  return (
    <div className={styles.transactionDiv}>
      <Head>
        <title>Issues Raised | Drunken Bytes</title>
      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default NftTransactionsPage;
