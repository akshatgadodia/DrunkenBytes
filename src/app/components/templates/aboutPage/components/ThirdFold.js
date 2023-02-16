import React from "react";
import styles from "../stylesheets/thirdFold.module.css";
const ThirdFold = () => {
//Editod using GITHUB
  return (
    <div className={styles.thirdFold}>
    <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/nft.png" alt="Image" className={styles.mainImage}/>
      </div>
      <div className={styles.mainDiv} id="main-div">
        <div className={styles.heading}>
          Who We Are
        </div>
            <p className={styles.subParagraph}>
            We’re a fully distributed team spread across five continents and 20 countries—unified by a mission to build futuristic, world-class products.
            </p>
      </div>
      
    </div>
  );
};

export default ThirdFold;
