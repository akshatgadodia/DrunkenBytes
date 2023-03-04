import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Collapse } from 'antd';
const SecondFold = (props) => {
  const { Panel } = Collapse;
  return (
    <div className={styles.secondFold}>
        <div className={styles.mainDiv}>
        <Collapse ghost expandIconPosition="end" size="large">
        {
          [
            {
              header: "What is Drunken Bytes?",
              paragraph: "Drunken Bytes is a platform for creating and managing NFT-based warranty cards. Our end-to-end solution allows businesses to easily generate and distribute NFTs for their products or services."
            },
            {
              header: "What are NFTs?",
              paragraph: "NFTs, or non-fungible tokens, are unique digital assets that are stored on a blockchain. They can be used to represent a wide range of assets, such as art, music, or in our case, warranty cards."
            },
            {
              header: "How do I create a warranty card with Drunken Bytes?",
              paragraph: "To create a warranty card with Drunken Bytes, simply sign up for an account and follow the step-by-step process outlined on our platform. You'll be able to customize your warranty card with your own branding and information, and our platform will handle the rest."
            },
            {
              header: "How much does it cost to create a warranty card with Drunken Bytes?",
              paragraph: "The cost of creating a warranty card with Drunken Bytes varies based on the price of Ethereum and the amount of gas required to generate the NFT. We also charge a 5% commission on the total amount required to generate the NFT. For more information, please see our pricing page."
            },
            {
              header: "How do I add funds to my Drunken Bytes wallet?",
              paragraph: "To add funds to your Drunken Bytes wallet, simply navigate to your account settings and select 'Add Funds'. You can use a variety of payment methods, including credit card and cryptocurrency."
            },
            {
              header: "What happens if I have issues with my warranty card?",
              paragraph: "If you have any issues with your warranty card, please contact our customer support team for assistance. We're here to help ensure that your experience with Drunken Bytes is as seamless and positive as possible."
            },
            {
              header: "How do I get started with Drunken Bytes?",
              paragraph: "To get started with Drunken Bytes, simply sign up for an account and start exploring our platform. If you have any questions or issues, please don't hesitate to contact us for further assistance."
            },
            {
              header: "How do I know that my NFTs are secure on Drunken Bytes?",
              paragraph: "Drunken Bytes takes security very seriously and employs a number of measures to keep your NFTs safe. Our platform uses industry-standard encryption to protect your data, and we employ a range of other security features to ensure that your NFTs remain secure."
            },
            {
              header: "What is the difference between an NFT and a cryptocurrency?",
              paragraph: "NFTs and cryptocurrencies are both blockchain-based assets, but they serve different purposes. Cryptocurrencies are primarily used as digital currencies or means of exchange, while NFTs are unique digital assets that represent ownership of a specific item, such as artwork or collectibles."
            },
            {
              header: "How long does it take to mint an NFT on Drunken Bytes?",
              paragraph: "The time it takes to mint an NFT on Drunken Bytes depends on several factors, such as the size and complexity of the file, as well as network congestion. However, in general, it should only take a few minutes to mint an NFT on our platform."
            },
            {
              header: "How can I get in touch with Drunken Bytes support team?",
              paragraph: "If you need to get in touch with our support team, you can contact us through our website or by emailing support@drunkenbytes.com. We strive to respond to all inquiries within 24 hours."
            },
            {
              header: "How can I learn more about NFTs and blockchain technology?",
              paragraph: "If you want to learn more about NFTs and blockchain technology, there are many resources available online, including educational courses, forums, and blogs. You can also follow us on social media for updates and insights into the latest developments in the field."
            },
          ].map((data,idx)=>{
            return <Panel header={data.header} key={idx}>
              <p>{data.paragraph}</p>
            </Panel>
          })
        }
  </Collapse>
      </div>
    </div>
  );
};

export default SecondFold;
