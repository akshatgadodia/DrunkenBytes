import React from "react";
import styles from "../stylesheets/firstHalfFold.module.css";
import {DollarCircleFilled} from "@ant-design/icons"
const FirstHalfFold = () => {
  return (
    <div className={styles.firstHalfFold}>
      <div className={styles.mainDiv} id="main-div">
       {
        [
          {
            src:"",
            heading:"Extensive Flight Data",
            content: "Powered by a strong backbone of aviation data sources, our API delivers accurate details about any global flight at any stage, even down to the minute."
          },
          {
            src:"",
            heading:"Extensive Flight Data",
            content: "Powered by a strong backbone of aviation data sources, our API delivers accurate details about any global flight at any stage, even down to the minute."
          },
          {
            src:"",
            heading:"Extensive Flight Data",
            content: "Powered by a strong backbone of aviation data sources, our API delivers accurate details about any global flight at any stage, even down to the minute."
          },
          {
            src:"",
            heading:"Extensive Flight Data",
            content: "Powered by a strong backbone of aviation data sources, our API delivers accurate details about any global flight at any stage, even down to the minute."
          }
        ].map((data,idx)=>{
          return <div className={styles.containerDiv} key={idx}>
            <div className={styles.headerDiv}>
            <DollarCircleFilled className={styles.icon}/>
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
