import React, { useState, useCallback } from "react";
import styles from "@/styles/Layout/campaign.module.scss";
import { regularCampaigns } from "@/constants/faqs";
import PrimaryButton from "../common/PrimaryButton";
import Collapse from "../common/Collapse";

const Campaign = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIsExpanded = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentQuestion}>
          <div className={styles.mobileTitle}>
            NOTT’s <span className={styles.highlightText}>Device Drop</span>{" "}
            Campaigns
          </div>
          {/* <img
            className={styles.cubeImage}
            src="../images/cube.svg"
            alt="cube"
            loading="lazy"
          /> */}
          <div className={styles.mobileDescription}>
            Discover the ongoing revolution in health tracking through
            NOTT&#39;s Device Drop Campaigns. These periodic initiatives are our
            commitment to making advanced health monitoring accessible to all
          </div>
          <PrimaryButton className={styles.mobileJoinCampaign}>
            Join Campaigns
          </PrimaryButton>
        </div>
        <div className={styles.leftBlock}>
          <img src="../images/logo-campaign.png" alt="graphic" />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            NOTT’s <span className={styles.highlightText}>Device Drop</span>{" "}
            Campaigns
          </div>
          <div className={styles.description}>
            Discover the ongoing revolution in health tracking through
            NOTT&#39;s Device Drop Campaigns. These periodic initiatives are our
            commitment to making advanced health monitoring accessible to all
          </div>
          <PrimaryButton className={styles.joinCampaign}>
            Join Campaigns
          </PrimaryButton>
          <div className={styles.contentSecond}>
            {regularCampaigns.map((faq, index) => (
              <div
                key={index}
                style={{ background: " #f0f5ff", borderRadius: "24px" }}
              >
                <div
                  className={
                    openIndex === index
                      ? `${styles.question} ${styles.activeQuestion}`
                      : styles.question
                  }
                  onClick={() => toggleIsExpanded(index)}
                >
                  <div className={styles.leftQuestion}>
                    <img
                      className={styles.leftImage}
                      src={faq.image}
                      alt="graphic"
                    />
                    {faq.title}
                  </div>
                  <img
                    src={
                      openIndex === index
                        ? "../images/minus.svg"
                        : "../images/plus.svg"
                    }
                    alt="Toggle Icon"
                  />
                </div>
                <Collapse isActive={openIndex === index}>
                  <div className={styles.answers}>{faq.subtitle}</div>
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
