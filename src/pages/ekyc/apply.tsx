import ApplyKyc from "@/components/KYC/Apply";
import Head from "next/head";

const ApplyEkycPage = () => {
  return (
    <>
      <Head>
        <title>Do eKYC - NOTT Innovative Technology</title>
        <link rel="preload" href="/images/ekyc-apply-bg.webp" as="image" />
        <link
          rel="preload"
          href="/images/ekyc-apply-mobile-bg.webp"
          as="image"
        />
      </Head>
      <ApplyKyc />
    </>
  );
};
export default ApplyEkycPage;
