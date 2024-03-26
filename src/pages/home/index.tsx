import { QuoteCloseIcon, QuoteOpenIcon } from "@/assets";
import NewsCard, { INewsCard } from "@/components/Homepage/NewsCard";
import ProductAndInnovationCard, {
  IProductAndInnovationCard,
} from "@/components/Homepage/ProductAndInnovationCard";
import styles from "@/styles/Homepage/home.module.scss";
import { useEffect, useState } from "react";
import { remoteConfig } from "@/pages/_app";
import { fetchAndActivate, getString } from "@firebase/remote-config";
import Link from "next/link";
import { INFO } from "@/constants/metas";
import { REMOTE_CONFIG_KEYS } from "@/constants/firebase-config";
import useDeviceDetect from "@/components/common/DeviceDetect";
import TypeWriter from "@/components/common/TypeWriter";

const HomePage = () => {
  const { isDesktop, isMobile } = useDeviceDetect();
  const [news, setNews] = useState<INewsCard[]>([]);

  const productsAndInnovations: IProductAndInnovationCard[] = [
    {
      id: "smart_band",
      title: "Smartband",
      description:
        "This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.",
      images: ["/images/product-service/product-lineup/sb3.webp"],
      imageHeight: isMobile ? 100 : 145,
      imageWidth: isMobile ? 100 : 145,
    },

    {
      id: "smart_watch",
      title: "Smartwatch",
      description:
        "A fusion of elegance and functionality, this smartwatch tracks your health, boosts productivity, and integrates seamlessly with your tech ecosystem.",
      images: ["/images/product-service/product-lineup/Watch_1.webp"],
      imageHeight: isMobile ? 100 : 165,
      imageWidth: isMobile ? 100 : 165,
    },
    {
      id: "smart_scale",
      title: "Smartscale",
      description:
        "Advanced technology meets health monitoring; get detailed body composition, BMI, and trend analysis, all synced effortlessly with your health apps.",
      images: ["/images/product-service/product-lineup/Smartscale_3.webp"],
      imageHeight: isMobile ? 120 : 183,
      imageWidth: isMobile ? 120 : 183,
    },
    {
      id: "smart_pillow",
      title: "Smartpillow",
      description:
        "Experience unparalleled comfort and sleep analysis with our smart pillow, featuring non-contact monitoring and AI-powered insights for a better night's rest",
      images: ["/images/smartpillow.webp"],
      imageHeight: isMobile ? 80 : 127,
      imageWidth: isMobile ? 136 : 213,
    },
  ];

  const convertNews = (news: string) => {
    const object = JSON.parse(news);
    return object.map((object: any) => {
      const description = object.shortDescription;
      return {
        title: object.title,
        description: description,
        image: object.featureImage,
        url: object.post,
      };
    });
  };

  useEffect(() => {
    if (remoteConfig) {
      fetchAndActivate(remoteConfig)
        .then(() => {
          const news = getString(remoteConfig, REMOTE_CONFIG_KEYS);
          const newsArray = convertNews(news);
          setNews(newsArray);
        })
        .catch((error) => {
          console.error("Error fetching remote config", error);
        });
    }
  }, [isDesktop]);

  return (
    <div className={styles.container}>
        {isDesktop ? (
          <div data-aos="fade-up" data-aos-duration="3000" className={styles.banner}>
            <img
              className={styles.bannerImage}
              src="/images/banner-main.webp"
              alt="banner"
            />

            <div className={styles.content}>
              <b className={styles.title}>Welcome to NOTT!</b>
              <div className={styles.description}>
                <TypeWriter
                  text="An innovative platform at the forefront of digital wellness -
              powered by AI and grounded in Decentralized Physical
              Infrastructure Network (DePIN) principles."
                  speed={50}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.banner}>
            <img
              className={styles.bannerImage}
              src="/images/banner-main-mobile.webp"
              alt="banner"
            />
            <div className={styles.content}>
              <b className={styles.title}>Welcome to NOTT!</b>
              <div className={styles.description}>
                <TypeWriter
                  text="An innovative platform at the forefront of digital wellness -
              powered by AI and grounded in Decentralized Physical
              Infrastructure Network (DePIN) principles."
                  speed={100}
                />
              </div>
              <div
                style={{ textAlign: "center" }}
                className={styles.description}
              ></div>
            </div>
          </div>
        )}

      <div className={styles.latestNews}>
        <div className={styles.titleBlock}>
          <p className={styles.left}>Latest News</p>

          <Link
            className={styles.right}
            href={INFO.BLOG}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"View all >"}
          </Link>
        </div>
        <div className={styles.news}>
          {news.map((el, index) => (
            <NewsCard key={index} {...el} />
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

      {isDesktop ? (
        <div className={styles.footer}>
          <div className={styles.content}>
            <div className={styles.imageOneContainer}>
              <img
                className={styles.imageOne}
                src="/images/home-footer-1.webp"
                alt="footer1"
              />
            </div>
            <div className={styles.imageTwoContainer}>
              <img
                className={styles.imageTwo}
                src="/images/home-footer-2.webp"
                alt="footer2"
              />
            </div>

            <div className={styles.textBlock}>
              <b className={styles.title}>Mission and Vision</b>
              <div className={styles.description}>
                <QuoteOpenIcon />
                <TypeWriter
                  text="&nbsp;&nbsp;NOTT’s mission is to empower individuals and
                communities to take control of their health and wellness through
                innovative technology. Our vision is to create a world where
                health and wellness are accessible to all, driven by the
                principles of decentralization, empowerment, and
                community.&nbsp;&nbsp;"
                  speed={100}
                />

                <QuoteCloseIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.footer}>
          <div className={styles.textBlock}>
            <b className={styles.title}>Mission and Vision</b>
            <div className={styles.description}>
              <QuoteOpenIcon />
              &nbsp;&nbsp;NOTT’s mission is to empower individuals and
              communities to take control of their health and wellness through
              innovative technology. Our vision is to create a world where
              health and wellness are accessible to all, driven by the
              principles of decentralization, empowerment, and
              community.&nbsp;&nbsp;
              <QuoteCloseIcon />
            </div>
          </div>

          <div className={styles.imageTwoContainer}>
            <img
              className={styles.imageTwo}
              src="/images/home-footer-2.webp"
              alt="footer2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
