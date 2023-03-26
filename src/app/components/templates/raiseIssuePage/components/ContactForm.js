import React, {useState, useEffect} from "react";
import styles from "../stylesheets/contactForm.module.css";
import { Button, Form, Input, Spin, Select, notification  } from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";

const ContactForm = props => {
  const { TextArea } = Input;
  const [loading, setLoading] = useState(true);
  const { error, sendRequest, isLoading } = useHttpClient();
  const [form] = Form.useForm();

  useEffect(()=>{
    const fetchData = async () => {
      const result = await sendRequest(`/nft-transaction/get-transaction-details?tokenId=${props.tokenId}`)
      form.setFieldValue({tokenId: props.tokenId, name: result.transaction.receiverName, email: result.transaction.receiverEmail })
      console.log(result);
      setLoading(false);
    }
    if(props.hasTokenId){
      fetchData();
    } 
  },[])

  const onFinish = async values => {
    try {
      const result = await sendRequest(
        '/issue/save-issue',
        "POST",
        JSON.stringify({
          tokenId: values.tokenId,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        })
      );
      if (!error) {
        notification.success({
          message: "Success",
          description: result.message,
          placement: "top",
          // duration: null,
          className: "error-notification"
        });
        form.resetFields();
      }
    } catch (err) { }
  };

  return (
    <div className={styles.contactForm}>
      <Spin size="large" spinning={isLoading || loading}>
      <Form
        name="basic"
        form={form}
        style={{ maxWidth: "100%" }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <Form.Item
          name="tokenId"
          rules={[
            {
              required: true,
              message: "Please input Token Id"
            }
          ]}
          className={styles.formItem}
        >
          <Input placeholder="Token ID" className={styles.input} />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Name"
            }
          ]}
          className={styles.formItem}
        >
          <Input placeholder="Name" className={styles.input} />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Entered email is not a valid Email!"
            },
            {
              required: true,
              message: "Please enter email!"
            }
          ]}
          className={styles.formItem}
        >
          <Input placeholder="Email" className={styles.input} />
        </Form.Item>
        <Form.Item
          name="subject"
          rules={[
            {
              required: true,
              message: "Please input Subject!"
            }
          ]}
          className={styles.formItem}
        >
          <Input placeholder="Subject" className={styles.input} />
        </Form.Item>
      <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: "Please input Subject!"
            }
          ]}
          className={styles.formItem}
        >
          <TextArea placeholder="Message" rows={4} className={styles.input} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Raise Issue
          </Button>
        </Form.Item>
      </Form>
      </Spin>
    </div>
  );
};

export default ContactForm;
