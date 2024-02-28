import Head from "next/head";
import Hero from "@/components/Homepage/Hero";
import Faqs from "@/components/Homepage/Faqs";
import Campaign from "@/components/Homepage/Campaign";
import AboutNOTT from "@/components/Homepage/AboutNOTT";
import ProductsShowcase from "@/components/Homepage/ProductsShowcase";
import NOTTMarketplace from "../components/Homepage/NOTTMarketplace";
import { Element } from "react-scroll";
import FeatureBenefit from "@/components/Homepage/FeatureBenefit";

export default function Home() {
  return (
    <>
      <Head>
        <title>NOTT Foundation</title>
        <meta
          name="description"
          content="Discover NOTT, the forefront of health innovation leveraging AI, HealthFi, and DePIN to offer personalized wellness insights and a comprehensive health ecosystem. Empower your health journey with our smart devices and health monitoring platform."
        />
        <meta
          name="keywords"
          content="NOTT Foundation, HealthFi, Decentralized Physical Infrastructure Network, DePIN, AI Health Insights, Wellness Platform, Smart Wearables, Smart beds, Health Monitoring, Personalized Health, Health and Wellness Technology, Digital Health Ecosystem"
        ></meta>
        <link rel="canonical" href="https://nott.ai"></link>
        <meta
          property="og:title"
          content="Empower Your Health with NOTT Platform"
        />
        <meta
          property="og:description"
          content="Join the revolution in health and wellness with NOTT's advanced platform combining AI, HealthFi, and DePIN technologies for personalized health empowerment."
        />
        <meta property="og:url" content="https://nott.ai" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Element name="home">
          <Hero />
        </Element>

        <Element name="campaigns">
          <Campaign />
        </Element>

        <Element name="about-NOTT">
          <AboutNOTT />
        </Element>

        <Element name="nott-market">
          <NOTTMarketplace />
        </Element>

        <Element name="features-and-benefits">
          <FeatureBenefit />
        </Element>

        <Element name="product-showcase">
          <ProductsShowcase />
        </Element>
        <Faqs />
      </main>
    </>
  );
}
