import React, { useEffect, useState } from "react";
import styles from "./ticketsSinglePage.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import Head from "next/head";
import SkeletonLoader from "../../modules/SkeletonLoader";
import {
  Button,
  Form,
  Input,
  Spin,
  notification,
} from "antd";

const ProfilePage = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [ticketData, setTicketData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const sendFetchRequest = async () => {
      const result = await sendRequest(`/ticket/get-ticket/${props.id}`);
      setTicketData(result.ticket);
    };
    sendFetchRequest();
  }, [refresh]);

  const onFinish = async (values) => {
    try {
      const result = await sendRequest(
        `/ticket/${props.id}/reply`,
        "PUT",
        JSON.stringify({
          message: values.reply
        })
      );
      if (!error) {
        notification.success({
          message: "Success",
          description: "Replied Successfully",
          placement: "top",
          className: "error-notification"
        });
        form.resetFields();
        setRefresh(true);
      }
    } catch (err) {}
  };

  return (
    <>
      <Head>
        <title>Profile | Drunken Bytes</title>
        <meta
          name="description"
          content="Get access to your personalized profile page on Drunken Bytes. View your account information, update your profile, and manage your settings."
        />
        <meta
          name="keywords"
          content="profile page, account information, user settings, personalization, manage account. Drunken Bytes"
        />
        <meta property="og:title" content="Profile | Drunken Bytes" />
        <meta
          property="og:description"
          content="Get access to your personalized profile page on Drunken Bytes. View your account information, update your profile, and manage your settings."
        />
        <meta property="og:image" content="" />
        <meta name="twitter:title" content="Profile | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Get access to your personalized profile page on Drunken Bytes. View your account information, update your profile, and manage your settings."
        />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/profile" />
      </Head>
      {ticketData?.status === undefined ? (
        <SkeletonLoader />
      ) : (
        <Spin size="large" spinning={isLoading}>
          <div className={styles.profile}>
            <h1 className={styles.heading}>Ticket Conversation</h1>
            <div className={styles.informationDiv}>
              <div className={styles.information}>
                <p className={styles.title}>Subject:</p>
                <p className={styles.value}>{ticketData.subject}</p>
              </div>
              <div className={styles.information}>
                <p className={styles.title}>Ticket Open: </p>
                <p className={styles.value}>
                  {new Date(ticketData.dateCreated).getDate() +
                    "/" +
                    (new Date(ticketData.dateCreated).getMonth() + 1) +
                    "/" +
                    new Date(ticketData.dateCreated).getFullYear() +
                    " " +
                    new Date(ticketData.dateCreated).getHours() +
                    ":" +
                    new Date(ticketData.dateCreated).getMinutes() +
                    ":" +
                    new Date(ticketData.dateCreated).getSeconds()}
                </p>
              </div>
              <div className={styles.information}>
                <p className={styles.title}>Status: </p>
                <p className={styles.value}>{ticketData.status}</p>
              </div>
            </div>
            <div className={styles.conversationDiv}>
              {ticketData.conversation.map((data, idx) => {
                if (data.sentBy === "user")
                  return (
                    <div className={styles.container} key={idx}>
                      <div className={styles.nameDiv}>
                        <p className={styles.title}>{data.sender.name}</p>
                        <p className={styles.value}>
                          {new Date(data.createdAt).getDate() +
                            "/" +
                            (new Date(data.createdAt).getMonth() + 1) +
                            "/" +
                            new Date(data.createdAt).getFullYear() +
                            " " +
                            new Date(data.createdAt).getHours() +
                            ":" +
                            new Date(data.createdAt).getMinutes() +
                            ":" +
                            new Date(data.createdAt).getSeconds()}
                        </p>
                      </div>
                      <div className={styles.messageDiv}>{data.message}</div>
                    </div>
                  );
                else
                  return (
                    <div className={styles.container} key={idx}>
                      <div className={styles.messageDiv}></div>
                      <div className={styles.nameDiv}>
                        <p className={styles.title}>{data.sender.name}</p>
                        <p className={styles.value}>
                          {new Date(data.createdAt).getDate() +
                            "/" +
                            (new Date(data.createdAt).getMonth() + 1) +
                            "/" +
                            new Date(data.createdAt).getFullYear() +
                            " " +
                            new Date(data.createdAt).getHours() +
                            ":" +
                            new Date(data.createdAt).getMinutes() +
                            ":" +
                            new Date(data.createdAt).getSeconds()}
                        </p>
                      </div>
                    </div>
                  );
              })}
            </div>
            {!ticketData.isSolved && (
              <div className={styles.replyDiv}>
                <h2>Reply</h2>
                <Form
                  scrollToFirstError
                  layout="vertical"
                  name="basic"
                  form={form}
                  style={{ maxWidth: "100%" }}
                  onFinish={onFinish}
                  autoComplete="on"
                  className={styles.form}
                >
                  <Form.Item
                    name="reply"
                    rules={[
                      {
                        required: true,
                        message: "Please input Reply Message!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      className={styles.input}
                      autoSize={{ minRows: 4, maxRows: 20 }}
                    />
                  </Form.Item>

                  <Form.Item className={styles.formItem}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={styles.button}
                    >
                      SUBMIT
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            )}
          </div>
        </Spin>
      )}
    </>
  );
};

export default ProfilePage;