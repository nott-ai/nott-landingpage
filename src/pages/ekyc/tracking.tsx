import Tracking from "@/components/KYC/Tracking";
import Head from "next/head";

const TrackingPage = () => {
  return (
    <>
      <Head>
        <title>Tracking - NOTT Foundation</title>
        <link rel="preload" href="/images/ekyc-apply-bg.webp" as="image" />
        <link
          rel="preload"
          href="/images/ekyc-apply-mobile-bg.webp"
          as="image"
        />
      </Head>
      <Tracking />
    </>
  );
};

export default TrackingPage;
