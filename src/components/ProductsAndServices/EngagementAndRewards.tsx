import styles from "@/styles/ProductsAndServices/engagement-and-rewards.module.scss";

const EngagementAndRewards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBlock}>
        <p className={styles.title}>User Engagement and Rewards</p>
        <p className={styles.description}>
          NOTT's Value-Based User Rewards system is the pulse of our proactive
          health mission. It is a finely tuned mechanism designed to recognize
          and incentivize meaningful contributions within the NOTT ecosystem.
          Let's delve into what makes this system the heart of our user
          engagement strategy
        </p>
      </div>
      <div className={styles.rightBlock}>
        <img src="/images/rewards.png" alt="rewards" />
      </div>
    </div>
  );
};

export default EngagementAndRewards;