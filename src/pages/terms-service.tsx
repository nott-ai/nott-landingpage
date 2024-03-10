import TermService from "@/components/TermService";
import Head from "next/head";

const TermServicePage = () => {
  return (
    <>
      <Head>
        <title> Term & Service - NOTT Foundation</title>
        <meta
          name="description"
          content="Learn about your rights and obligations when using NOTT's services and technology."
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://nott.ai/terms-service/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Term & Service - NOTT Foundation" />
        <meta
          property="og:description"
          content="Learn about your rights and obligations when using NOTT's services and technology."
        />
        <meta property="og:image" content="" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nott.ai" />
        <meta property="twitter:url" content="https://nott.ai/terms-service/" />
        <meta name="twitter:title" content="Term & Service - NOTT Foundation" />
        <meta
          name="twitter:description"
          content="Learn about your rights and obligations when using NOTT's services and technology."
        />
        <meta name="twitter:image" content="" />
      </Head>
      <TermService />
    </>
  );
};

export default TermServicePage;
