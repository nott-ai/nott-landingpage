import TermService from "@/components/LegalAndCompliance/TermService";
import Head from "next/head";

const TermServicePage = () => {
  return (
    <>
      <Head>
        <title> Term & Service - NOTT Innovative Technology</title>
        <meta
          name="description"
          content="Learn about your rights and obligations when using NOTT's services and technology."
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://nott.ai/terms-of-service/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Term of Service - NOTT Innovative Technology" />
        <meta
          property="og:description"
          content="Learn about your rights and obligations when using NOTT's services and technology."
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
          content="https://nott.ai/terms-of-service/"
        />
        <meta
          name="twitter:title"
          content="Term of Service - NOTT Innovative Technology"
        />
        <meta
          name="twitter:description"
          content="Learn about your rights and obligations when using NOTT's services and technology."
        />
        <meta
          name="twitter:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
      </Head>
      <TermService />
    </>
  );
};

export default TermServicePage;
