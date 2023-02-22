import React from "react";
import styles from "./holdPage.module.css";
import Head from 'next/head';
import CustomButton from "@/app/components/elements/CustomButton"
import { useWeb3Modal } from "@web3modal/react";

const HoldPage = () => {
  const { open } = useWeb3Modal();

  const onClickHandler = async () => {
    await open();
  }

  return (
    <div className={styles.hold}>
    <Head>
      <title>Hold Up | Drunken Bytes</title>
    </Head>
    <h1 className={styles.heading}>Hold Up!</h1>
    <div className={styles.imageContainer}>
      <img src="/images/hold-page-image.png" alt="Hold Up Image" className={styles.img}/>
    </div>
    <p className={styles.subParagraph}>
      The page you're trying to access requires connected wallet. Please connect your wallet first.
    </p>
    <CustomButton type="Gradient" text="CONNECT WALLET" onClickHandler={onClickHandler}/>
    </div>
  );
};

export default HoldPage;
