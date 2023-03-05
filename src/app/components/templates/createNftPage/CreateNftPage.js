import React from "react";
import styles from "./createNft.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const CreateNftPage = () => {
  return (
    <div className={styles.createNftPage}> 
    <Head>
        <title>Create Warranty Card NFT | Drunken Bytes</title>
      </Head>
      <FirstFold />
      <SecondFold/>
    </div>
  )
};

export default CreateNftPage;
