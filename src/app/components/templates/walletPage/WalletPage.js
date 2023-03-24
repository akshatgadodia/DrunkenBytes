import React, { useEffect, useState } from "react";
import styles from "./walletPage.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { Tabs } from 'antd';
import CustomButton from "@/app/components/elements/CustomButton";
import AddMoneyModal from "./components/AddMoneyModal";
import Head from 'next/head'
import WalletRechargeTable from './components/WalletRechargeTable';

const WalletPage = () => {
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [profileData, setProfileData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const sendFetchRequest = async () => {
      const result = await sendRequest("/user/get-user-profile");
      setProfileData(result.user)
      if(error) clearError();
    }
    sendFetchRequest();
  }, [modalOpen])
  return (
    <div className={styles.profile}>
     <Head>
        <title>Why Choose Drunken Bytes</title>
        <meta name="description" content="Manage your wallet securely on Drunken Bytes wallet page. Easily transfer your eth from your crypto wallet to Drunken Bytes Wallet. Keep your transactions safe with our state-of-the-art security features." />
          <meta name="keywords" content="Drunken Bytes wallet, cryptocurrency wallet, secure transactions" />
      </Head>
    <AddMoneyModal open={modalOpen} setOpen={setModalOpen} accountAddress={profileData.accounntAddress}/>
      <h1 className={styles.heading}>Drunken Bytes Wallet</h1>
      <p className={styles.paragraph}>Here you can find your wallet information</p>
        <div className={styles.profileDiv}>
          <div className={styles.contentDiv}>
            <h2>{profileData.walletBalance} ETH</h2>
            <p>Current Wallet Balance</p>
          </div>
          <CustomButton type="Gradient" text="+ &nbsp; Add Money to Wallet" onClick={()=> setModalOpen(true)}/>
        </div>
        <div className="profile-tabs tab-pane">
          <WalletRechargeTable/>
        </div>
      {/* <Tabs
        defaultActiveKey="1"
        className="profile-tabs"     
        size="middle"   
        type="card"
        animated
        >
        <Tabs.TabPane tab="NFT Transactions" key="1">
          HAHA
        </Tabs.TabPane>
        <Tabs.TabPane tab="Wallet Transactions" key="2">
          HAHA
        </Tabs.TabPane>
      </Tabs> */}
    </div>
  );
};

export default WalletPage;
