import React, { useState, useEffect } from 'react'
import { useContext } from "react";
import { Modal } from "antd";
import styles from "../stylesheets/registerModal.module.css";
import CustomButton from "@/app/components/elements/CustomButton";
import { useRouter } from 'next/router'
import { useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import AppContext from "@/app/context/AppContext";
import Cookies from "js-cookie";

const RegisterModal = (props) => {
    const { loggedInDetails } = useContext(AppContext);
    const router = useRouter();
    const { open } = useWeb3Modal();
    const { disconnect } = useDisconnect();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        setModalOpen(true);
    }, [])

    const onClose = () => {
        router.push("/");
        Cookies.remove('db_register');
        disconnect();
        setModalOpen(false);
    }
    return (
        <Modal
            title="Welcome to Drunken Bytes"
            destroyOnClose
            closable
            centered
            keyboard
            onCancel={onClose}
            open={modalOpen}
            className="registerModal"
            footer={null}
        >
            <div className={styles.modalText}>
                <p>
                    Thank you for considering Drunken Bytes for your business needs! We're excited to help you create NFTs for your products and documents, and we look forward to working with you.
                </p>
                <p>Before you begin the registration process, please note that our sales team reviews and verifies all registration requests to ensure that they are legitimate and not fraudulent. As a result, your registration request may take 1-2 working days to be processed.
                </p><p>
                    We apologize for any inconvenience this may cause, but we believe that this process is necessary to ensure the safety and security of our platform. If you have any questions or concerns about the registration process, please feel free to contact our customer support team, who will be happy to assist you.
                </p><p>Thank you for your patience and understanding, and we look forward to welcoming you to the Drunken Bytes community!
                </p>
                {!loggedInDetails.isConnected && <p className={styles.warning}>It seems your wallet is not connected. Please Connect you wallet before procedding.</p>}
                <div className={styles.buttonsContainer}>
                    <CustomButton type="Gradient" text="Cancel" onClickHandler={onClose} />
                    {!loggedInDetails.isConnected && <CustomButton type="Gradient" text="Connect Wallet" onClickHandler={async () => await open()} />}
                    {loggedInDetails.isConnected && <CustomButton type="Gradient" text="Proceed" onClickHandler={() => { setModalOpen(false) }} />}
                </div>
            </div>
        </Modal>
    )
}

export default RegisterModal