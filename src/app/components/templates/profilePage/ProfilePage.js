import React, { useEffect, useState } from "react";
import styles from "./profilePage.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { Image, Tabs } from 'antd';
import Head from 'next/head'
import NftTable from "./components/NftTable";
import WalletRechargeTable from "./components/WalletRechargeTable";

const ProfilePage = () => {
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const sendFetchRequest = async () => {
      const result = await sendRequest("/user/get-user-profile");
      console.log(result)
      console.log(error)
      setProfileData(result.user)
    }
    sendFetchRequest();
  }, [])

  return (
    <div className={styles.profile}>
    <Head>
        <title>Profile | Drunken Bytes</title>
        <meta name="description" content="Get access to your personalized profile page on Drunken Bytes. View your account information, update your profile, and manage your settings." />
        <meta name="keywords" content="profile page, account information, user settings, personalization, manage account. Drunken Bytes" />
      </Head>
      <h1 className={styles.heading}>Drunken Bytes Profile</h1>
      <p className={styles.paragraph}>Here you can find your profile information</p>
      {(profileData?.logo !== null || profileData?.logo !== undefined) &&
        <div className={styles.profileDiv}>
          <div className={styles.headerDiv}><strong>User Profile</strong></div>
          <div className={styles.contentDiv}>
            <div className={styles.imageDiv}>
              <Image
                width={200}
                src={profileData.logo}
                alt="brand-logo"
                className={styles.logo}
              />
            </div>
            <div className={styles.informationDiv}>
              <div className={styles.informationContent}>
                <p>Business Name</p>
                <p>{profileData.name}</p>
              </div>
              <div className={styles.informationContent}>
                <p>Wallet Address</p>
                <p>{profileData.accountAddress}</p>
              </div>
              <div className={styles.informationContent}>
                <p>Business Email</p>
                <p>{profileData.email}</p>
              </div>
              <div className={styles.informationContent}>
                <p>Wallet Balance</p>
                <p>{profileData.walletBalance} ETH</p>
              </div>
            </div>
          </div>
        </div>
      }
      <Tabs
        defaultActiveKey="1"
        className="profile-tabs"     
        size="middle"   
        type="card"
        animated
        >
        <Tabs.TabPane tab="NFT Transactions" key="1" className="tab-pane">
          <NftTable/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Wallet Transactions" key="2" className="tab-pane">
          <WalletRechargeTable/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Products" key="3" className="tab-pane">
          HAHA

        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
