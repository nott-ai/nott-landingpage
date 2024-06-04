import styles from "@/styles/SupportV2/supportV2.module.scss";
import LayoutSupport from "./LayoutSupport";
import React from "react";
import Hero from "./Hero";

const SupportV2Page: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <div className={styles.container}>
        <div className={styles.titleContent}>User Manual</div>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.title}>1. System Requirements</div>
            <div className={styles.description}>
              To ensure the optimal performance and security of the NOTT
              application, it is necessary to use devices operating on
              compatible system software.
              <ul>
                <li>
                  For users with iOS devices, the application requires iOS 16.5
                  or later.
                </li>
                <li>
                  For users with Android devices, the application requires
                  Android 11 or later.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.sectionStep}>
            <div className={styles.title}>
              2. Simply become a Notter with 3 steps
            </div>
            <div className={styles.rowSteps}>
              <div className={styles.column}>
                <div>
                  Steps 1: Create Node by Connecting with Phantom Wallet
                </div>
                <div>
                  <img src="/images/supportV2/steps1.png" alt="steps 1" />
                </div>
              </div>
              <div className={styles.column}>
                <div>Steps 2: Verify Passkey to authenticate your identity</div>
                <div>
                  <img src="/images/supportV2/steps2.png" alt="steps 1" />
                </div>
              </div>
              <div className={styles.column}>
                <div>
                  Steps 3: Connect with apps and devices to get rewards and
                  unlock full utilities
                </div>
                <div>
                  <img src="/images/supportV2/steps3.png" alt="steps 1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportV2Page;
