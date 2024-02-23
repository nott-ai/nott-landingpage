import style from "@/styles/Homepage/feature-benefit.module.scss";
import { ReactElement, useEffect, useState } from "react";
import useDeviceDetect from "../common/DeviceDetect";

interface IFeatureBenefit {
  title: string;
  description: string;
  icon: ReactElement;
  backgroundColor?: string;
  titleColor?: string;
}

interface IDescription {
  type: string;
  title: string;
  items: string[];
}

const descriptions: IDescription[] = [
  {
    type: "User Benefits",
    title: "Empowering User-Controlled Data with NOTT",
    items: [
      "Discover the ongoing revolution in health tracking through NOTT's Device Drop Campaigns. These periodic initiatives are our commitment to making advanced health monitoring accessible to all.",
      "Anonymous Data Sharing Rewards: Users can opt to anonymously share their health data, contributing to community health advancements and receiving rewards in return.",
      "AI-powered wellness DePIN platform",
      "Contributing to Research: By sharing anonymized data, users can directly contribute to health research, aiding in the development of better health and wellness insights and solutions.",
    ],
  },
  {
    type: "User Benefits",
    title: "Creating Healthy Habits with NOTT",
    items: [
      "Habit Tracking: Monitor and manage daily activities to foster healthier routines with NOTT's habit tracking feature.",
      "AI-Powered Recommendations: Receive personalized suggestions for habit improvement based on your activity and health data.",
      "Community Challenges: Engage with the NOTT community in health challenges to build and sustain beneficial habits collaboratively.",
    ],
  },
];
const FeatureBenefit = () => {
  const { isMobile, isDesktop } = useDeviceDetect();
  const [visibleItems, setVisibleItems] = useState(1);
  const [descriptionShowing, setDescriptionShowing] = useState<IDescription>(
    descriptions[0]
  );
  const width = isMobile ? 44 : 80;
  const height = isMobile ? 44 : 80;
  const featureBenefitData: IFeatureBenefit[] = [
    {
      title: "Features",
      description: "HealthFi Protocol, AI Integration, and DePIN Technology",
      icon: (
        <img
          width={width}
          height={height}
          src="/images/feature.svg"
          alt="feature"
        />
      ),
      backgroundColor: isMobile ? "transparent" : "#14253F",
      titleColor: "#83B4FF",
    },
    {
      title: "User benefits",
      description: "Personalized health insights and token rewards",
      icon: (
        <img
          width={width}
          height={height}
          src="/images/user-benefit.svg"
          alt="user-benefit"
        />
      ),
    },
    {
      title: "Merchant benefits",
      description: "Market access and increased sales opportunities",
      icon: (
        <img
          width={width}
          height={height}
          src="/images/merchant-benefits.svg"
          alt="merchant-benefits"
        />
      ),
    },
  ];

  const handleSeeMore = (length: number) => {
    setVisibleItems(length); // Show all items
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.blockTop}>
          <div className={style.header}>
            <p className={style.title}>Features & Benefits</p>
            <p className={style.description}>
              AI-Powered Wellness DePIN Platform Shaping the Future of HealthFi
            </p>
          </div>

          <div className={style.featureBenefitContainer}>
            {featureBenefitData.map((data, index) => (
              <div
                key={index}
                className={style.featureBenefit}
                style={{ backgroundColor: data.backgroundColor }}
              >
                <div className={style.iconContainer}>{data.icon}</div>
                <p className={style.title} style={{ color: data.titleColor }}>
                  {data.title}
                </p>
                <p className={style.description}>{data.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.blockBottom}>
          <div className={style.imageContainer}>
            <img
              className={style.image}
              src={"/images/feature-benefit.webp"}
              alt="feature-benefit"
            />
          </div>
          <div className={style.descriptionContainer}>
            <p className={style.type}>{descriptionShowing.type}</p>
            <p className={style.title}>{descriptionShowing.title}</p>

            <ul className={style.description}>
              {descriptionShowing.items
                .slice(0, visibleItems)
                .map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}{" "}
            </ul>
            {!isDesktop && descriptionShowing.items.length > visibleItems && (
              <label
                htmlFor="toggle"
                className={style.toggleLabel}
                onClick={() => handleSeeMore(descriptionShowing.items.length)}
              >
                {"See More >"}
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBenefit;
