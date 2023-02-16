import CustomButton from "@/app/components/elements/CustomButton";
import React from "react";
import styles from "../stylesheets/firstFold.module.css";
import { TypeAnimation } from "react-type-animation";
const FirstFold = () => {
  return (
    <div className={styles.firstFold}>
    <img src="/images/background/gradient-top-center-2354x1760.png" alt="bg" className={styles.bgImage}/>
      <div className={styles.mainDiv} id="main-div">
        <div className={styles.heading}>
          NFT's you can
          <TypeAnimation
            sequence={[
              "use to grow your business",
              1000,
              "", // Deletes 'One' and types 'Two'
              500, 
              "Two Three",
              500
            ]}
            speed={50}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className={styles.typingHeading}
          />
        </div>
            <p className={styles.subParagraph}>
            Our end-to-end solution allows you to create blockchain projects and experiences that make using NFTs feel effortless for everyone.
            </p>
        <div className={styles.buttonContainer}>
          <CustomButton type="OnlyBorder" text="Register Now" />
          <CustomButton type="Gradient" text="Documentation" />
        </div>
      </div>
      <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/nft.png" alt="Image" className={styles.mainImage}/>
      </div>
    </div>
  );
};

export default FirstFold;
