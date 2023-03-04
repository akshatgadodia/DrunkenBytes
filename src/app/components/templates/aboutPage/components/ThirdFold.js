import React from "react";
import styles from "../stylesheets/thirdFold.module.css";
const ThirdFold = () => {
//Editod using GITHUB
  return (
    <div className={styles.thirdFold}>
    <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/about-who.png" alt="Image" className={styles.mainImage}/>
      </div>
      <div className={styles.mainDiv} id="main-div">
        <div className={styles.heading}>
          Who We Are
        </div>
            <p className={styles.subParagraph}>
            We’re a team of blockchain enthusiasts who are passionate about exploring the potential of NFTs in the world of warranties. We provide a user-friendly platform for businesses to create, distribute, and manage NFT-based warranty cards, as well as a wallet system for easy payment and commission management. Our goal is to help businesses improve their warranty systems through the use of innovative technology, while providing excellent customer support along the way.
            </p>
      </div>
      
    </div>
  );
};

export default ThirdFold;
