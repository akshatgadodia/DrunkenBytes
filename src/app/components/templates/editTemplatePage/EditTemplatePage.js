import React from "react";
import styles from "./editTemplatePage.module.css";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const EditTemplatePage = (props) => {
  return (
    <div className={styles.addProductPage}> 
    <Head>
        <title>Edit Template | Drunken Bytes</title>
        <meta name="description" content="Edit a template for your products and credentials on Drunken Bytes so you don't have to enter the same information every time you generate an NFT. Our user-friendly interface allows you to easily set up fields for product name, traits, and other details. Save time and streamline your NFT creation process with Drunken Bytes."></meta>
        <meta name="keywords" content="Drunken Bytes, add template, edit template, NFT generation, product information, product template"></meta>
      </Head>
      <FirstFold />
      <SecondFold templateId={props.templateId}/>
    </div>
  )
};

export default EditTemplatePage;
