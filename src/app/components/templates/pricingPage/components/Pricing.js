import React, {useEffect, useState} from "react";
import styles from "../stylesheets/pricing.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";

const Pricing = props => {
  const { error, sendRequest, isLoading } = useHttpClient();
  const [transactionCost, setTransactionCost] = useState(0);
  useEffect(()=>{
    const getTransactionCost = async () => {
      const result = await sendRequest('/nft/get-nft-generation-cost');
      if (!error) setTransactionCost(result.transactionCost)
    }
    getTransactionCost();
  },[])
  return (
      <div className={styles.menu}>
        <h2 className={styles.heading}>Transaction Cost + 5%</h2>
        <p className={styles.subParagraph}>per transaction</p>
        <hr className={styles.hr}/>
        <p className={styles.costHead}>Current Estimated Transaction Cost</p>
        <h2 className={styles.heading}>{transactionCost} ETH</h2>
        <p className={styles.subParagraph}>per transaction</p>
        <hr className={styles.hr}/>
        <div className={styles.container}>
          <strong><p className={styles.headingParagraph}>Transaction Cost</p></strong>
          <p className={styles.paragraph}>Transaction Cost may vary depending on the network congestion. Generally it may cost from 20Rs to 100Rs to genrate a Warranty Card NFT.</p>
        </div>
        <hr className={styles.hrSmall}/>
        <div className={styles.container}>
          <strong><p className={styles.headingParagraph}>Comission Fee</p></strong>
          <p className={styles.paragraph}>5% added on the transaction cost is the comission fee which is charged by us.</p>
        </div>
        <hr className={styles.hrSmall}/>
        <div className={styles.container}>
          <strong><p className={styles.headingParagraph}>No Hidden Fees</p></strong>
          <p className={styles.paragraph}>There is no hidden fees included in this transaction. The breakdown of complete transaction is provided.</p>
        </div>

      </div>
  );
};

export default Pricing;
