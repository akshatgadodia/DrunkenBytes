import React from 'react'
import styles from "./whyChooseUsPage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const WhyChooseUsPage = () => {
  return (
    <div className={styles.whyChooseUsPage}> 
    <Head>
        <title>Why Choose Drunken Bytes</title>
      </Head>
      <FirstFold/>
      <SecondFold/>
    </div>
  )
}

export default WhyChooseUsPage