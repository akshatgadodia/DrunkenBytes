import React from 'react'
import styles from "./homePage.module.css"
import Head from 'next/head'
import FirstFold from './components/FirstFold';

const HomePage = () => {
  return (
    <>
       <Head>
        <title>Drunken Bytes</title>
      </Head>
      <FirstFold/>
    </>
  )
}

export default HomePage