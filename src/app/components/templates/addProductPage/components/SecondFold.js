import React, { useState } from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Button, Form, Input, Spin, notification } from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"

const SecondFold = props => {
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [form] = Form.useForm();
  const [traits, setTraits] = useState([{ key: '', value: '' }]);

  // Handle form input change
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...traits];
    list[index][name] = value;
    setTraits(list);
  };

  // Handle add button click
  const handleAddField = () => {
    // Add new empty key-value pair to form data state
    setTraits([...traits, { key: '', value: '' }]);
  };

  // Handle remove button click
  const handleRemoveField = (index) => {
    // Remove key-value pair from form data state at specified index
    const list = [...traits];
    list.splice(index, 1);
    form.setFieldsValue({ [`value-${index}`]: '', [`key-${index}`]: '' });
    console.log(list);
    setTraits(list);
  };

  const onFinish = async values => {
    console.log(values)
    try {
      const result = await sendRequest(
        "/product/",
        "POST",
        JSON.stringify({
          name: values.productName,
          traits
        })
      );
      console.log(result);
      if (!error) {
        notification.success({
          message: "Success",
          description: "Product Added Successfully",
          placement: "top",
          // duration: null,
          className: "error-notification"
        });
        form.resetFields();
      }
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
      <div className={styles.loginDiv}>
        <Spin size="large" spinning={isLoading}>
          <Form
            scrollToFirstError
            layout="vertical"
            name="basic"
            form={form}
            style={{ maxWidth: "100%" }}
            onFinish={onFinish}
            autoComplete="on"
          >
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
              <Input placeholder="Enter Receiver Name" className={styles.input} />
            </Form.Item>

            <div className={styles.traitContainer}>
              <div className={styles.titleContainer}>
                <h2>Traits</h2>
                <Button type="primary" onClick={() => handleAddField()} className={styles.deleteButton}>
                  <PlusOutlined style={{ color: "black" }} size="large" />
                </Button>
              </div>
              {
                traits.map((field, index) => {
                  return <div className={styles.formItemContainer}>
                    <Form.Item
                      label="Trait Type" required
                      name={`key-${index}`}
                      rules={[
                        {
                          required: true,
                          message: "Please input Trait Type!"
                        }
                      ]}
                    >
                      <Input placeholder="Enter Trait Type" className={styles.input} id={`key-${index}`}
                        name="key"
                        value={field.key} onChange={(e) => handleInputChange(e, index)} />
                    </Form.Item>
                    <Form.Item
                      label="Trait Value"
                      name={`value-${index}`}
                      className={styles.formItem}
                      tooltip="Only Enter Default Values"
                    >
                      <Input placeholder="Enter Default Trait Value" className={styles.input} id={`value-${index}`}
                        name="value"
                        value={field.value}
                        onChange={(e) => handleInputChange(e, index)} />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" onClick={() => handleRemoveField(index)} className={styles.deleteButton}>
                        <DeleteOutlined style={{ color: "black" }} />
                      </Button>
                    </Form.Item>
                  </div>
                })
              }
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Add Product
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default SecondFold;
