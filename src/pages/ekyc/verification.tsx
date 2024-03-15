import Confirmation from "@/components/KYC/Confirmation";
import Head from "next/head";

const ConfirmationPage = () => {
  return (
    <>
      <Head>
        <title>Verification - NOTT Foundation</title>
        <link rel="preload" href="/images/ekyc-apply-bg.webp" as="image" />
        <link
          rel="preload"
          href="/images/ekyc-apply-mobile-bg.webp"
          as="image"
        />
      </Head>
      <Confirmation />
    </>
  );
};

export default ConfirmationPage;
