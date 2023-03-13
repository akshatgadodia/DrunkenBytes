import React, { useState } from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Button, Form, Input, Spin, Switch, Upload, Modal, Select } from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import CreateNftModal from "@/app/components/modules/CreateNFTModal"
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"
import { uploadImage } from "@/app/utils/uploadImage"

const SecondFold = props => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [openModal, setOpenModal] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [form] = Form.useForm();
  const [traits, setTraits] = useState([{ key: '', value: '' }]);
  const [nftType, setNftType] = useState('product');
  const [transferable, setTransferable] = useState(true);
  const [useCustomImage, setUseCustomImage] = useState(false);

  const handleCancel = () => setPreviewOpen(false);

  // const handlePreview = async (file) => {
  //   setPreviewImage(file.url);
  //   setPreviewOpen(true);
  //   setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  // };
  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  // const uploadMainImage = async options => {
  //   const { onSuccess, onError, file, onProgress } = options;
  //   try {
  //     const res = await uploadImage(file)
  //     onSuccess("Ok");
  //     setFileList([{
  //       uid: file.uid,
  //       name: file.name,
  //       status: 'done',
  //       url: res.file.url
  //     }])
  //   } catch (err) {
  //     console.log(err);
  //     onError({ err });
  //   }
  // };
  // const removeMainImage = async (file) => {
  //   console.log(file)
  // }
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

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
    setTraits(list);
  };

  const onFinish = async values => {
    console.log(values)
    console.log({
      receiverName: values.receiverName,
      receiverEmail: values.receiverEmail,
      receiverWalletAddress: values.receiverWalletAddress,
      traits
    })
    // try {
    //   const result = await sendRequest(
    //     "/nft/mint-nft",
    //     "POST",
    //     JSON.stringify({
    //       receiverName: values.receiverName,
    //       receiverEmail: values.receiverEmail,
    //       receiverWalletAddress: values.receiverWalletAddress,
    //       traits
    //     })
    //   );
    //   if (!error) {
    //     setTransactionID(result.txId);
    //     setOpenModal(true);
    //     form.resetFields();
    //   }
    //   clearError();
    // } catch (err) { }
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
            scrollToFirstError
            layout="vertical"
            name="basic"
            form={form}
            style={{ maxWidth: "100%" }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              label="Receiver Name" required
              name="receiverName"
              rules={[
                {
                  required: true,
                  message: "Please input Receiver Name!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Receiver Name" className={styles.input} />
            </Form.Item>
            <Form.Item
              label="Receiver Email" required
              name="receiverEmail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Email!"
                },
                {
                  required: true,
                  message: "Please input Receiver Email!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Receiver Email" className={styles.input} />
            </Form.Item>

            <Form.Item
              label="Receiver Wallet Address" required
              name="receiverWalletAddress"
              rules={[
                {
                  required: true,
                  message: "Please input Receiver Wallet Address!"
                },
                {
                  pattern: new RegExp(/(\b0x[a-f0-9A-F]{40}\b)/g),
                  message: "Please input valid Wallet Address!"
                }
              ]}
              className={styles.formItem}
            >
              <Input
                placeholder="Enter Receiver Wallet Address"
                className={styles.input}
              />
            </Form.Item>
            <Form.Item
              label="NFT Type" required
              name="nftType"
              className={styles.formItem}
            >
              <Select
                defaultValue={nftType}
                className={styles.input}
                onChange={(value) => setNftType(value)}
                options={[
                  {
                    value: 'product',
                    label: 'Product NFT',
                  },
                  {
                    value: 'document',
                    label: 'Document NFT',
                  },
                  {
                    value: 'other',
                    label: 'Other',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="NFT Name" required
              name="nftName"
              rules={[
                {
                  required: true,
                  message: "Please input NFT Name!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter NFT Name" className={styles.input} />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter Main Photo"
                }
              ]}
              className={styles.formItem}>
              <Switch onChange={() => setUseCustomImage(!useCustomImage)} checked={useCustomImage} /> &nbsp;
              {(useCustomImage) ? 'I want to provide my own NFT Image' : 'Use auto-generated NFT Image'}<br /><br />
              {useCustomImage &&
                <><Upload
                  accept="image/*"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  customRequest={uploadMainImage}
                  onRemove={removeMainImage}
                  disabled={!useCustomImage}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                  <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                      alt="example"
                      style={{
                        width: '100%',
                      }}
                      src={previewImage}
                    />
                  </Modal></>}
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
                      label="Trait Value" required
                      name={`value-${index}`}
                      rules={[
                        {
                          required: true,
                          message: "Please input Trait Value!"
                        }
                      ]}
                      className={styles.formItem}
                    >
                      <Input placeholder="Enter Trait Value" className={styles.input} id={`value-${index}`}
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
              <Form.Item valuePropName="checked">
                <Switch onChange={() => setTransferable(!transferable)} checked={transferable} /> &nbsp;
                NFT is {(transferable) ? 'transferable' : 'not transferable'}

              </Form.Item>
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
