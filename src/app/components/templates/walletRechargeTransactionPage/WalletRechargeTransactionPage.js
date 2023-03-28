import React from "react";
import styles from "./walletRechargeTransactionPage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const WalletRechargeTransactionPage = props => {
  return (
    <div className={styles.walletRechargeDiv}>
      <Head>
        <title>Wallet Recharge Transactions | Support Drunken Bytes</title>
      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default WalletRechargeTransactionPage;
