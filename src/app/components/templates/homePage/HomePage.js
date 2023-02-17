import React from 'react'
import styles from "./homePage.module.css"
import Head from 'next/head'
import FirstFold from './components/FirstFold';
import FirstHalfFold from './components/FirstHalfFold';
import SecondFold from './components/SecondFold';
import SecondHalfFold from './components/SecondHalfFold';
import ThirdFold from './components/ThirdFold';
import ThirdHalfFold from './components/ThirdHalfFold';

const HomePage = (props) => {
  return (
    <>
       <Head>
        <title>Drunken Bytes</title>
      </Head>
      <FirstFold/>
      <FirstHalfFold/>
      <SecondFold/>
      <SecondHalfFold businessServed={props.businessServed} nftsCreated={props.nftsCreated} netTransactionValue={props.netTransactionValue}/>
      <ThirdFold/>
      <ThirdHalfFold/>

    </>
  )
}

export default HomePage