import styles from "./stylesheets/navbar.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserOutlined, LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Avatar, notification } from "antd";
import SideDrawer from "./SideDrawer";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { useSignMessage } from 'wagmi'
import Cookies from "js-cookie";
import AcceptAndSignModal from "./AcceptAndSignModal";
import { useRouter } from "next/router";

const Navbar = () => {
  const { error, sendRequest } = useHttpClient();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const router = useRouter();
  const { pathname } = useRouter();
  const [isNavBarFixed, setNavBarFixed] = useState(false);
  const [message, setMessage] = useState();
  const [acceptModalOpen, setAcceptModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const sendInitialLoginRequest = async (accountAddress) => {
    try {
      const result = await sendRequest(
        "/user/initial-login",
        "POST",
        JSON.stringify({
          accountAddress
        })
      );
      if(!error){
        setMessage(result.message);
        setAcceptModalOpen(true);
      }
    } catch (err) { }
  }

  const account = useAccount({
    onConnect({address}) {
      const loggedInStatus = Cookies.get("userLoggedIn");
      if(loggedInStatus !== 'true') sendInitialLoginRequest(address);
    },
    onDisconnect() {
      const sendLogoutRequest = async () => {
        try {
          Cookies.remove('userLoggedIn');
          await sendRequest(
            "/user/logout",
            "POST"
          );
        } catch (err) { }
      }
      sendLogoutRequest();
      },
  })
  

  const { signMessage } = useSignMessage({
    onSuccess(data, variables) {
      const sendLoginRequest =  async() =>{
        await sendRequest(
          "/user/login",
          "POST",
          JSON.stringify({
            accountAddress: address,
            signedData: data,
            message: variables.message,
          })
        );
        if(error){
          Cookies.remove('userLoggedIn');
          disconnect();
        }
        setAcceptModalOpen(false);
        setModalLoading(false);
        Cookies.set('userLoggedIn', 'true');
        console.log(pathname);
        if(pathname==='/hold') router.back();
      }
      sendLoginRequest();
    },
    onError(error){
      notification.error({
        message: "Error",
        description: error.message,
        placement: "top",
        className: "error-notification"
      });
      setAcceptModalOpen(false)
      Cookies.remove('userLoggedIn');
      setModalLoading(false);
      disconnect();
    }
  })

  const onAcceptHandler = ()=>{
    setModalLoading(true);
    signMessage({ message })
  }

  const onModalClose = ()=>{
    setModalLoading(false);
    setAcceptModalOpen(false)
    Cookies.remove('userLoggedIn');
    disconnect();
  }

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setNavBarFixed(true);
    } else {
      setNavBarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const items = [
    {
      key: "1",
      label: (
        <Link href="/profile">
          <div className={styles.avatarItem}>
            <UserOutlined className={styles.avatarItemIcon} />Profile
          </div>
        </Link>
      )
    },
    {
      key: "2",
      label: (
        <Link href="/profile/change-password">
          <div className={styles.avatarItem}>
            <LockOutlined className={styles.avatarItemIcon} />
            Change Password
          </div>
        </Link>
      )
    },
    {
      key: "3",
      label: (
        <button className={styles.avatarItemButton} onClick={() => disconnect()}>
          <div className={styles.avatarItem}>
            <LogoutOutlined className={styles.avatarItemIcon} />
            Logout
          </div>
        </button>
      )
    }
  ];
  return (
    <div
      className={`${styles.navbar} ${isNavBarFixed ? styles.fixedNavbar : ""}`}
    >
      <AcceptAndSignModal acceptModalOpen={acceptModalOpen} modalLoading={modalLoading} onModalClose={onModalClose} onAcceptHandler={onAcceptHandler}/>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            alt="Mountains"
            src="/images/drunken-bytes-logo-complete.png"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.linksContainer}>
          {isConnected &&
            <Link href="/create" className={styles.link}>
              Create
            </Link>}
          {isConnected &&
            <Link href="/transfer" className={styles.link}>
              Transfer
            </Link>}
          <Link href="/pricing" className={styles.link}>
            Pricing
          </Link>
          <Link href="/documentation" className={styles.link}>
            Documentation
          </Link>
        </div>
        {isConnected
          ? <Dropdown
            menu={{
              items
            }}
            placement="bottom"
          >
            <Avatar
              type="button"
              size="large"
              icon={<UserOutlined />}
              className={styles.avatar}
            />
          </Dropdown>
          : <button className={styles.button} onClick={async () => await open()}>
            <Avatar
              type="button"
              size="large"
              icon={<UserOutlined />}
              className={styles.avatar}
            />
          </button>}
        <SideDrawer />
      </div>
    </div>
  );
};

export default Navbar;
