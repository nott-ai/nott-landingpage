import Head from "next/head";
import HomePage from "../components/Homepage";
import useDeviceDetect from "@/components/common/DeviceDetect";

export default function Home() {
  const { isDesktop } = useDeviceDetect();
  return (
    <>
      <Head>
        <title>NOTT Innovative Technology - AI-Powered Wellness DePIN Platform</title>
        <meta
          name="description"
          content="Join us on a transformative journey to optimal health with NOTT's advanced wellness ecosystem, integrating state-of-the-art healthcare technology and personalized well-being strategies designed for modern life. NOTT is a pioneering HealthFi ecosystem, integrating advanced AI, DePIN (Decentralized Physical Infrastructure Network), and a unique rewards system to enhance personal health management and community wellness, supported by a comprehensive marketplace and decentralized governance."
        />
        <meta
          name="keywords"
          content="NOTT Innovative Technology, HealthFi, Decentralized Physical Infrastructure Network, DePIN, AI Health Insights, Wellness Platform, Smart Wearables, Smart beds, Health Monitoring, Personalized Health, Health and Wellness Technology, Digital Health Ecosystem"
        ></meta>
        <link rel="canonical" href="https://nott.ai"></link>
        <meta
          property="og:title"
          content="NOTT Innovative Technology - AI-Powered Wellness DePIN Platform"
        />
        <meta
          property="og:description"
          content="Join us on a transformative journey to optimal health with NOTT's advanced wellness ecosystem, integrating state-of-the-art healthcare technology and personalized well-being strategies designed for modern life. NOTT is a pioneering HealthFi ecosystem, integrating advanced AI, DePIN (Decentralized Physical Infrastructure Network), and a unique rewards system to enhance personal health management and community wellness, supported by a comprehensive marketplace and decentralized governance."
        />
        <meta property="og:url" content="https://nott.ai" />
        <meta property="og:image" content="https://nott.ai/images/thumbnail.webp" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {isDesktop ? (
          <link rel="preload" href="/images/banner-main.webp" as="image" />
        ) : (
          <link rel="preload" href="/images/banner-main-mobile.webp" as="image" />
        )}
      </Head>
      <HomePage />
    </>
  );
}
