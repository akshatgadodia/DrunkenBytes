import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const BlogsPage = () => {
  return (
    <div>
      <Head>
        <title>Blogs | Drunken Bytes</title>
        <meta name="description" content="Stay updated with the latest blogs from Drunken Bytes on NFTs, blockchain, technology, and more. Discover insightful articles, news, and updates about digital assets, blockchain trends, and the intersection of technology and NFTs." />
        <meta name="keywords" content="Drunken Bytes blogs, NFT articles, blockchain updates, technology news, digital assets, blockchain trends, NFT insights, technology blogs, Drunken Bytes news, NFT and blockchain blogs, Drunken Bytes." />
        <meta property="og:title" content="Drunken Bytes" />
        <meta property="og:description" content="Stay updated with the latest blogs from Drunken Bytes on NFTs, blockchain, technology, and more. Discover insightful articles, news, and updates about digital assets, blockchain trends, and the intersection of technology and NFTs." />
        <meta property="og:image" content="https://drunkenbytes.vercel.app/images/page-shots/blogs.png" />
        <meta name="twitter:title" content="Drunken Bytes" />
        <meta name="twitter:description" content="Stay updated with the latest blogs from Drunken Bytes on NFTs, blockchain, technology, and more. Discover insightful articles, news, and updates about digital assets, blockchain trends, and the intersection of technology and NFTs." />
        <meta name="twitter:image" content="https://drunkenbytes.vercel.app/images/page-shots/blogs.png"/>
        <link rel="canonical" href="https://drunkenbytes.vercel.app/blogs" />
        <meta property="og:url" content="https://drunkenbytes.vercel.app/blogs"/>
        <meta property="og:url" content="https://drunkenbytes.vercel.app/blogs"/>

      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default BlogsPage;
