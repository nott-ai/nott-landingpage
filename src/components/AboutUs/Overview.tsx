import styles from "@/styles/AboutUs/overview.module.scss";
import {
  FeaturesIcon,
  MdiTargetIcon,
  MerchantBenefitsIcon,
  NimbusEcosystemIcon,
  SolarHealthOutlineIcon,
  SystemSumIcon,
  UserBenefitsIcon,
} from "@/assets/index";
import { createMarkup } from "@/utils/index";
const Overviews = [
  {
    icon: <SystemSumIcon />,
    title: "AI at the Core",
    description:
      "Utilizing AI, NOTT transforms health data into personalized insights and actionable recommendations, guiding users on their wellness path",
  },
  {
    icon: <SolarHealthOutlineIcon />,
    title: "Decentralized <br/> Wellness",
    description:
      "Leveraging DePIN technology, NOTT guarantees secure and private health data handling, giving users full control over their health information",
  },
  {
    icon: <NimbusEcosystemIcon />,
    title: "Comprehensive<br/> Wellness Ecosystem",
    description:
      "NOTT unifies sleep, health monitoring, and wellness management into a single, accessible platform, offering holistic health solutions",
  },
  {
    icon: <MdiTargetIcon />,
    title: "Mission <br/>Statement",
    description:
      "Fostering individual and community health enhancement through innovative technology, driving forward a new era of wellness",
  },
];

const FeaturesAndBenefits = [
  {
    backgroundColor: "#5685FF",
    icon: <FeaturesIcon />,
    title: "Features",
    description: "HealthFi Protocol, AI Integration, and DePIN Technology",
  },
  {
    backgroundColor: "#459DE6",
    icon: <UserBenefitsIcon />,
    title: "User benefits",
    description: "Personalized health insights and token rewards",
  },
  {
    backgroundColor: "#41B2D6",
    icon: <MerchantBenefitsIcon />,
    title: "Merchant benefits",
    description: "Market access and increased sales opportunities",
  },
];
const Overview = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Overview of NOTT as an AI-powered
        <br /> Wellness DePIN platform
      </p>
      <p className={styles.description}>
        Join us in redefining wellness with technology, where your health
        journey is personalized, secure, and forward-thinking.
      </p>
      <div className={styles.aboutNOTT}>
        {Overviews.map((item, index) => (
          <div key={index} className={styles.card}>
            {item.icon}
            <div
              className={styles.title}
              dangerouslySetInnerHTML={createMarkup(item.title)}
            />
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
      <p className={styles.titleFeatureAndBenefit}>Features & Benefits</p>
      <p className={styles.descriptionFeatureAndBenefit}>
        Explore how the AI Wellness Depin Platform is revolutionizing HealthFi,
        paving the way for innovative advancements in personalized health and
        wellness solutions.
      </p>
      <div className={styles.benefits}>
        {FeaturesAndBenefits.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.backgroundColor }}
            className={styles.card}
          >
            {item.icon}
            <div className={styles.info}>
              <p className={styles.benefitTitle}>{item.title}</p>
              <p className={styles.benefitDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
