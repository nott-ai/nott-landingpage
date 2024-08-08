import {
  MdiTargetIcon,
  NimbusEcosystemIcon,
  SolarHealthOutlineIcon,
  SystemSumIcon,
} from "@/assets/index";
import { orbitron } from "@/pages/_app";
import styles from "@/styles/Homepage/about-nott.module.scss";

const AboutNOTT = () => {
  const Overviews = [
    {
      icon: <SystemSumIcon />,
      iconUrl: "/images/system-sum.svg",
      title: "AI at the Core",
      description:
        "With AI at our core, NOTT delivers personalized health recommendations based on data analysis, guiding you towards optimal well-being.",
    },
    {
      icon: <SolarHealthOutlineIcon />,
      iconUrl: "/images/solar-health-outline.svg",
      title: "Decentralized Wellness",
      description:
        "As a DePIN platform, NOTT ensures the security and privacy of your health data, putting you in control of your information.",
    },
    {
      icon: <NimbusEcosystemIcon />,
      iconUrl: "/images/nimbus-ecosystem.svg",
      title: "Comprehensive Wellness Ecosystem",
      description:
        "From sleep enhancement to daily health tracking, NOTT provides a holistic wellness platform accessible to everyone.",
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
          loading="lazy"
          alt="banner-desktop"
        />
        <img
          className={styles.bannerMobile}
          src="/images/about-nott-bg-banner-mobile.png"
          loading="lazy"
          alt="banner-mobile"
        />
        <div className={styles.character}>
          <div className={styles.robo}>
            <img src="/images/robo.png" alt="robo" loading="lazy" />
          </div>
          <div className={styles.message}>
            <img src="/images/message.png" alt="message" loading="lazy" />
            <div className={styles.messageContent}>
              <h1 className={styles.title}>Hi there! 👏</h1>
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
            <div className={`${styles.overview} ${orbitron.className}`}>
              Overview of NOTT
              <br /> as an AI-powered Wellness DePIN platform
            </div>
            {/* <div className={styles.description}>
              Join us in redefining wellness with technology, where your health
              journey is personalized, secure, and forward-thinking.
            </div> */}
          </div>
          <div className={styles.content}>
            {Overviews.map((item) => (
              <div className={styles.overviewItem} key={item.title}>
                <div className={styles.leftBlock}>{item.icon}</div>
                <div className={styles.iconMobile}>
                  <img src={item.iconUrl} alt="icon" loading="lazy" />
                </div>
                <div className={styles.rightBlock}>
                  <div className={`${styles.title} ${orbitron.className}`}>
                    {item.title}
                  </div>
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
