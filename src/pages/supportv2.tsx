import SupportV2Page from "@/components/SupportV2";
import Head from "next/head";
import React from "react";

const SupportV2 = () => {
  return (
    <>
      <Head>
        <title>Support - NOTT Innovative Technology</title>
        <meta
          name="description"
          content="Download now for Exclusive insights & Seamless connectivity!"
        />
        <meta
          property="og:url"
          content="https://develop.nott-landingpage.pages.dev/support/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Support - NOTT Innovative Technology"
        />
        <meta
          property="og:description"
          content="Download now for Exclusive insights & Seamless connectivity!"
        />
        <meta
          property="og:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
      </Head>
      <SupportV2Page />
    </>
  );
};

export default SupportV2;
