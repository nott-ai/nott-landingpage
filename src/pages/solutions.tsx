import Solutions from "@/components/Solutions";
import Head from "next/head";
import React from "react";

const SolutionsPage = () => {
  return (
    <>
      <Head>
        <title>Solutions - NOTT Foundation</title>
        <meta
          name="description"
          content="Innovators in Health and Wellness Technology"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://nott.ai/about-us/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Solutions - NOTT Foundation" />
        <meta
          property="og:description"
          content="Innovators in Health and Wellness Technology"
        />
        <meta
          property="og:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nott.ai" />
        <meta property="twitter:url" content="https://nott.ai/about-us/" />
        <meta name="twitter:title" content="Solutions - NOTT Foundation" />
        <meta
          name="twitter:description"
          content="Innovators in Health and Wellness Technology"
        />
        <meta
          name="twitter:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
        <link rel="preload" href="/images/solutions/bannerSolutions.webp" as="image" />
        <link rel="preload" href="/images/solutions/networks.webp" as="image" />
      </Head>
      <Solutions />
    </>
  );
};

export default SolutionsPage;
