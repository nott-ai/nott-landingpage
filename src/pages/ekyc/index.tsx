import Ekyc from "@/components/KYC/index";
import Head from "next/head";

const EkycPage = () => {
  return (
    <>
      <Head>
        <title>eKYC - NOTT Foundation</title>
        <link rel="preload" href="/images/ekyc-bg.webp" as="image" />
        <link rel="preload" href="/images/ekyc-mobile-bg.webp" as="image" />
      </Head>
      <Ekyc />
    </>
  );
};
export default EkycPage;
