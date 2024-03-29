import React, { useState, useCallback } from "react";
import styles from "@/styles/AboutUs/campaign.module.scss";
import { regularCampaigns } from "@/constants/faqs";
import PrimaryButton from "../common/PrimaryButton";
import Collapse from "../common/Collapse";
import useDeviceDetect from "../common/DeviceDetect";
import { ROUTERS } from "@/constants/routes";

const Campaign = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isDesktop } = useDeviceDetect();
  const toggleIsExpanded = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div
            className={`${styles.title}`}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            NOTT&#39;s Device Drop Campaigns
          </div>
          <div
            className={styles.description}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Discover the ongoing revolution in health tracking through
            NOTT&#39;s Device Drop Campaigns. {isDesktop && <br />}These
            periodic initiatives are our commitment to make advanced health
            monitoring accessible to all
          </div>
          <a style={{ textDecoration: "none" }} href={ROUTERS.KYC}>
            <PrimaryButton
              className={styles.joinCampaign}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Join Campaigns
            </PrimaryButton>
          </a>
          <div
            className={styles.contentSecond}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {regularCampaigns.map((faq, index) => (
              <div key={index} style={{ background: "#F2F2F2" }}>
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
                      loading="lazy"
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
                    loading="lazy"
                  />
                </div>
                <Collapse isActive={openIndex === index}>
                  <div className={styles.answers}>{faq.subtitle}</div>
                </Collapse>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.rightBlock}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src="/images/campaign-content-image.png" alt="campaign" />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
