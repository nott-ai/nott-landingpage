import { ArrowDirectionRight } from "@/assets/index";
import styles from "@/styles/ProductsAndServices/digital-marketplace.module.scss";
import useDeviceDetect from "../common/DeviceDetect";
const advantages = [
  {
    title: "Benefits for users and merchants",
    icon: "/images/marketplace-card-1.png",
  },
  {
    title: "Open marketplace concept",
    icon: "/images/marketplace-card-2.png",
  },
  {
    title: "Featured products and services",
    icon: "/images/marketplace-card-3.png",
  },
];
const DigitalMarketplace = () => {
  const { isDesktop } = useDeviceDetect();
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Digital Marketplace</p>
      <p className={styles.description}>
        This digital space allows users to purchase wellness products and
        services, and for merchants to reach a wider audience.{" "}
        {isDesktop && <br />} It's a place where the health and wellness
        community can come together to share, grow, and benefit from the
        collective contributions of its members.
      </p>
      <div className={styles.features}>
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`card-${index}`]}`}
          >
            <img
              className={styles.icon}
              src={advantage.icon}
              alt="marketplace-card"
              loading="lazy"
            />

            <div className={styles.info}>
              <div className={`${styles.title}`}>
                <div className={styles.contentTitle}>{advantage.title}</div>
              </div>
              <div className={styles.explore}>
                Explore <ArrowDirectionRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketplace;
