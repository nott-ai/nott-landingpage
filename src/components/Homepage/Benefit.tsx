import React from 'react'
import styles from "@/styles/Layout/benefit.module.scss"

const Benefit = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.titleBlock}>
            asdasd
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <img src='/images/banner-benefit1.svg' alt='' />
          <div className={styles.benefitContent}>
            <div className={styles.title}>
              User benefit
            </div>
            <div className={styles.mainTitle}>
              Empowering User-Controlled
              Data with NOTT
            </div>
            <div className={styles.description}>
              Discover the ongoing revolution in health tracking through NOTT's Device Drop Campaigns. These periodic initiatives are our commitment to making advanced health monitoring accessible to all.
            </div>
            <div className={styles.description}>
              Anonymous Data Sharing Rewards: Users can opt to anonymously share their health data, contributing to community health advancements and receiving rewards in return.            </div>
            <div className={styles.description}>
              Contributing to Research: By sharing anonymized data, users can directly contribute to health research, aiding in the development of better health and wellness insights and solutions.            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Benefit