import React from "react";
import styles from "../stylesheets/thirdHalfFold.module.css";
import CustomButton from "@/app/components/elements/CustomButton";

const ThirdHalfFold = (props) => {
  return (
    <div className={styles.thirdHalfFold}>
      <h2 className={styles.subHeading}>Ready to start minting?</h2>
      <p className={styles.subParagraph}>
        Free to get started.
      </p>
      <div className={styles.buttonContainer}>
          <CustomButton type="OnlyBorder" text="Try Now" />
          <CustomButton type="Gradient" text="Talk to Us" />
        </div>
    </div>
  );
};

export default ThirdHalfFold;
