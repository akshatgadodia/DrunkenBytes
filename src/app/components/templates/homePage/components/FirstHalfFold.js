import React from "react";
import styles from "../stylesheets/firstHalfFold.module.css";
import * as AntdIcons from '@ant-design/icons';
import {DollarCircleFilled} from "@ant-design/icons"
const FirstHalfFold = () => {
  return (
    <div className={styles.firstHalfFold}>
      <div className={styles.mainDiv} id="main-div">
       {
        [
          {
            src:"NotificationFilled",
            heading:"Added Value for Customers",
            content: "NFT-based warranty cards are easily transferable and verifiable, providing added value to customers looking to sell or trade their products."
          },
          {
            src:"DollarCircleFilled",
            heading:"Transparent Pricing",
            content: "Drunken Bytes' commission fee of 5% is transparently displayed, ensuring customers know exactly what they are paying for."
          },
          {
            src:"ToolFilled",
            heading:"Seamless Integration",
            content: "Businesses can easily integrate Drunken Bytes' API solution into their existing system for a hassle-free experience."
          },
          {
            src:"CustomerServiceFilled",
            heading:"Customer Support",
            content: "Drunken Bytes provides excellent customer support to ensure a positive experience for users, especially for those new to blockchain technology."
          }
        ].map((data,idx)=>{
          const AntdIcon = AntdIcons[data.src];
          return <div className={styles.containerDiv} key={idx}>
            <div className={styles.headerDiv}>
            <AntdIcon className={styles.icon}/>
              <span className={styles.heading}>{data.heading}</span>
            </div>
            <p className={styles.content}>{data.content}</p>
          </div>
        })
       }
      </div>
    </div>
  );
};

export default FirstHalfFold;
