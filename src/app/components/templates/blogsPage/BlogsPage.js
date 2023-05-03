import React from "react";
import styles from "./blogsPage.module.css";
import Head from "next/head";

import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const Blog = (props) => {
  return (
    <div className={styles.blogPage}>
      <Head>
        <title>{props.blogData.title} | Support Drunken Bytes</title>
      </Head>
      <FirstFold blogData={props.blogData} />
      <SecondFold blogData={props.blogData} />
    </div>
  );
};

export default Blog;
