import React from "react";
import styles from "../stylesheets/firstFold.module.css";
const FirstFold = () => {
  return (
    <div className={styles.firstFold}>
    <img src="/images/background/gradient-bottom-2000x1113.jpeg" alt="bg" className={styles.bgImage}/>
      <div className={styles.mainDiv} id="main-div">
        <div className={styles.heading}>
          Hi. We're Drunken Bytes.
        </div>
            <p className={styles.subParagraph}>
            Our end-to-end solution allows you to create blockchain projects and experiences that make using NFTs feel effortless for everyone.
            </p>
      </div>
      <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/nft.png" alt="Image" className={styles.mainImage}/>
      </div>
    </div>
  );
};

export default FirstFold;
