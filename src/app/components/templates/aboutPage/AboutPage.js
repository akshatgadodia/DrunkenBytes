import React from 'react'
import styles from "./aboutPage.module.css";
import FirstFold from './components/FirstFold';
import SecondFold from './components/SecondFold';
import ThirdFold from './components/ThirdFold';
import FourthFold from './components/FourthFold';

const AboutPage = (props) => {
  return (
    <>
      <FirstFold/>
      <SecondFold businessServed={props.businessServed} nftsCreated={props.nftsCreated} netTransactionValue={props.netTransactionValue}/>
      <ThirdFold/>
      <FourthFold/>
    </>
  )
}

export default AboutPage