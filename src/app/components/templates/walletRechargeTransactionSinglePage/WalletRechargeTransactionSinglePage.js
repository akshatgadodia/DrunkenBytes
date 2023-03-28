import React from "react";
import styles from "./walletRechargeTransactionSinglePage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const WalletRechargeTransactionSinglePage = props => {
  const transactionData = props.transactionData;
  return (
    <div className={`${styles.transactionSingleDiv}`}>
      <Head>
        <title>
          {`${transactionData.txId.slice(0, 2)}...${transactionData.txId.slice(
            -3
          )}`}{" "}
          Wallet Recharge Transaction | Drunken Bytes
        </title>
      </Head>
      <FirstFold transactionData = {props.transactionData}/>
      <SecondFold transactionData = {props.transactionData}/>
    </div>
  );
};

export default WalletRechargeTransactionSinglePage;
