import Head from "next/head";
import HomePage from "../components/Homepage";
import useDeviceDetect from "@/components/common/DeviceDetect";

export default function Home() {
  const { isDesktop } = useDeviceDetect();
  return (
    <>
      <Head>
        <title>NOTT Innovative Technology</title>
        <meta
          name="description"
          content="Join us on a transformative journey to optimal health with NOTT's advanced wellness ecosystem, integrating state-of-the-art healthcare technology and personalized well-being strategies designed for modern life."
        />
        <meta
          name="keywords"
          content="NOTT Innovative Technology, HealthFi, Decentralized Physical Infrastructure Network, DePIN, AI Health Insights, Wellness Platform, Smart Wearables, Smart beds, Health Monitoring, Personalized Health, Health and Wellness Technology, Digital Health Ecosystem"
        ></meta>
        <link rel="canonical" href="https://nott.ai"></link>
        <meta
          property="og:title"
          content="NOTT: Your Pathway to Enhanced Wellness"
        />
        <meta
          property="og:description"
          content="Join us on a transformative journey to optimal health with NOTT's advanced wellness ecosystem, integrating state-of-the-art healthcare technology and personalized well-being strategies designed for modern life."
        />
        <meta property="og:url" content="https://nott.ai" />
        <meta
          property="og:image"
          content="https://nott.ai/images/thumbnail.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {isDesktop ? (
          <link rel="preload" href="/images/banner-main.webp" as="image" />
        ) : (
          <link
            rel="preload"
            href="/images/banner-main-mobile.webp"
            as="image"
          />
        )}
      </Head>
      <HomePage />
    </>
  );
}
