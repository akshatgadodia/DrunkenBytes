import React from 'react'
import styles from "./whyChooseUsPage.module.css";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const WhyChooseUsPage = () => {
  return (
    <div className={styles.whyChooseUsPage}> 
      <FirstFold/>
      <SecondFold/>
    </div>
  )
}

export default WhyChooseUsPage