import CustomButton from "@/app/components/elements/CustomButton";
import React from "react";
import styles from "../stylesheets/thirdFold.module.css";

const ThirdFold = () => {
  return (
    <div className={styles.thirdFold}>
      <h2 className={styles.heading}>Get started with Warranty Card NFT's</h2>
      <div className={styles.div}>
      <div className={styles.contentDiv}>
      <h3 className={styles.subHeading}>Create, distribute and integrate Warranty Card NFTs</h3>
      <p className={styles.subParagraph}>
        NFTs are unique digital assets created on the blockchain. They can be
        everything from gaming items and digital art, to sports collectibles and
        real-world assets.
      </p>
      <CustomButton type="Gradient" text="Learn More"/>
      </div>

      <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/nft.png" alt="Image" className={styles.mainImage} />
      </div>
      </div>
    </div>
  );
};

export default ThirdFold;
