import React from "react";
import styles from "@/styles/Ekyc/ekyc.module.scss";
import { CheckboxPersonIcon, ShiftsTeamIcon } from "@/assets";
import { useRouter } from "next/router";
import { ROUTERS } from "@/constants/routes";

const Ekyc = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>
          Join Our <br /> HealthTech Revolution: <br />
          <span className={styles.highlight}> Exclusive Airdrop Inside</span>
        </p>
        <p className={styles.description}>
          Explore our exclusive HealthTech Airdrop with over{" "}
          <span className={styles.number}>10,000</span> devices to revolutionize
          your wellness journey with the latest health innovations. Don't miss
          out!
        </p>
        <button
          className={styles.applyEkyc}
          onClick={() => router.push(ROUTERS.APPLY_KYC)}
        >
          Apply eKYC
        </button>
        <div className={styles.inputWrapper}>
          <input placeholder="Enter your email" />
          <div
            className={styles.track}
            onClick={() => router.push(ROUTERS.KYC_TRACKING)}
          >
            Track
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.rate}>
            <div>
              <CheckboxPersonIcon />
            </div>
            <div>
              <p className={styles.label}>KYC approval rate</p>
              <p className={styles.value}>45/150</p>
            </div>
          </div>
          <div className={styles.queue}>
            <div>
              <ShiftsTeamIcon />
            </div>
            <div>
              <p className={styles.label}>You are in queue</p>
              <p className={styles.value}>45 people</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>© 2018-2024 NOTT Foundation. All rights reserved</div>
      </div>
    </div>
  );
};

export default Ekyc;
