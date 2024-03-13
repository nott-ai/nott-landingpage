import LegalDisclaimer from "@/components/LegalComplaince";
import Head from "next/head";

const LegalDisclaimerPage = () => {
  return (
    <>
      <Head>
        <title>Legal & Compliance - NOTT Foundation</title>
        <meta
          name="description"
          content="Ensuring Trust and Safety: NOTT's Vigilance in Legal Compliance and Ethical Standards in Health Innovation."
        />
        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://nott.ai/legal-and-compliance/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Legal & Compliance - NOTT Foundation"
        />
        <meta
          property="og:description"
          content="Ensuring Trust and Safety: NOTT's Vigilance in Legal Compliance and Ethical Standards in Health Innovation."
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
          content="https://nott.ai/legal-and-compliance/"
        />
        <meta
          name="twitter:title"
          content="Legal & Compliance - NOTT Foundation"
        />
        <meta
          name="twitter:description"
          content="Ensuring Trust and Safety: NOTT's Vigilance in Legal Compliance and Ethical Standards in Health Innovation."
        />
        <meta
          name="twitter:image"
          content="https://nott.ai/images/thumbnail.jpg"
        />
      </Head>
      <LegalDisclaimer />;
    </>
  );
};

export default LegalDisclaimerPage;
