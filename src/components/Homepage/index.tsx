import { ArrowRightIcon, QuoteCloseIcon, QuoteOpenIcon } from "@/assets";
import NewsCard, { INewsCard } from "@/components/Homepage/NewsCard";
import ProductAndInnovationCard, { IProductAndInnovationCard } from "@/components/Homepage/ProductAndInnovationCard";
import styles from "@/styles/Homepage/home.module.scss";
import { useEffect, useState } from "react";
import { remoteConfig } from "@/pages/_app";
import { fetchAndActivate, getString } from "@firebase/remote-config";
import Link from "next/link";
import { INFO } from "@/constants/metas";
import { REMOTE_CONFIG_KEYS } from "@/constants/firebase-config";
import useDeviceDetect from "@/components/common/DeviceDetect";
import { SOCIAL_LINK } from "@/constants/social";
const productsAndInnovations: IProductAndInnovationCard[] = [
  {
    id: "smart_band",
    title: "Smartband",
    description:
      "This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.",
    images: ["/images/product-service/product-lineup/sb3.webp"],
  },

  {
    id: "smart_watch",
    title: "Smartwatch",
    description:
      "A fusion of elegance and functionality, this smartwatch tracks your health, boosts productivity, and integrates seamlessly with your tech ecosystem.",
    images: ["/images/product-service/product-lineup/Watch_1.webp"],
  },
  {
    id: "smart_scale",
    title: "Smartscale",
    description:
      "Advanced technology meets health monitoring; get detailed body composition, BMI, and trend analysis, all synced effortlessly with your health apps.",
    images: ["/images/product-service/product-lineup/Smartscale_3.webp"],
  },
  {
    id: "smart_pillow",
    title: "Smartpillow",
    description:
      "Experience unparalleled comfort and sleep analysis with our smart pillow, featuring non-contact monitoring and AI-powered insights for a better night's rest",
    images: ["/images/smartpillow.webp"],
  },
];

const HomePage = () => {
  const { isDesktop } = useDeviceDetect();
  const [news, setNews] = useState<INewsCard[]>([]);
  const [isHiddenDownloadApp, setIsHiddenDownloadApp] = useState(false);

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
    const timeOut = setTimeout(() => {
      setIsHiddenDownloadApp(true);
    }, 10000);

    return () => clearTimeout(timeOut);
  }, []);

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
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bannerContainer}>
          <div className={styles.banner}>
            <div className={styles.content}>
              <div className={styles.title}>Welcome to NOTT!</div>
              <h1 className={styles.description}>
                An innovative platform at the forefront of digital wellness - powered by AI and grounded in
                Decentralized Physical Infrastructure Network (DePIN) principles.
              </h1>
            </div>
          </div>
        </div>

        <div className={styles.latestNews}>
          <div className={styles.titleBlock}>
            <p className={styles.left}>Latest News</p>

            <Link className={styles.right} href={INFO.BLOG} target="_blank" rel="noopener noreferrer">
              {"View all"} <ArrowRightIcon />
            </Link>
          </div>
          <div className={styles.news}>
            {news.map((el, index) => (
              <NewsCard key={index} {...el} />
            ))}
          </div>
        </div>

        <div className={styles.featuredProductsAndInnovations}>
          <h1 className={styles.title}>Featured Products And Innovations</h1>
          <div className={styles.content}>
            {productsAndInnovations.map((product: IProductAndInnovationCard, index: number) => (
              <ProductAndInnovationCard key={index} {...product} />
            ))}
          </div>
        </div>

        {isDesktop ? (
          <div className={styles.footer}>
            <div className={styles.content}>
              <div className={styles.imageOneContainer}>
                <img className={styles.imageOne} src="/images/home-footer-1.webp" alt="footer1" loading="lazy" />
              </div>
              <div className={styles.imageTwoContainer}>
                <img className={styles.imageTwo} src="/images/home-footer-2.webp" alt="footer2" loading="lazy" />
              </div>

              <div className={styles.textBlock}>
                <h1 className={styles.title}>Mission and Vision</h1>
                <div className={styles.description}>
                  <QuoteOpenIcon />
                  &nbsp;&nbsp;NOTT’s mission is to empower individuals and communities to take control of their health
                  and wellness through innovative technology. Our vision is to create a world where health and wellness
                  are accessible to all, driven by the principles of decentralization, empowerment, and
                  community.&nbsp;&nbsp;
                  <QuoteCloseIcon />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.footer}>
            <div className={styles.textBlock}>
              <h1 className={styles.title}>Mission and Vision</h1>
              <div className={styles.description}>
                <QuoteOpenIcon />
                &nbsp;&nbsp;NOTT’s mission is to empower individuals and communities to take control of their health and
                wellness through innovative technology. Our vision is to create a world where health and wellness are
                accessible to all, driven by the principles of decentralization, empowerment, and community.&nbsp;&nbsp;
                <QuoteCloseIcon />
              </div>
            </div>

            <div className={styles.imageTwoContainer}>
              <img className={styles.imageTwo} src="/images/home-footer-2.webp" alt="footer2" loading="lazy" />
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles.linkSocialWrapper} ${isHiddenDownloadApp ? styles.hiddenButton : ""}`}
        onMouseOver={() => setIsHiddenDownloadApp(false)}
        onMouseOut={() => {
          setTimeout(() => {
            setIsHiddenDownloadApp(true);
          }, 10000);
        }}
      >
        <a href={SOCIAL_LINK.GOOGLE_PLAY} target="_blank">
          <img className={styles.logo} src="/images/googleplay.webp" alt="googleplay" />
        </a>
        <a href={SOCIAL_LINK.APP_STORE} target="_blank">
          <img className={styles.logo} src="/images/appstore.webp" alt="appstore" />
        </a>
      </div>
    </>
  );
};

export default HomePage;
