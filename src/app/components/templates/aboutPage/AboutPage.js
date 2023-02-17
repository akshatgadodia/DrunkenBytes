import React from 'react'
import styles from "./aboutPage.module.css";
import Head from 'next/head'
import FirstFold from './components/FirstFold';
import SecondFold from './components/SecondFold';
import ThirdFold from './components/ThirdFold';
import FourthFold from './components/FourthFold';

const AboutPage = (props) => {
  return (
    <>
    <Head>
        <title>About | Drunken Bytes</title>
      </Head>
      <FirstFold/>
      <SecondFold businessServed={props.businessServed} nftsCreated={props.nftsCreated} netTransactionValue={props.netTransactionValue}/>
      <ThirdFold/>
      <FourthFold/>
    </>
  )
}

export default AboutPage