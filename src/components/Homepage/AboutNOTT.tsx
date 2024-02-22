import {
  MdiTargetIcon,
  NimbusEcosystemIcon,
  SolarHealthOutlineIcon,
  SystemSumIcon,
} from "@/assets/index";
import styles from "@/styles/Homepage/about-nott.module.scss";

const AboutNOTT = () => {
  const Overviews = [
    {
      icon: <SystemSumIcon />,
      iconUrl: "/images/system-sum.svg",
      title: "AI at the Core",
      description:
        "Harnessing the power of AI, NOTT offers personalized health insights and recommendations, transforming data into actionable wisdom for your wellness journey",
    },
    {
      icon: <SolarHealthOutlineIcon />,
      iconUrl: "/images/solar-health-outline.svg",
      title: "Decentralized Wellness",
      description:
        "As a DePIN platform, NOTT ensures secure, private, and efficient health data management, empowering users with control over their personal health information",
    },
    {
      icon: <NimbusEcosystemIcon />,
      iconUrl: "/images/nimbus-ecosystem.svg",
      title: "Comprehensive Wellness Ecosystem",
      description:
        "From sleep improvement to daily health monitoring, NOTT integrates various aspects of wellness into one cohesive platform, accessible to all",
    },
    {
      icon: <MdiTargetIcon />,
      iconUrl: "/images/mdi-target.svg",
      title: "Mission Statement",
      description:
        "Empowering personal health and community wellness through technology",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <img
          className={styles.bannerDesktop}
          src="/images/about-nott-banner.png"
        />
        <img
          className={styles.bannerMobile}
          src="/images/about-nott-banner-mobile.png"
        />
      </div>
      <div className={styles.aboutNott}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.overview}>
              Overview of NOTT
              <br /> as an AI-powered Wellness DePIN platform
            </div>
            <div className={styles.description}>
              Join us in redefining wellness with technology, where your health
              journey <br /> is personalized, secure, and forward-thinking.
            </div>
          </div>
          <div className={styles.content}>
            {Overviews.map((item) => (
              <div className={styles.overviewItem} key={item.title}>
                <div className={styles.leftBlock}>{item.icon}</div>
                <div className={styles.iconMobile}>
                  <img src={item.iconUrl} />
                </div>
                <div className={styles.rightBlock}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.description}>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNOTT;
