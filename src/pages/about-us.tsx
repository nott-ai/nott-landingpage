import AboutUs from "@/components/AboutUs/index";
import Head from "next/head";
import { title } from "process";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About Us - NOTT Foundation</title>
        <meta
          name="description"
          content="Innovators in Health and Wellness Technology"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://nott.ai/about-us/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - NOTT Foundation" />
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
        <meta name="twitter:title" content="About Us - NOTT Foundation" />
        <meta
          name="twitter:description"
          content="Innovators in Health and Wellness Technology"
        />
        <meta
          name="twitter:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
      </Head>
      <AboutUs />;
    </>
  );
};

export default AboutUsPage;
