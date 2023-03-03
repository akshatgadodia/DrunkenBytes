import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import PricingText from "./PricingText";
import Pricing from "./Pricing"

const SecondFold = props => {
  return (
    <div className={styles.secondFold}>
      <Pricing/>
      <PricingText/>
    </div>
  );
};

export default SecondFold;
