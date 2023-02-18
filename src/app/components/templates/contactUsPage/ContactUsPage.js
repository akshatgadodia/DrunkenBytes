import React from "react";
import styles from "./contactUsPage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const ContactUsPage = () => {
  return (
    <div className={styles.contactUsPage}>
      <Head>
        <title>Contact Us | Drunken Bytes</title>
      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default ContactUsPage;
