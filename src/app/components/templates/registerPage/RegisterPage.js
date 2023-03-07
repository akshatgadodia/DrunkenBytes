import React, {useLayoutEffect} from "react";
import styles from "./registerPage.module.css";
import Head from "next/head";
import RegisterModal from './components/RegisterModal';
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const RegisterPage = () => {

  return (
    <div className={styles.RegisterPage}> 
      <Head>
        <title>Register | Drunken Bytes</title>
      </Head>
      <RegisterModal/>
      <FirstFold />
      <SecondFold/>
    </div>
  )
};

export default RegisterPage;
