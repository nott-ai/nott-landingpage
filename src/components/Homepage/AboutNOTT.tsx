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
      icon: <SolarHealthOutlineIcon style={{ width: '116px', height: '116px' }} />,
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
          src="/images/about-nott-bg-banner.png"
        />
        <img
          className={styles.bannerMobile}
          src="/images/about-nott-bg-banner-mobile.png"
        />
        <div className={styles.character}>
          <div className={styles.robo}>
            <img src="/images/robo.png" alt="robo" loading="lazy" />
          </div>
          <div className={styles.message}>
            <img src="/images/message.png" alt="message" loading="lazy" />
            <div className={styles.messageContent}>
              <div className={styles.title}>Hi there! 👏</div>
              <div className={styles.content}>
                Welcome to NOTT, an innovative platform at the forefront of
                digital wellness. Powered by AI and grounded in Decentralized
                Physical Infrastructure Network (DePIN) principles, NOTT is
                revolutionizing how we approach health and wellness.
              </div>
            </div>
          </div>
        </div>
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
                  <img src={item.iconUrl} alt="icon" loading="lazy" />
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
