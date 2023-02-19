import styles from "./stylesheets/navbar.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserOutlined, LockOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Avatar } from "antd";
import SideDrawer from "./SideDrawer";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { useHttpClient } from "@/app/hooks/useHttpClient";

const Navbar = () => {
  const { error, sendRequest } = useHttpClient();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const [isNavBarFixed, setNavBarFixed] = useState(false);

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

  useEffect(() => {
    const sendLoginRequest = async ()=>{
      try {
        await sendRequest(
          "/user/login",
          "POST",
          JSON.stringify({
            accountAddress: address
          })
        );
        // if (!error) {
        //   console.log(result);
        // }
      } catch (err) {}
    }
    if(isConnected){
      sendLoginRequest();
    }
  }, [isConnected]);

  const loginHandler = async () => {
    await open();
  };

  const logoutHandler = async () => {
    disconnect();
    try {
      await sendRequest(
        "/user/logout",
        "POST"
      );
    } catch (err) {}
  };

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
        <button className={styles.avatarItemButton} onClick={logoutHandler}>
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
          : <button className={styles.button} onClick={loginHandler}>
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
