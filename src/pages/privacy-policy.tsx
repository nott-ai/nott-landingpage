import PrivacyPolicy from "@/components/PrivacyPolicy";
import Head from "next/head";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - NOTT Foundation</title>
        <meta
          name="description"
          content="Explore NOTT's commitment to privacy, detailing how we protect and use your data."
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://nott.ai/privacy-policy/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy - NOTT Foundation" />
        <meta
          property="og:description"
          content="Explore NOTT's commitment to privacy, detailing how we protect and use your data."
        />
        <meta property="og:image" content="" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nott.ai" />
        <meta
          property="twitter:url"
          content="https://nott.ai/privacy-policy/"
        />
        <meta name="twitter:title" content="Privacy Policy - NOTT Foundation" />
        <meta
          name="twitter:description"
          content="Explore NOTT's commitment to privacy, detailing how we protect and use your data."
        />
        <meta name="twitter:image" content="" />
      </Head>
      <PrivacyPolicy />;
    </>
  );
};

export default PrivacyPolicyPage;
