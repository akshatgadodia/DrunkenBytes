import React from "react";
import styles from "../stylesheets/pricing.module.css";
import {Link} from "react-scroll";
import {CaretRightOutlined} from "@ant-design/icons"
const Pricing = props => {
  return (
      <div className={styles.menu}>
        <h2 className={styles.heading}>Transaction Cost + 5%</h2>
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
