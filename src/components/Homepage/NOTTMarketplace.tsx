import styles from "@/styles/Homepage/nott-marketplace.module.scss";
import { ArrowRightIcon } from "../../assets";

const NOTTMarketplace = () => {
  const advantages = [
    {
      title: "Benefits for users and merchants",
      icon: "/images/marketplace-card-1.svg",
    },
    {
      title: "Open marketplace concept",
      icon: "/images/marketplace-card-2.svg",
    },
    {
      title: "Featured products and services",
      icon: "/images/marketplace-card-3.svg",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          NOTT <span>Marketplace</span>
        </div>
        <div className={styles.description}>
          {`Explore NOTT's marketplace, connecting users to a wide range of health
          and wellness offerings. Join a dynamic community of health enthusiasts
          and businesses, enhancing your well-being journey with ease`}
        </div>
      </div>
      <div className={styles.features}>
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`card-${index}`]}`}
          >
            <img src={advantage.icon} alt="marketplace-card" />

            <div className={styles.info}>
              <div className={styles.title}>{advantage.title}</div>
              <div className={styles.explore}>
                Explore <ArrowRightIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NOTTMarketplace;
