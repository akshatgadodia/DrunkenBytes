import React from "react";
import styles from "./documentationPage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const DocumentationPage = () => {
  return (
    <div className={styles.documentationPage}>
      <Head>
        <title>Documentation | Drunken Bytes</title>
      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default DocumentationPage;
