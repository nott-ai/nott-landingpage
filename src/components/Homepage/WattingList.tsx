import React from "react";
import styles from "@/styles/Layout/waiting.module.scss";
import PrimaryButton from "../common/PrimaryButton";
const WaitingList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div className={styles.title}>Joining the waiting list now</div>
          <div className={styles.contentList}>
            Be the first to receive the latest updates on NOTT&#39;s innovative products and offerings
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.contactForm}>
            <input type="text" placeholder="Full name"></input>
            <input type="text" placeholder="Your email address"></input>
            <input
              style={{ height: "220px" }}
              type="text"
              placeholder="How can we help ?"
            ></input>
            <PrimaryButton className={styles.action}>Submit Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
