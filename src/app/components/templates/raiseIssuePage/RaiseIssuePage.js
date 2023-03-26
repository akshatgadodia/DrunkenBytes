import React from "react";
import styles from "./raiseIssuePage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const RaiseIssuePage = (props) => {
  return (
    <div className={styles.RaiseIssuePage}>
      <Head>
        <title>Raise Issue | Drunken Bytes</title>
        <meta name="description" content="The Drunken Bytes Raise Issue page is your source for getting in touch with your nft creator. Whether you have a question, feedback, or need support, we're here to help. Fill out our contact form." />
        <meta name="keywords" content="Drunken Bytes, issue, raise issue, support, feedback, email, phone, get in touch, reach out." />
      </Head>
      <FirstFold />
      <SecondFold hasTokenId={props.hasTokenId} tokenId={props.tokenId}/>
    </div>
  );
};

export default RaiseIssuePage;
