import React, { useContext } from "react";
import styles from "./helpCenterPage.module.css";
import Link from "next/link";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const HelpCenterPage = () => {
  
  return (
    <div className={styles.helpCenterPage}>
      <Head>
        <title>Help Center | Drunken Bytes</title>
      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default HelpCenterPage;
