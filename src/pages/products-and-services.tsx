import ProductsAndServices from "@/components/ProductsAndServices/index";
import Head from "next/head";

const ProductsAndServicesPage = () => {
  return (
    <>
      <Head>
        <title>Products and Services - NOTT Foundation</title>
        <meta
          name="description"
          content="Explore NOTT's Health Solutions: Products and Services for Your Wellness Journey."
        />
        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://nott.ai/products-and-services/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Products and Services - NOTT Foundation"
        />
        <meta
          property="og:description"
          content="Explore NOTT's Health Solutions: Products and Services for Your Wellness Journey."
        />
        <meta property="og:image" content="" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="nott.ai" />
        <meta
          property="twitter:url"
          content="https://nott.ai/products-and-services/"
        />
        <meta
          name="twitter:title"
          content="Products and Services - NOTT Foundation"
        />
        <meta
          name="twitter:description"
          content="Explore NOTT's Health Solutions: Products and Services for Your Wellness Journey."
        />
        <meta name="twitter:image" content="" />
      </Head>
      <ProductsAndServices />;
    </>
  );
};
export default ProductsAndServicesPage;
