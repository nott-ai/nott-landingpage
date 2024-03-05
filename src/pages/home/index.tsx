import NewsCard, { INewsCard } from "@/components/Homepage/NewsCard";
import ProductAndInnovationCard, {
  IProductAndInnovationCard,
} from "@/components/Homepage/ProductAndInnovationCard";
import styles from "@/styles/Homepage/home.module.scss";
import { useEffect, useState } from "react";

const lastNews: INewsCard[] = [
  {
    title:
      "New research on prostate cancer may lead to better diagnostics, treatments",
    description:
      "Researchers are reporting that a program aided by artificial intelligence (AI) has helped them identify two distinct subtypes of prostate",
    image: "/images/news1.webp",
    url: "https://www.nature.com/articles/s41591-021-01433-7",
  },
  {
    title:
      "New research on prostate cancer may lead to better diagnostics, treatments",
    description:
      "Researchers are reporting that a program aided by artificial intelligence (AI) has helped them identify two distinct subtypes of prostate",
    image: "/images/news1.webp",
    url: "https://www.nature.com/articles/s41591-021-01433-7",
  },
  {
    title:
      "New research on prostate cancer may lead to better diagnostics, treatments",
    description:
      "Researchers are reporting that a program aided by artificial intelligence (AI) has helped them identify two distinct subtypes of prostate",
    image: "/images/news1.webp",
    url: "https://www.nature.com/articles/s41591-021-01433-7",
  },
  {
    title:
      "New research on prostate cancer may lead to better diagnostics, treatments",
    description:
      "Researchers are reporting that a program aided by artificial intelligence (AI) has helped them identify two distinct subtypes of prostate",
    image: "/images/news1.webp",
    url: "https://www.nature.com/articles/s41591-021-01433-7",
  },
];

const productsAndInnovations: IProductAndInnovationCard[] = [
  {
    title: "Smartband",
    description:
      "This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.",
    images: ["/images/smartband.webp"],
    imageHeight: 145,
    imageWidth: 145,
  },
  {
    title: "Smartwatch",
    description:
      "A fusion of elegance and functionality, this smartwatch tracks your health, boosts productivity, and integrates seamlessly with your tech ecosystem.",
    images: ["/images/smartwatch.webp"],
    imageHeight: 165,
    imageWidth: 165,
  },
  {
    title: "Smartscale",
    description:
      "Advanced technology meets health monitoring; get detailed body composition, BMI, and trend analysis, all synced effortlessly with your health apps.",
    images: ["/images/smartscale.webp"],
    imageHeight: 183,
    imageWidth: 183,
  },
  {
    title: "Smartpillow",
    description:
      "Experience unparalleled comfort and sleep analysis with our smart pillow, featuring non-contact monitoring and AI-powered insights for a better night's rest",
    images: ["/images/smartpillow.webp"],
    imageHeight: 127,
    imageWidth: 213,
  },
];
const HomePage = () => {
  const [news, setNews] = useState<INewsCard[]>([]);
  if (typeof window !== "undefined") {
    console.log("ss");
  } else {
    console.log("qqq");
  }
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          className={styles.bannerImage}
          src="/images/home-banner.webp"
          alt="banner"
        />

        <div className={styles.content}>
          <b className={styles.title}>Welcome to NOTT!</b>
          <div className={styles.description}>
            An innovative platform at the forefront of digital wellness -
            powered by AI and grounded in Decentralized Physical Infrastructure
            Network (DePIN) principles.
          </div>
        </div>
      </div>

      <div className={styles.latestNews}>
        <div className={styles.titleBlock}>
          <p className={styles.left}>Latest News</p>
          <p className={styles.right}>{"View all >"}</p>
        </div>
        <div className={styles.news}>
          {lastNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>

      <div className={styles.featuredProductsAndInnovations}>
        <p className={styles.title}>Featured Products And Innovations</p>
        <div className={styles.content}>
          {productsAndInnovations.map(
            (product: IProductAndInnovationCard, index: number) => (
              <ProductAndInnovationCard key={index} {...product} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
