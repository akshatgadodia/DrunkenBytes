import React from 'react'
import styles from "./pricingPage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';
import ThirdHalfFold from './components/ThirdHalfFold';

const PricingPage = () => {
  return (
    <div className={styles.pricingPage}> 
    <Head>
        <title>Pricing | Drunken Bytes</title>
      </Head>
      <FirstFold />
      <SecondFold/>
      <ThirdHalfFold/>
    </div>
  )
}

export default PricingPage