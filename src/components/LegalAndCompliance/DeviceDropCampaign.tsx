import React from "react";
import style from "@/styles/PrivacyPolicy/privacy-policy.module.scss";
import LegalAndCompliance from "../Layout/LegalAndCompliance";

const DeviceDropCampaign = () => {
  return (
    <LegalAndCompliance>
      <div className={style.contentContainer}>
        <p
          id="collecting-information"
          className={style.deviceDropCampaignTitle}
        >{`Terms of Service (TOS)`}</p>
        <div className={style.contentMain}>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Introduction`}</p>
            <p className={style.description}>
              {`Welcome to the NOTT Device-Drop Campaign ("Campaign"). By participating in the Campaign and completing the electronic Know Your Customer (eKYC) process to receive a NOTT device, you agree to these Terms of Service (ToS). Please read them carefully.`}
            </p>
            <p
              id="collecting-information"
              className={style.title}
            >{`Eligibility`}</p>
            <ul>
              <li>{`1. Participants must be 18 years or older.`}</li>
              <li>{`2. Complete the eKYC process accurately and truthfully`}</li>
              <li>{`3. Agree to the data collection and usage policies as outlined in our Privacy Policy`}</li>
            </ul>
          </div>

          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Device Usage`}</p>
            <ul>
              <li>{`1. NOTT devices, including smart bands and smart watches, are provided as part of our initiative to enhance health and wellness through technology.`}</li>
              <li>{`2. Devices are for personal use only and should not be sold or distributed.`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Data Collection and Privacy`}</p>
            <ul>
              <li>{`1. Refer to our Privacy Policy for detailed information on the data collected through NOTT devices and its usage..`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`User Obligations`}</p>
            <ul>
              <li>{`1. Maintain the security and confidentiality of your device.`}</li>
              <li>{`2. Report any issues or defects with the device promptly to NOTT support..`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Termination`}</p>
            <ul>
              <li>{`1. NOTT reserves the right to terminate your participation in the Campaign for any breach of these ToS.`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.deviceDropCampaignTitle}
            >{`Privacy Policy`}</p>
            <p
              id="collecting-information"
              className={style.title}
            >{`Introduction`}</p>
            <p className={style.description}>
              {`NOTT is committed to protecting the privacy and security of the personal information of its users. This Privacy Policy outlines our practices regarding the collection, use, and sharing of your information through the NOTT devices received via our Device-Drop Campaign.`}
            </p>
            <p
              id="collecting-information"
              className={style.title}
            >{`Information We Collect`}</p>
            <ul>
              <li>{`1. Personal Identification Information: Collected through the eKYC process.`}</li>
              <li>{`2. Health and Wellness Data: Generated through your use of NOTT devices.`}</li>
              <li>{`3. Device and App Usage Data: Information on how you interact with the device and NOTT app.`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Use of Information`}</p>
            <ul>
              <li>{`1. To provide personalized health insights and recommendations.`}</li>
              <li>{`2. To improve our products and services.`}</li>
              <li>{`3. For research and development purposes, with anonymized data.`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Sharing of Information`}</p>
            <ul>
              <li>{`1. We do not sell your personal information.`}</li>
              <li>{`2. Information may be shared with third-party service providers bound by confidentiality agreements.`}</li>
              <li>{`3. Anonymized data may be used for research and shared with healthcare professionals.`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Data Security and Storage`}</p>
            <ul>
              <li>{`1. We employ state-of-the-art security measures to protect your information.`}</li>
              <li>{`2. Data is stored on secure servers with limited access.`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`User Rights`}</p>
            <ul>
              <li>{`1. Access to the personal information we hold about you.`}</li>
              <li>{`2. Request correction of inaccurate information.`}</li>
              <li>{`3. Opt-out of certain uses of your information.`}</li>
            </ul>
          </div>
          <div className={style.content}>
            <p
              id="collecting-information"
              className={style.title}
            >{`Changes to the Privacy Policy`}</p>
            <ul>
              <li>{`1. We reserve the right to modify this policy at any time. Changes will be posted on our website.`}</li>
            </ul>
            <p className={style.description}>
              {`By participating in the NOTT Device-Drop Campaign and completing the eKYC process, you consent to these terms and our handling of your information as described. For questions or concerns, please contact our support team.`}
            </p>
            <p className={style.description}>
              {`This ToS and Privacy Policy are designed to meet general legal requirements and protect both the users' rights and NOTT's interests. Depending on the jurisdiction, additional clauses or adjustments may be necessary to comply with local laws and regulations.`}
            </p>
          </div>
        </div>
      </div>
    </LegalAndCompliance>
  );
};

export default DeviceDropCampaign;
