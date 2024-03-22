import DeviceDropCampaign from "@/components/LegalAndCompliance/DeviceDropCampaign";
import Head from "next/head";

const DeviceDropCampaignPage = () => {
  return (
    <>
      <Head>
        <title>Device Drop Campaign Legal Compliance - NOTT Foundation</title>
        <meta
          name="description"
          content="Learn about your rights and obligations when joining Device Drop Campaign"
        />
        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://nott.ai/device-drop-campaign/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Device Drop Campaign Legal Compliance - NOTT Foundation"
        />
        <meta
          property="og:description"
          content="Learn about your rights and obligations when joining Device Drop Campaign"
        />
        <meta
          property="og:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nott.ai" />
        <meta
          property="twitter:url"
          content="https://nott.ai/device-drop-campaign/"
        />
        <meta
          name="twitter:title"
          content="Device Drop Campaign Legal Compliance - NOTT Foundation"
        />
        <meta
          name="twitter:description"
          content="Learn about your rights and obligations when joining Device Drop Campaign"
        />
        <meta
          name="twitter:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
      </Head>
      <DeviceDropCampaign />
    </>
  );
};

export default DeviceDropCampaignPage;
