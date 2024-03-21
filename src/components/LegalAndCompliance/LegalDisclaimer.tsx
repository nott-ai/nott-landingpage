import React from "react";
import styles from "@/styles/Layout/policy.module.scss";
import LegalAndCompliance from "../Layout/LegalAndCompliance";

const LegalDisclaimer = () => {
  return (
    <LegalAndCompliance>
      <div className={styles.rightContent}>
        <div style={{ marginBottom: "16px" }} className={styles.bannerImage}>
          <div>
            <p className={styles.mainTittle}>LEGAL DISCLAIMER</p>
            <div className={styles.content}>
              <p className={styles.smDesc}>
                The information contained in this site is for general guidance
                on matters of interest only. The application and impact of laws
                can vary widely based on the specific facts involved. Given the
                changing nature of laws, rules and regulations, and the inherent
                hazards of electronic communication, there may be delays,
                omissions or inaccuracies in information contained in this site.
                Accordingly, the information on this site is provided with the
                understanding about the platform and products.NOTT physical
                wellness products are wellness devices and not a medical device.
                It is intended for aiding health improvement through
                personalized health tracking content.
              </p>
            </div>
          </div>
          <img
            className={styles.imgPolicy}
            src="/images/banner-policy1.png"
            alt="hero"
          />
        </div>
        <div className={styles.textContent}>
          <div className={styles.description}>
            If you have any medical concerns, please consult with your
            healthcare provider, including but not limited to, before using this
            device. NOTT devices are not intended to serve as a replacement for
            professional health care, diagnosis, treatment, or advice. NOTT
            company is not liable for any health issues that may arise as a
            result of the recommendations, activities, or other information or
            events you learn or experience as a result of using NOTT devices.
            You should read all product packaging and instructions carefully
            before purchasing or intending to acquire any of the products or
            services recommended on this website or application. YOU ACKNOWLEDGE
            AND AGREE THAT YOU ARE USING NOTT DEVICES AT YOUR OWN RISK. You and
            any of the physicians or health professionals linked with this
            website, application, or your use of any product or service from
            this website or application. Furthermore, neither this information
            nor any assertions on this website or application are meant to
            diagnose, treat, or cure any condition.{" "}
          </div>

          <div className={styles.description}>
            NOTT company DOES NOT OFFER ANYTHING that can be used to diagnose,
            treat, or prevent any medical, mental, or physical ailment. All of
            the information provided here is for information and educational
            purposes only, and it should not be construed as a personal medical
            device. As a result, you should not act entirely on the basis of the
            contents of this information. Instead, users should seek advice from
            qualified health professionals on any issues concerning their health
            and well-being. These items are not intended for symptom management
            or treatment, and they are not intended to be used in place of any
            form of therapy or treatment for any symptoms or disorders.{" "}
          </div>

          <div className={styles.description}>
            Certain links in this site connect to other websites maintained by
            third parties over whom NOTT has no control. NOTT makes no
            representations as to the accuracy or any other aspect of
            information contained in other websites.{" "}
          </div>
        </div>
      </div>
    </LegalAndCompliance>
  );
};

export default LegalDisclaimer;
