import React, { useState, useEffect } from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Button, Form, Input, DatePicker, Spin } from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import CreateNftModal from "@/app/components/modules/CreateNftModal"
const SecondFold = props => {
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [openModal, setOpenModal] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [form] = Form.useForm();

  const onFinish = async values => {
    try {
      const result = await sendRequest(
        "/nft/mint-nft",
        "POST",
        JSON.stringify({
          createdBy: values.createdBy,
          buyerName: values.buyerName,
          buyerEmail: values.buyerEmail,
          brandName: values.brandName,
          productName: values.productName,
          productId: values.productId,
          warrantyExpireDate: values.warrantyExpireDate.$d,
          buyerMetamaskAddress: values.buyerMetamaskAddress,
          methodType: 0
        })
      );
      if (!error) {
        setTransactionID(result.txId);
        setOpenModal(true);
        form.resetFields();
      }
      clearError();
    } catch (err) { }
  };
  return (
    <div className={styles.createNft}
      style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-left-side.png" +
          ")"
      }}
    >
      <CreateNftModal openModal={openModal} setOpenModal={setOpenModal} transactionID={transactionID} />
      <div className={styles.loginDiv}>
        <Spin size="large" spinning={isLoading}>
          <Form
            initialValues={{
              buyerName: "Akshat Gadodia",
              buyerEmail: "akshatgadodia@gmail.com",
              brandName: "APPLE",
              productName: "IPHONE 6",
              productId: "IP6-NE-15486548641",
              buyerMetamaskAddress: "0xdCFF746b4EBa3446c2ec3794A0961785c7c93013"
            }}
            scrollToFirstError
            layout="vertical"
            name="basic"
            form={form}
            style={{ maxWidth: "100%" }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              label="Buyer Name" required
              name="buyerName"
              rules={[
                {
                  required: true,
                  message: "Please input Buyer Name!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Buyer Name" className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Buyer Email" required
              name="buyerEmail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Email!"
                },
                {
                  required: true,
                  message: "Please input Buyer Email!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Buyer Email" className={styles.input} />
            </Form.Item>

            <Form.Item
              label="Brand Name" required
              name="brandName"
              rules={[
                {
                  required: true,
                  message: "Please input Brand Name!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Brand Name" className={styles.input} />
            </Form.Item>

            <Form.Item
              label="Product Name" required
              name="productName"
              rules={[
                {
                  required: true,
                  message: "Please input Product Name!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Product Name" className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Product ID" required
              name="productId"
              rules={[
                {
                  required: true,
                  message: "Please input Product ID!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Product ID" className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Warranty Expiry Date" required
              name="warrantyExpireDate"
              rules={[
                {
                  required: true,
                  message: "Please select or enter Warranty Expiry Date!"
                }
              ]}
              className={styles.formItem}
            >
              <DatePicker
                className={styles.input}
                placeholder="Select Warranty Expiry Date"
              />
            </Form.Item>
            <Form.Item
              label="Buyer Wallet Address" required
              name="buyerMetamaskAddress"
              rules={[
                {
                  required: true,
                  message: "Please input Buyer Wallet Address!"
                },
                {
                  pattern: new RegExp(/(\b0x[a-f0-9A-F]{40}\b)/g),
                  message: "Please input valid Wallet Address!"
                }
              ]}
              className={styles.formItem}
            >
              <Input
                placeholder="Enter Buyer Metamask Address"
                className={styles.input}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                CREATE WARRANTY CARD NFT
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default SecondFold;
