import React from "react";
import styles from "@/styles/Layout/policy.module.scss";
import { INFO } from "@/constants/metas";
import style from "@/styles/TermOfService/term-of-service.module.scss";
import LegalAndCompliance from "../Layout/LegalAndCompliance";

const TermService = () => {
  return (
    <LegalAndCompliance>
      <div className={styles.rightContent} style={{ paddingBottom: "30px" }}>
        <div className={styles.bannerImage}>
          <div>
            <p className={styles.mainTittle}> TERMS OF SERVICE</p>

            <div
              style={{
                marginRight: "20px",
                fontSize: "14px",
                letterSpacing: "0.01em",
                lineHeight: "24px",
                color: "#54545c",
              }}
              className={styles.content}
            >
              <p
                style={{
                  margin: "11px 0px",
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  fontWeight: 400,
                }}
                className={styles.smDesc}
              >
                NOTT maintains this website, the NOTT application and other
                related sites or applications for the use of its customers,
                merchants, and other website users (“Users”) upon agreement to
                the following terms.
              </p>
              <p
                className={style.descWithoutMargin}
              >
                <span>
                  Please read the following terms and conditions carefully
                  before using the
                </span>
                &nbsp;
                <a href={INFO.WEBSITE} target="_blank" rel="noreferrer">
                  {INFO.WEBSITE}
                </a>
                &nbsp;
                <span>
                  website and the NOTT app. Use of this website or the NOTT app
                  indicates acceptance of these “Terms and Conditions” and forms
                  a binding agreement between you and NOTT Foundation. If you do
                  not agree to the following terms and conditions, do not use
                  this website or the NOTT app.
                </span>
              </p>
            </div>
          </div>
          <img
            className={styles.imgPolicy}
            src="/images/banner-policy3.png"
            alt="hero"
          />
        </div>
        <div className={styles.textContent}>
          <div className={style.container}>
            <div className={style.contentContainer}>
              <div className={style.content}>
                <p className={style.italicDesc}>NOTT products and services</p>
                <p className={style.descWithoutMargin}>
                  NOTT is an innovative health and wellness platform leveraging
                  Decentralized Physical Infrastructure Networks (DePIN),
                  Artificial Intelligence (AI), and Health Finance (HealthFi)
                  technologies and methodologies. NOTT&apos;s ecosystem is
                  designed to be inclusive, catering to a diverse range of
                  users, including everyday wellness enthusiasts, health
                  professionals, NOTT device manufacturers, and other
                  devices/service providers (merchants).
                </p>
                <p className={style.descWithoutMargin}>
                  NOTT offers everything from smart wearables that fit easily
                  into daily routines to innovative sleep aids like smart
                  pillows and capsule beds, showing NOTT&apos;s dedication to
                  enhancing health through technology.
                </p>
                <p className={style.descWithoutMargin}>
                  NOTT also provides impressive services, such as a detailed
                  mobile app for managing health data and personalized health
                  tips and advice powered by AI. These services meet the needs
                  of all types of health enthusiasts, making sure everyone can
                  find something useful within the NOTT ecosystem. The NOTT app
                  serves as the companion to the NOTT devices.
                </p>
                <p className={style.italicDesc}>Disclaimer</p>
                <p className={style.descWithoutMargin}>
                  NOTT physical wellness products are wellness devices and not a
                  medical device. It is intended for aiding health improvement
                  through personalized health tracking content. If you have any
                  medical concerns, please consult with your healthcare
                  provider, including but not limited to, before using this
                  device. NOTT devices are not intended to serve as a
                  replacement for professional health care, diagnosis,
                  treatment, or advice. NOTT Foundation is not liable for any
                  health issues that may arise as a result of the
                  recommendations, activities, or other information or events
                  you learn or experience as a result of using NOTT devices. You
                  should read all product packaging and instructions carefully
                  before purchasing or intending to acquire any of the products
                  or services recommended on this website or application. YOU
                  ACKNOWLEDGE AND AGREE THAT YOU ARE USING NOTT DEVICES AT YOUR
                  OWN RISK. You and any of the physicians or health
                  professionals linked with this website, application, or your
                  use of any product or service from this website or
                  application. Furthermore, neither this information nor any
                  assertions on this website or application are meant to
                  diagnose, treat, or cure any condition.
                </p>
                <p className={style.descWithoutMargin}>
                  NOTT Foundation DOES NOT OFFER ANYTHING that can be used to
                  diagnose, treat, or prevent any medical, mental, or physical
                  ailment. All of the information provided here is for
                  information and educational purposes only, and it should not
                  be construed as a personal medical device. As a result, you
                  should not act entirely on the basis of the contents of this
                  information. Instead, users should seek advice from qualified
                  health professionals on any issues concerning their health and
                  well-being. These items are not intended for symptom
                  management or treatment, and they are not intended to be used
                  in place of any form of therapy or treatment for any symptoms
                  or disorders.
                </p>
              </div>

              <div className={style.content}>
                <p className={style.header}>
                  THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS
                  WEBSITE OR NOTT’s MOBILE APPLICATION IS SOLELY AT YOUR OWN
                  RISK.
                </p>
              </div>

              <div className={style.content}>
                <p id="1" className={style.title}>
                  1. About Use of NOTT’s Site
                </p>

                <p className={style.description}>
                  <span>
                    1.1. These terms and conditions (these “Terms” or “Terms and
                    Conditions”) form an agreement between you, either as an
                    individual or as the representative of an entity (“user,”
                    “customer,” or “You”) and NOTT company. (“NOTT,” “us,” “we,”
                    or “our”). These Terms along with any documents expressly
                    incorporated herein by reference, dictate the conditions
                    under which you may access and utilize the NOTT website,
                  </span>
                  &nbsp;
                  <a href={INFO.WEBSITE} target="_blank" rel="noreferrer">
                    {INFO.WEBSITE}
                  </a>
                  <span>
                    , or any of our other web properties, including mobile
                    websites, applications, or digital platforms that link to or
                    refer to these Terms and Conditions (collectively, the
                    “Site”).
                  </span>
                </p>

                <p className={style.description}>
                  1.2. In the event of any conflict between these Terms and
                  Conditions and the conditions of any service contract between
                  you and NOTT, the terms of the service contract will prevail
                  concerning the specific services detailed therein. By engaging
                  with the Site, including but not limited to browsing the Site,
                  using our services, or providing information to NOTT, you
                  accept and are bound by these Terms and Conditions. If any
                  aspect of these Terms is not acceptable to you, please do not
                  use the Site, because you are not granted permission to access
                  or use the Site without accepting these Terms.
                </p>

                <p className={style.description}>
                  1.3. The Site is accessible to help users who wish to
                  participate in an Ecommerce platform facilitated by NOTT (the
                  “Platform”). By using the Ecommerce platform, you certify that
                  you are of legal age to form a binding contract with NOTT and
                  satisfy all eligibility requirements or have written consent
                  of a legal guardian. If these requirements are not met, you
                  are not permitted to access or use the Site.
                </p>

                <p className={style.description}>
                  1.4. Additionally, you acknowledge that certain privacy
                  practices are applicable to your use of the Site and consent
                  to such practices, including if you are younger than 16 or 13
                  years of age. Please stop and for more information, refer to
                  NOTT’s Privacy Policy here (“Privacy Policy”). It is crucial
                  for users to have adequate language proficiency in the
                  language used to present the Platform.
                </p>

                <p className={style.description}>
                  1.5. Both physical and digital products are available for
                  purchase on the Site (collectively, the “Products”), with
                  prices listed accordingly. Note that these prices exclude any
                  taxes or additional fees that may apply.
                </p>

                <p className={style.description}>
                  1.6. IMPORTANT NOTICE: SECTION OF THESE TERMS AND CONDITIONS
                  CONTAINS AN ARBITRATION PROVISION. BY ACCESSING OR USING THE
                  SITE OR PURCHASING THE PRODUCTS, YOU ACKNOWLEDGE AND AGREE TO
                  BE BOUND BY THESE TERMS AND CONDITIONS AND OUR PRIVACY POLICY,
                  FOUND ON OUR WEBSITE INCORPORATED HEREIN BY REFERENCE. If you
                  do not wish to accept these Terms and Conditions or the
                  Privacy Policy, you are not permitted to access or use the
                  Site.
                </p>
              </div>

              <div className={style.content}>
                <p id="2" className={style.title}>
                  2. Creation account in NOTT app
                </p>

                <p className={style.description}>
                  2.1. To create an account on our app, simply tap to create an
                  account. Upon doing so, you will receive a unique Passkey for
                  account access and a blockchain wallet will be automatically
                  created for your use. This streamlined process ensures your
                  account is secure and ready for immediate use, leveraging
                  advanced security measures and blockchain technology for a
                  seamless experience. Please consult our Privacy Policy and
                  Terms and Conditions for further details on data usage and
                  protection.
                </p>

                <p className={style.description}>
                  2.2. NOTT reserves the right to modify, amend, or update the
                  account creation process at its discretion. Users will be
                  notified of any significant changes that might affect their
                  ability to create or access their accounts.
                </p>
              </div>

              <div className={style.content}>
                <p id="3" className={style.title}>
                  3. Changes of NOTT’s Terms and Conditions
                </p>

                <p className={style.description}>
                  3.1. We may periodically update these Terms and Conditions to
                  reflect changes in our practices, services, or legal
                  requirements.
                </p>

                <p className={style.description}>
                  3.2. NOTT reserves the right to modify, discontinue, or
                  suspend the Site or any part of it, at any given time. When we
                  make material changes to these terms, we will notify you 30
                  days in advance, either through direct communication (such as
                  email) or by prominently displaying a notice on the Site’s
                  main page. The notice period will allow you ample time to
                  consider the changes and decide whether you wish to continue
                  using the Site under the updated terms. NOTT may also, under
                  certain circumstances, restrict your access or use of the
                  Site. While we strive to provide a continuous service, you
                  acknowledge that the Site is provided as-is, and you do not
                  possess any proprietary rights over it. In situations where
                  the Site is discontinued or if your ability to access the
                  Site, its Materials, or any content you have posted on it is
                  restricted or terminated, the Company will not be held liable.
                  However, in such scenarios, we will make reasonable efforts to
                  ensure you have access to your data and content for a limited
                  duration, to allow for transition or backup.
                </p>

                <p className={style.description}>
                  <span>
                    3.3. Your action is required when we update these Terms. If
                    you do not agree with the revised terms, you may choose to
                    discontinue your use of the Site by emailing us at
                  </span>
                  &nbsp;
                  <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>
                  &nbsp;
                  <span>
                    If we do not receive your explicit disagreement or
                    discontinuation within the notice period, it will be assumed
                    that you have accepted and agreed to the changes.
                  </span>
                </p>

                <p className={style.description}>
                  3.4. To ensure you stay informed and are always aware of any
                  modifications, we recommend bookmarking this page and
                  reviewing these Terms and Conditions periodically.
                </p>

                <p className={style.description}>
                  3.5. Any modifications we make to the dispute resolution
                  provisions detailed in the Governing Law and Jurisdiction
                  section will not apply to any disputes for which either party
                  has received actual notice of, on, or prior to the date the
                  change is made public on the Site. We commit to providing a
                  clear and reasonable notice period, in line with global
                  regulatory standards, before implementing any significant
                  alterations to these provisions, ensuring that users are given
                  ample time to review and decide on continued use of our
                  services under the updated terms.
                </p>
              </div>

              <div className={style.content}>
                <p id="4" className={style.title}>
                  4. Collecting information of website/app and other platforms
                  owned by NOTT
                </p>

                <p className={style.description}>
                  4.1. All data and information that we collect on the Site are
                  governed by our Privacy Policy, which is incorporated into
                  these Terms and Conditions by reference. Your use of the Site
                  constitutes your acknowledgement of, and consent to, our
                  collection, storage, use, and disclosure of your information
                  as outlined in our Privacy Policy. By using the Site, you
                  consent to all actions taken by use with respect to your
                  information, consistent with our Privacy Policy.
                </p>
              </div>

              <div className={style.content}>
                <p id="5" className={style.title}>
                  5. Protection of Your Privacy
                </p>

                <p className={style.description}>
                  5.1. All information that you share with us or that we gather
                  through your utilization of the Site is subject to our Privacy
                  Policy, which is available on the Site. This policy outlines
                  how we collect, use, store, and safeguard your personal data,
                  and addresses your rights and our responsibilities regarding
                  your information.
                </p>

                <p className={style.description}>
                  5.2. By accessing and using the Site, you give your explicit
                  consent to all actions we undertake in accordance with our
                  Privacy Policy. This includes, but is not limited to, the
                  collection, processing, storage, and sharing of your data, as
                  far as legally permissible, and as detailed in our Privacy
                  Policy.
                </p>

                <p className={style.description}>
                  5.3. Please ensure that you thoroughly review our Privacy
                  Policy and understand how we manage your data. If you have any
                  queries or concerns, please do not hesitate to contact us.
                  Your trust and privacy are of paramount importance to us, and
                  we commit to handling your data responsibility and in line
                  with applicable privacy and data protection laws.
                </p>
              </div>

              <div className={style.content}>
                <p className={style.title} id="6">
                  6. User Representations and Warranties
                </p>

                <p className={style.description}>
                  6.1. As a User, you represent and warrant that you are not an
                  agent or employee of any competitor of NOTT, or any company
                  that offers similar services to NOTT. You also affirm that
                  your use of the Site and the Materials is solely for the
                  purpose of enhancing your understanding, participation in
                  Offerings, including but not limited to, your ability to
                  improve your sleep function.
                </p>

                <p className={style.description}>
                  6.2. You further warrant that your interactions with NOTT and
                  use of the Site, the Platform, the Products, and the Materials
                  will not infringe upon or violate the rights of any third
                  party or violate any local, municipal, state, provincial,
                  national, or international laws, regulations, or any policies
                  or guidelines established by NOTT.
                </p>

                <p className={style.description}>
                  6.3. Any violation of this warranty may lead to the
                  termination of your access to the Site and Services, at the
                  sole discretion of NOTT.
                </p>
              </div>

              <div className={style.content}>
                <p id="7" className={style.title}>
                  7. Terms and Conditions for the Site
                </p>

                <p className={style.description}>
                  7.1. The Site provides information about our products and
                  services (the “Offerings”). All content on the Site, including
                  but not limited to, graphics, text, and other proprietary
                  elements or intellectual property (whether or not registered,
                  registrable, patented, or patentable), and the compilation of
                  these (“NOTT Content”) is the intellectual property of NOTT,
                  and its licensors, protected under relevant copyright,
                  trademark, and other intellectual property laws. Unless
                  expressly stated in Section 7.2, you may not download, modify,
                  or use any NOTT Content without express written permission.
                </p>

                <p className={style.description}>
                  7.2. NOTT provides various resources on the Site, including,
                  but not limited to, materials, information, questions,
                  articles, and other information (collectively, the
                  “Materials”). For your personal or business use, NOTT grants
                  you a limited right to access and use the Materials available
                  on the Site. Any Materials you access can be viewed online,
                  and if the option is available, downloaded for offline use,
                  provided you maintain all copyright and proprietary notices
                  contained in the original Materials. Except as expressly
                  permitted in Material, you may not modify, reproduce,
                  distribute, or exploit the Materials in any way. Selling,
                  sharing, or allowing third-party access to the Materials is
                  strictly prohibited. You must maintain the confidentiality of
                  all Materials, not disclosing them in any manner that is not
                  expressly permitted by these Terms. Breaching these Terms may
                  lead to the termination of your authorized use of the Site.
                </p>

                <p className={style.description}>
                  7.3. You agree to not use any NOTT Content from the Site for
                  unauthorized purposes, especially in ways that might harm our
                  reputation or violate our intellectual property rights. Misuse
                  of any NOTT Content is strictly prohibited and may lead to
                  legal actions.
                </p>

                <p className={style.description}>
                  7.4. BY USING THE SITE, YOU AFFIRM YOUR AUTHORITY TO USE THE
                  PLATFORM AND PRODUCTS, EITHER FOR YOURSELF OR THE ENTITY YOU
                  REPRESENT. IF ACTING ON BEHALF OF A BUSINESS, YOU CONFIRM YOUR
                  AUTHORITY TO BIND SAID BUSINESS TO THESE TERMS AND CONDITIONS.
                </p>

                <p className={style.description}>
                  7.5. Descriptions of our Offerings on the Site are for
                  informational purposes. NOTT reserves the right to update or
                  modify any details about our Offering without prior notice.
                </p>

                <p className={style.description}>
                  7.6. NOTT is not responsible for your completion of any tasks
                  or other participation in the Site (“NOTT Service”). Ensure
                  you allocate enough time and resources to fully engage with
                  our services.
                </p>
              </div>

              <div className={style.content}>
                <p id="8" className={style.title}>
                  8. Data Protection
                </p>

                <p className={style.description}>
                  8.1. NOTT and Users shall comply with all{" "}
                  <span className={style.highlightText}>applicable laws</span>{" "}
                  relating to the processing of Personal Data including, while
                  it is in force, the General Data Protection Regulation
                  (Regulation (EU) 2016/679), the California Consumer Privacy
                  Act (CCPA), Canada’s Personal Information Protection and
                  Electronic Documents Act (PIPEDA), Australia’s Privacy Act
                  1988 (collectively the “Jurisdictions”, and such regulations,
                  the “Data Protection Laws”).
                </p>

                <p className={style.description}>
                  8.2. You warrant to NOTT that you possess the lawful right to
                  disclose all personal data shared with NOTT under or in
                  connection with these Terms and Conditions.
                </p>

                <p className={style.description}>
                  8.3. You shall only provide personal data to NOTT as permitted
                  herein, and NOTT shall only process, in each case under or in
                  relation to these Terms and Conditions, and in compliance with
                  the processing of special categories under Art. 9 of the GDPR.
                </p>

                <p className={style.description}>
                  8.4. NOTT commits to processing data based on documented
                  instructions from the Users. This encompasses any transfers of
                  data outside the Jurisdictions, following the appropriate
                  legal and regulatory requirements.
                </p>

                <p className={style.description}>
                  8.5. Notwithstanding any other provision of these Terms and
                  Conditions, NOTT may process the content if and to the extent
                  that NOTT is required to do so by applicable law. In such a
                  case, NOTT shall inform Users of the legal requirement before
                  processing, unless that law prohibits such information on
                  important grounds of public interest.
                </p>

                <p className={style.description}>
                  8.6. NOTT shall ensure that persons authorized to process the
                  content have committed themselves to confidentiality or are
                  under an appropriate statutory obligation of confidentiality.
                </p>

                <p className={style.description}>
                  8.7. NOTT and Users shall each implement appropriate technical
                  measures to ensure an appropriate level of security for
                  content.
                </p>

                <p className={style.description}>
                  8.8. NOTT will not enlist third parties for processing
                  personal data without prior consent from Users. In the case of
                  a general written authorization, NOTT shall inform the Users
                  at least 14 days in advance of any intended changes concerning
                  the addition or replacement of any third party processor, and
                  if the Users object to any such changes before their
                  implementation, then the Users may terminate these Terms and
                  Conditions on 7 days’ written notice to NOTT, providing that
                  such notice must be given within the period of 7 days
                  following the date that NOTT informed the Users of the
                  intended changes. NOTT shall ensure that each third party
                  processor is subject to equivalent legal obligations as those
                  imposed on the Users in this Section 12.
                </p>

                <p className={style.description}>
                  8.9. NOTT shall, insofar as possible and taking into account
                  the nature of the processing, take appropriate technical and
                  organizational measures to assist the Users with the
                  fulfillment of the User’s obligations to respond to requests
                  exercising a data subject’s rights under the Data Protection
                  Laws.
                </p>

                <p className={style.description}>
                  8.10. NOTT shall make available to Users all information
                  necessary to demonstrate the compliance of NOTT with its
                  obligations under this Section 8 and the Data Protection Laws.
                </p>

                <p className={style.description}>
                  8.11. Upon request, NOTT shall either delete or return all of
                  the content provided by the Users. NOTT will delete existing
                  copies unless applicable law mandates the storage of the
                  relevant content.
                </p>
              </div>

              <div className={style.content}>
                <p id="9" className={style.title}>
                  9. Ownership of Intellectual Property Rights, Trademarks and
                  Copyrights on the Site
                </p>

                <p className={style.description}>
                  9.1. All contents of the Site are ©2023 NOTT Foundation or
                  respective third party owners. All rights are reserved
                  worldwide.
                </p>

                <p className={style.description}>
                  9.2. The contents, features, and functionalities of the Site,
                  including but not limited to all software, text, displays,
                  images, logos, data, sound files, photographs, video, and
                  audio, are owned by NOTT, its licensors, or other providers of
                  such material.
                </p>

                <p className={style.description}>
                  <span>
                    9.3. If you become aware of a potential infringement of our
                    intellectual property in any jurisdiction, please contact us
                    at
                  </span>
                  &nbsp;
                  <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>
                  &nbsp;
                  <span>
                    and adhere to our guidelines outlined in our Privacy Policy.
                  </span>
                </p>

                <p className={style.description}>
                  9.4. We respect the intellectual property rights of others and
                  respond to any claims that content posted on the Site
                  infringes on the copyright, trademark, or other intellectual
                  property rights. If you believe content on the Site infringes
                  on your rights, you or your agent may send us a detailed
                  notice. Your notice should include the following:
                </p>

                <ul>
                  <li>
                    An electronic or physical signature of the person authorized
                    to act on behalf of the intellectual property right owner’s
                    interest;
                  </li>
                  <li>
                    A description of the work that you claim has been infringed,
                    including the URL (i.e., web page address) of the location
                    where the work exists or a copy of the work;
                  </li>
                  <li>Your name, email, address and telephone number;</li>
                  <li>
                    A statement by you that you have a good faith belief that
                    the disputed use is not authorized by the owner, its agent,
                    or the law.
                  </li>
                </ul>

                <p className={style.description}>
                  <span>
                    9.5. Incomplete or improperly filled complaints may not be
                    processed. Misrepresentation or bad faith claims may result
                    in liabilities, including, but not limited to, costs and
                    attorney’s fees.
                  </span>
                  &nbsp;
                </p>

                <p className={style.description}>
                  To submit your claim, contact NOTT at:&nbsp;
                  <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>
                </p>

                <p className={style.description}>
                  9.6. These Terms and Conditions permit you to use the Site for
                  personal and business purposes, provided it is non-commercial.
                  Actions like storing materials in RAM, browser caching, and
                  printing a reasonable number of Site pages for personal use
                  are permissible. Otherwise, you should not reproduce, modify,
                  or distribute materials from the Site.
                </p>

                <p className={style.description}>
                  9.7. Respect all intellectual property notices on the Site’s
                  materials. Any breach may result in your access being revoked,
                  and you may need to return or destroy unauthorized copies. The
                  Company retains all rights, titles, and interests in the Site
                  and its content.
                </p>

                <p className={style.description}>
                  9.8. NOTT, along with other specified marks, are trademarks of
                  NOTT and its affiliates. All materials on the Site, including
                  texts, images, and sound files, are copyrighted and protected
                  by the relevant laws of the countries where we operate and
                  international conventions.
                </p>

                <p className={style.description}>
                  9.9. Nothing in these Terms and Conditions transfers or
                  assigns any of NOTT’s intellectual property rights to Users.
                </p>
              </div>

              <div className={style.content}>
                <p id="10" className={style.title}>
                  10. Prohibited Uses of the Site
                </p>

                <p className={style.description}>
                  10.1. You are required to use the Site in compliance with all
                  applicable laws, rules, regulations, ordinances, and these
                  Terms at all times. The Site is to be used only for lawful
                  purposes and in accordance with these Terms and Conditions.
                  The following non-exhaustive list outlines prohibited uses of
                  the Site. By using the Site, you agree not to:
                </p>
                <ul>
                  <li>
                    Violate any applicable federal, state, provincial,
                    municipal, local, or international law or regulation
                    (including, without limitation, any laws regarding the
                    export of data or software).
                  </li>
                  <li>
                    Exploit, harm, or attempt to exploit or harm minors in any
                    way by exposing them to inappropriate content, asking for
                    personal information, or otherwise.
                  </li>
                  <li>
                    Transmit, or procure the sending of, any advertising or
                    promotional material without our prior written consent,
                    including any “junk mail,” “chain letter,” “spam,” or any
                    other similar solicitation.
                  </li>
                  <li>
                    Impersonate or attempt to impersonate NOTT, an NOTT
                    employee, an NOTT agent, another user or customer of our
                    products and services, or any other person or entity
                    (including, without limitation, by using the email addresses
                    or screen names associated with any of the foregoing).
                  </li>
                  <li>
                    Misrepresent your identity or affiliation with any person or
                    entity.
                  </li>
                  <li>
                    Engage in any conduct that restricts or inhibits anyone’s
                    use or enjoyment of the Site, or which, as determined by us,
                    may harm NOTT or users of the Site, or expose them to
                    liability.
                  </li>
                  <li>
                    Upload any Materials or content on, or from NOTT to any
                    generative artificial intelligence (such as ChatGPT, Google
                    Bard, or otherwise).
                  </li>
                </ul>

                <p className={style.description}>
                  10.2. Further, you agree not to:
                </p>
                <ul>
                  <li>
                    Use the Site in any manner that could disable, overburden,
                    damage, or impair the Site or interfere with any other
                    party’s use of the Site, including their ability to engage
                    in real-time activities through the Site.
                  </li>
                  <li>
                    Abuse the Site by requesting an unreasonable amount of
                    requests not reasonably related to purchasing a NOTT product
                    or service, i.e., imposing an unreasonable load on the
                    service infrastructure and attempting to overburden the
                    services.
                  </li>
                  <li>
                    Use any robot, spider, or other automatic device, process,
                    or means to access the Site for any purpose, including using
                    any manual process or means for monitoring or copying any of
                    the material on the Site or for any other unauthorized
                    purpose.
                  </li>
                  <li>
                    Use any manual process to monitor or copy any of the
                    material on the Site, or for any other purpose not expressly
                    authorized in these Terms and Conditions, without our prior
                    written consent.
                  </li>
                  <li>
                    Use any device, software, or routine that interferes with
                    the proper working of the Site. Introduce any viruses,
                    Trojan horses, worms, logic bombs, or other material which
                    is malicious or technologically harmful.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt any parts of the Site, the server on
                    which the Site is stored, or any server, computer, or
                    database connected to the Site.
                  </li>
                  <li>
                    Attempt to attack or attack the Site via a denial-of-service
                    attack or a distributed denial-of-service attack.
                  </li>
                  <li>
                    Use any electronic communication feature of the Site for any
                    purpose that is unlawful, tortious, abusive, intrusive on
                    another’s privacy, harassing, libelous, defamatory,
                    embarrassing, obscene, threatening, or hateful, all as
                    determined by NOTT in its sole and absolute discretion.
                  </li>
                  <li>
                    Upload, post, reproduce, or distribute any information,
                    software, or other material protected by copyright or any
                    other intellectual property right (as well as rights of
                    publicity and privacy) without first obtaining the
                    permission of the owner of such rights.
                  </li>
                  <li>Collect or store personal data about other users.</li>
                  <li>
                    Use the Site for any commercial purpose not expressly
                    approved by NOTT in writing.
                  </li>
                </ul>
                <p className={style.description}>
                  10.3. Engaging in any of the prohibited uses may result in the
                  termination of your right to use the services and the Site.
                </p>
              </div>

              <div className={style.content}>
                <p id="11" className={style.title}>
                  11. Geographic Restrictions
                </p>

                <p className={style.description}>
                  11.1. Users are responsible for ensuring that their use of the
                  Site complies with the local laws and regulations of their
                  respective countries.
                </p>

                <p className={style.description}>
                  11.2. If you choose to access the Site from outside these
                  areas, such access will be on your own initiative. You will be
                  solely responsible for ensuring compliance with local laws,
                  rules, ordinances, and regulations, as well as these Terms and
                  Conditions. Please be aware that any access to the Site from
                  jurisdictions where its contents are illegal or strictly
                  regulated is strictly prohibited.
                </p>

                <p className={style.description}>
                  11.3. We reserve the right to limit the availability of the
                  Site or any portion of the Site, to any person, geographic
                  area, or jurisdiction, at any time and in our sole discretion.
                  If any material on the Site, or your use of the Site, is
                  contrary to the laws of the place where you are when you
                  access it, the Site is not intended for you, and we ask you
                  not to use the Site.
                </p>
              </div>

              <div className={style.content}>
                <p id="12" className={style.title}>
                  12. Technology, Security, and User Responsibilities
                </p>

                <p className={style.description}>
                  12.1. Users are responsible for maintaining the
                  confidentiality of their sign-in information and device
                  necessary to access the Platform. Should there be any breach,
                  suspected breach, or unauthorized use of their login
                  credentials, users are obligated to notify NOTT immediately.
                </p>

                <p className={style.description}>
                  12.2. While NOTT strives to make the Platform and the Products
                  broadly accessible and useful, we do not guarantee that the
                  Platform and the Products are appropriate or available for
                  every audience or every location. It is possible that
                  accessing the Platform might not be legal in certain
                  jurisdictions. Users who choose to access the Platform or the
                  Products from such locations do so on their own initiative and
                  are solely responsible for compliance with local laws.
                </p>

                <p className={style.description}>
                  12.3. NOTT reserves the right to remove or restrict access to
                  the Platform or the Products for Users who fail to adhere to
                  our guidelines, or who disrespects NOTT staff, other users, or
                  the community at large.
                </p>

                <p className={style.description}>
                  12.4. Our services and the Products are primarily facilitated
                  through the Platform. Users are responsible for ensuring that
                  they possess the necessary hardware, software, and internet
                  connectivity to fully utilize the Platform. Detailed
                  technology requirements will be provided at the time of
                  purchase, and Users must verify their ability to meet these
                  requirements prior to purchase or opening their account or
                  both.
                </p>

                <p className={style.description}>
                  12.5. NOTT is not responsible for any service interruptions or
                  errors that arise from circumstances outside of our control.
                  This includes, but is not limited to:
                </p>
                <p className={style.subDesc}>
                  (i) loss of connectivity or service interruptions on NOTT’s
                  end or the User’s end;
                </p>
                <p className={style.subDesc}>
                  (ii) technical difficulties, glitches, or other problems with
                  the the Platform or the Products;
                </p>
                <p className={style.subDesc}>
                  (iii) issues with the User’s personal hardware, software, or
                  internet connection.
                </p>

                <p className={style.description}>
                  12.6. In any such instances, NOTT will strive to resolve the
                  issue promptly but cannot be held accountable for any
                  resulting difficulties in accessing our Services or associated
                  materials.
                </p>
              </div>

              <div className={style.content}>
                <p id="13" className={style.title}>
                  13. Accounts Creation and Management; Site Access and Security
                </p>

                <p className={style.description}>
                  13.1. Account Creation and Management
                </p>
                <p className={style.description}>
                  When you create an account on our Site, you affirm that
                  information you provide is accurate, comprehensive, up-to-date
                  and that you are legally allowed to use the Products, the
                  Platform; provided that if you are younger than 18 years old,
                  written permission from your legal guardian. Any account with
                  inaccurate, incomplete, or obsolete information may be
                  terminated immediately.
                </p>
                <p className={style.description}>
                  You are responsible for maintaining the confidentiality of
                  your passkey, and for restricting access to your devices. You
                  accept responsibility for all activities that occur under your
                  account, whether your password is for our Site or a
                  third-party service. You are obligated to notify us
                  immediately of any security breach or unauthorized use of your
                  account.
                </p>
              </div>

              <div className={style.content}>
                <p id="14" className={style.title}>
                  14. Accessing the Site and Account Security
                </p>

                <p className={style.description}>
                  14.1. We reserve the right to modify, withdraw, or discontinue
                  the Site and any service or material we provide in association
                  with the Site, at our sole discretion without prior notice. We
                  shall not be liable if for any reason all or any part of the
                  Site or online content is unavailable at any time or for any
                  period. Please note, the Site may depend on third-party
                  applications that we use or that you have provided.
                </p>

                <p className={style.description}>
                  14.2. You are responsible for:
                </p>
                <ul>
                  <li>Making all arrangements necessary to access the Site.</li>
                  <li>
                    Ensuring that all individuals who access the Site through
                    your Internet connection are aware of these Terms and
                    Conditions and our Privacy Policy and comply with them.
                  </li>
                </ul>

                <p className={style.description}>
                  14.3. Some resources or features of the Site may require you
                  to provide certain registration details or other information.
                  If you choose not to provide such information, your access to
                  certain content or participation in certain features may be
                  limited or prohibited.
                </p>

                <p className={style.description}>
                  14.4. You further agree not to email, post, or otherwise
                  disseminate any user ID, password, or other information
                  providing you access to the Site. NOTT is not liable for any
                  loss incurred as a result of someone else using your password
                  or account, either with or without your knowledge. We also
                  bear no responsibility for any delay in shutting down your
                  account after you have reported a security breach to us.
                </p>

                <p className={style.description}>
                  14.5. The information you provide, including through the use
                  of interactive features on the Site, is governed by our
                  Privacy Policy. By registering with the Site or providing
                  information, you consent to all actions we take regarding your
                  information, consistent with our Privacy Policy.
                </p>
              </div>

              <div className={style.content}>
                <p id="15" className={style.title}>
                  15. Disclaimer of Warranties and Limitation of Liability
                </p>

                <p className={style.description}>
                  15.1. Limited Disclaimer for the Product
                </p>

                <p className={style.description}>
                  SUBJECT TO THE TERMS HEREIN, OUR PRODUCTS ARE NOT MEDICAL
                  DEVICES, AND WE WARRANT THAT WHEN YOU PURCHASE PRODUCTS FROM
                  THE SITE, THEY WILL BE FREE OF MATERIAL AND WORKMANSHIP
                  DEFECTS FOR ONE (1) YEARS FROM YOUR PURCHASE DATE (THE
                  “WARRANTY PERIOD”). If we replace a product during this
                  period, the replacement won’t have an extended warranty. This
                  warranty is only for the original purchaser and cannot be
                  transferred. We can change this warranty, but changes will not
                  affect past purchases.
                </p>
                <p className={style.description}>
                  15.2. Availability, Errors, and Inaccuracies
                </p>
                <p className={style.description}>
                  We strive for accuracy, but cannot guarantee that everything
                  on the Site will always be available, accurate, or up-to-date.
                  There might be errors, omissions, or outdated info. If a
                  product’s price is wrong, we will correct it. Just because a
                  product or service is listed, does not mean we endorse or
                  recommend it.
                </p>
              </div>

              <div className={style.content}>
                <p id="16" className={style.title}>
                  16. Using Mobile Devices
                </p>

                <p className={style.description}>
                  16.1. Using the Site on a mobile might lead to extra charges
                  by your service provider. Some providers or devices might also
                  limit or block features on the Site. Not every feature may
                  work with all devices or carriers.
                </p>

                <p className={style.description}>
                  16.2. You are responsible for understanding the terms of your
                  mobile device and service agreement and for any mobile data or
                  other fees that using the Site might incur. We recommend
                  contacting your service provider for more details regarding
                  these potential charges or restrictions. NOTT bears no
                  responsibility for any additional charges, restrictions, or
                  compatibility issues that may arise from mobile device usage.
                </p>
              </div>

              <div className={style.content}>
                <p id="17" className={style.title}>
                  17. No Guaranteed Outcomes
                </p>

                <p className={style.description}>
                  17.1. Users acknowledge that using the Site and the Platform
                  does not guarantee any specific decision or result. NOTT does
                  not make any promises, explicit or implied, that Users will
                  improve health function by using the Site, the Product, or the
                  Platform.
                </p>

                <p className={style.description}>
                  17.2. We offer tools and resources to help with health and
                  wellness. But many factors affect your health and wellness,
                  like your biology or environment, which we cannot control.
                </p>

                <p className={style.description}>
                  17.3. You pay us for using the Platform, regardless of your
                  results. Any and all fees are for access, not outcomes.
                </p>
              </div>

              <div id="18" className={style.content}>
                <p className={style.title}>18. Independent Status</p>

                <p className={style.description}>
                  18.1. NOTT operates as an independent technology company that
                  offers Products. NOTT does not act as an agent or
                  representative, and does not operate on behalf of any specific
                  organization or entity.
                </p>

                <p className={style.description}>
                  18.2. NOTT’s mission is to provide the products and services
                  that help our users manage their products and improve users’
                  wellness and health.
                </p>
              </div>

              <div className={style.content}>
                <p id="19" className={style.title}>
                  19. Code of Conduct
                </p>

                <p className={style.description}>
                  19.1. Users should understand that NOTT operates as a software
                  and hardware company, and not as a medical provider.
                </p>

                <p className={style.description}>
                  19.2. Users, by using our Platform and the Site, pledge to
                  adhere to the highest standards of integrity and honesty. This
                  includes refraining from any act of dishonesty or deceit, such
                  as plagiarism, fraud, or misrepresentation. Any such
                  misconduct is neither endorsed nor condoned by NOTT.
                </p>

                <p className={style.description}>
                  19.3. Should we discover that any User has committed any act
                  of dishonesty or misconduct while using our services, NOTT
                  reserves the right to terminate such User’s access to our
                  Platform and the Site immediately, without a refund. This
                  commitment to ethical conduct is fundamental to the mission
                  and values of NOTT, and we expect all Users to uphold this
                  standard.
                </p>
              </div>

              <div className={style.content}>
                <p id="20" className={style.title}>
                  20. Monitoring, Enforcement, and Termination
                </p>

                <p className={style.description}>
                  20.1. We reserve the right to:
                </p>

                <ul>
                  <li>
                    Pursue legal actions, including, but not limited to,
                    notifying law enforcement authorities, for any illegal or
                    unauthorized use of the Site.
                  </li>
                  <li>
                    Suspend or terminate your access to all or part of the Site
                    for any reason or no reason at all, including, but not
                    limited to, any violation of these Terms and Conditions.
                  </li>
                </ul>

                <p className={style.description}>
                  20.2. In the enforcement of these Terms, we maintain the right
                  to cooperate fully with any law enforcement authorities or
                  court orders requesting or directing us to disclose the
                  identity or other information of anyone posting any materials
                  on or through the Site. BY USING THE PLATFORM, YOU WAIVE AND
                  HOLD HARMLESS NOTT AND ITS AFFILIATES, LICENSEES, SERVICE
                  PROVIDERS, AND CONTRACTORS FROM ANY CLAIMS RESULTING FROM ANY
                  ACTION TAKEN BY NOTT AND ANY OF THE FOREGOING PARTIES DURING,
                  OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER NOTT,
                  OR LAW ENFORCEMENT AUTHORITIES.
                </p>

                <p className={style.description}>
                  20.3. Please be aware that we do not allow users to post
                  material directly on the Site, and we do not review or host
                  user-generated content. We cannot ensure prompt removal of
                  objectionable material that may be posted elsewhere. As such,
                  we assume no liability for any action or inaction regarding
                  transmissions, communications, or content provided by any User
                  or third party. We have no liability or responsibility to
                  anyone for the performance or nonperformance of the activities
                  described in this section.
                </p>
              </div>

              <div className={style.content}>
                <p id="21" className={style.title}>
                  21. Updates to the Website
                </p>

                <p className={style.description}>
                  21.1. We regularly update and modify the content on the Site,
                  however, we make no representation, warranty, or guarantee
                  that the content on the Site is accurate, complete, or current
                  at all times. The material on the Site may be out of date or
                  may become out of date at any given time, and we are under no
                  obligation to update or maintain the currency of such
                  material. It is your responsibility to monitor changes to the
                  Site and ensure that the information you rely upon is up to
                  date.
                </p>
              </div>

              <div className={style.content}>
                <p id="22" className={style.title}>
                  22. Dependence on Information Provided
                </p>

                <p className={style.description}>
                  22.1. The information provided on or through the Site is made
                  available exclusively for informational purposes and should
                  not be used as the sole basis for making decisions without
                  consulting primary, more accurate, or more timely sources of
                  information. While we strive to keep the information on the
                  Site up to date and correct, we make no representations or
                  warranties of any kind, express or implied, about the
                  accuracy, completeness, reliability, suitability, or
                  availability of any information, products, services, or
                  related graphics contained on the Site. Any reliance you place
                  on such information is therefore strictly at your own risk. We
                  disclaim all liability and responsibility arising from any
                  reliance placed on such materials by you or any other visitor
                  to the Site, or by anyone who may be informed of any of its
                  contents. We expressly disclaim any and all liability in
                  connection with decisions made or actions taken based on the
                  contents of the Site.
                </p>
              </div>

              <div className={style.content}>
                <p id="23" className={style.title}>
                  23. Limitation of Liability & Remedies
                </p>

                <p className={style.description}>
                  23.1. NOTT, its suppliers, or other third parties referenced
                  on the Site shall not be liable for any damages of any kind
                  (including, but not limited to, those resulting from reduced
                  outcomes, service interruptions, or incorrect information)
                  that exceed the lesser of the aggregate contract value of a
                  single transaction by any User or fees paid to NOTT in the
                  last 12 months. This limitation applies regardless of the
                  legal theory the claim is based on, whether it be warranty,
                  contract, tort, or otherwise, and whether or not NOTT has been
                  advised of the potential for such damages. This includes, but
                  is not limited to, your reliance upon opinions or information
                  appearing on the Site, any computer viruses, information,
                  software, linked websites operated by third parties, products
                  or services obtained through the Site, whether based on a
                  theory of negligence, contract, tort, strict liability, or
                  consumer protection statutes, even if NOTT has been advised of
                  the possibility of such damages. If your use of materials or
                  information from the Site necessitates servicing, repair, or
                  correction of equipment or data, you assume all costs thereof.
                </p>

                <p className={style.description}>
                  23.2. TO THE MAXIMUM EXTENT ALLOWED BY LAW, NOTT DOES NOT MAKE
                  ANY REPRESENTATIONS ABOUT THE RELIABILITY OF THE FEATURES OF
                  THE SITE, NOTT CONTENT, USER CONTENT, OR ANY OTHER SITE
                  FEATURES, AND DISCLAIMS ALL LIABILITY IN THE EVENT OF ANY
                  SERVICE FAILURE. YOU ACKNOWLEDGE THAT THE ENTIRE RISK ARISING
                  OUT OF YOUR USE OF THE SITE AND THE PURCHASE OF NOTT SERVICES
                  REMAIN SOLELY WITH YOU. NEITHER NOTT, NOR ANY OTHER PERSON OR
                  ENTITY INVOLVED IN THE CREATION, PRODUCTION, OR DELIVERY OF
                  THE SITE, WILL BE LIABLE FOR INCIDENTAL, SPECIAL, EXEMPLARY,
                  OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA
                  OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM
                  FAILURE, OR THE COST OF SUBSTITUTE SERVICES OR SITE, OR FOR
                  ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL
                  DISTRESS ARISING OUT OF OR IN CONNECTION WITH THESE TERMS AND
                  CONDITIONS OR FROM THE USE OF OR INABILITY TO USE THE SITE,
                  NOTT WEBSITES, OR THE INABILITY TO USE OR ACCESS A PROFILE OR
                  ANY SPECIFIC PROFILE CONTENT, WHETHER BASED ON WARRANTY,
                  CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR
                  ANY OTHER LEGAL THEORY, AND WHETHER OR NOT NOTT HAS BEEN
                  ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED
                  REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS
                  ESSENTIAL PURPOSE.
                </p>

                <p className={style.description}>
                  23.3. IF, NOTWITHSTANDING THE LIMITATIONS SET OUT ABOVE, NOTT
                  IS FOUND LIABLE FOR ANY LOSS OR DAMAGE WHICH ARISES OUT OF OR
                  IS IN ANY WAY CONNECTED WITH ANY OF THE OCCURRENCES DESCRIBED
                  ABOVE, THE NOTT’S LIABILITY WILL IN NO EVENT EXCEED THE AMOUNT
                  YOU HAVE PAID TO NOTT IN CONNECTION WITH SUCH TRANSACTION(S)
                  ON THE SITE. THIS LIMITATION OF LIABILITY REFLECTS THE
                  ALLOCATED RISK BETWEEN YOU AND NOTT AND IS A FUNDAMENTAL
                  ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN YOU AND NOTT. THE
                  LIMITATION SPECIFIED IN THIS SECTION WILL SURVIVE AND APPLY
                  EVEN IF ANY LIMITED REMEDY SPECIFIED IN THESE TERMS IS FOUND
                  TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                </p>

                <p className={style.description}>
                  23.4. The limitation of liability set forth in this Section 31
                  shall not apply to the extent prohibited by applicable law. To
                  the extent that the limitations of liability herein are not
                  enforceable under applicable law, the Company’s liability
                  shall be limited to the maximum extent permitted by such law.
                  This Section 31 shall not affect any statutory rights that may
                  not be disclaimed under applicable law.
                </p>

                <p className={style.description}>
                  23.5. NOTT does not endorse, verify, evaluate or guarantee any
                  information provided by users and nothing shall be considered
                  as an endorsement, verification, or guarantee of any User
                  Content. You shall not create or distribute information,
                  including, but not limited to, advertisements, press releases,
                  or other marketing materials, or include links to any sites
                  which contain or suggest an endorsement by NOTT without the
                  prior review and written approval of NOTT.
                </p>

                <p className={style.description}>
                  23.6. THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT
                  BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>

                <p className={style.description}>
                  23.7. In the event of a breach of these Terms relating to your
                  purchase, you agree that your sole remedy shall be to pursue
                  dispute resolution as stipulated in “Section 34. Arbitration”
                  below. This remedy is intended to be your exclusive remedy for
                  any breach of these Terms as it relates to your purchase.
                </p>
              </div>

              <div className={style.content}>
                <p id="24" className={style.title}>
                  24. Indemnification
                </p>

                <p className={style.description}>
                  24.1. You agree to indemnify, defend, and hold NOTT, along
                  with its parent organizations, subsidiaries, affiliates,
                  licensors, and service providers, and its and their respective
                  officers, directors, employees, contractors, agents,
                  licensors, suppliers, successors, and assigns harmless from
                  and against any claims, liabilities, liens, damages,
                  judgments, awards, demands, losses, costs, expenses or fees,
                  including reasonable attorneys’ fees and costs that arise from
                  or are related to your breach of these Terms and Conditions or
                  your use of the Site. This includes, but is not limited to,
                  your use of the Site’s content, services, and products beyond
                  what is expressly authorized in these Terms and Conditions, or
                  any violations of the same by any individuals under your
                  control. It also includes any issues that arise from the use
                  of any content--including User Content--that you have
                  submitted, posted, transmitted, or otherwise provided to NOTT
                  of the Site, or your use of any information obtained from the
                  Site.
                </p>
              </div>

              <div className={style.content}>
                <p id="25" className={style.title}>
                  25. Dispute Resolution and Binding Arbitration
                </p>

                <p className={style.description}>
                  25.1. If there is any dispute between Users and the Company,
                  you hereby agree to engage in a good faith mediation for at
                  least 30 days (“Mediation”). This process aims to provide an
                  informal forum to resolve any disputes, controversies, or
                  claims. If Mediation fails to yield a resolution, then, and
                  only then, shall the matter be escalated to binding
                  arbitration.
                </p>

                <p className={style.description}>
                  25.2. Notwithstanding the foregoing, NOTT retains the right to
                  seek injunctive or other equitable relief in a court of
                  competent jurisdiction to prevent the actual or threatened
                  infringement, misappropriation, or violation of our
                  copyrights, trademarks, trade secrets, patents, or other
                  intellectual property rights.
                </p>

                <p className={style.description}>
                  25.3. You acknowledge and agree that you and NOTT are each
                  waiving the right to a trial by jury or to participate as a
                  plaintiff or class member in any purported class action or
                  representative proceeding. Further, unless both you and NOTT
                  otherwise agree in writing, the arbitrator may not consolidate
                  more than one person’s claims, and may not otherwise preside
                  over any form of any class or representative proceeding. If
                  this specific paragraph is held unenforceable, then the
                  entirety of this “Dispute Resolution and Binding Arbitration”
                  section will be deemed void.
                </p>

                <p className={style.description}>
                  25.4. This arbitration agreement will survive the termination
                  of your relationship with NOTT.
                </p>
              </div>

              <div className={style.content}>
                <p id="26" className={style.title}>
                  26. Time Limitation for Claims
                </p>

                <p className={style.description}>
                  26.1. YOU AGREE THAT ANY CAUSE OF ACTION, CLAIM, OR DISPUTE
                  THAT YOU MAY HAVE ARISING OUT OF OR RELATED TO THESE TERMS AND
                  CONDITIONS, YOUR USE OF THE SITE, OR NOTT’S SERVICES
                  (COLLECTIVELY, “CLAIM”) MUST BE COMMENCED WITHIN ONE (1) YEAR
                  AFTER THE CLAIM ARISES. FAILURE TO INITIATE A CLAIM WITHIN
                  THAT ONE (1) YEAR PERIOD WILL RESULT IN THE CLAIM BEING
                  FOREVER BARRED, REGARDLESS OF ANY LAW TO THE CONTRARY. THIS
                  PERIOD IS NOT EXTENDED IF NOTT CHOOSES TO SUSPEND OR TERMINATE
                  YOUR ACCESS TO THE SITE OR ITS SERVICES FOR ANY SUSPECTED OR
                  ACTUAL BREACH OF THESE TERMS AND CONDITIONS.
                </p>

                <p className={style.description}>
                  26.2. This section relating to the time limitation for claims
                  will survive any termination of your access to the Site or
                  NOTT’s services.
                </p>
              </div>

              <div className={style.content}>
                <p id="27" className={style.title}>
                  27. Waiver and Severability
                </p>

                <p className={style.description}>
                  27.1. No act, omission or delay by NOTT in exercising any
                  right or remedy provided under these Terms and Conditions or
                  by law shall constitute a waiver of that or any other right or
                  remedy, nor shall it prevent or restrict that further exercise
                  of that or any other right or remedy by NOTT. No single or
                  partial exercise of such right or remedy shall prevent or
                  restrict the further exercise of that or any other right or
                  remedy.
                </p>

                <p className={style.description}>
                  27.2. In the event that any provision of these Terms and
                  Conditions is determined by a competent authority to be
                  invalid, unlawful or unenforceable to any extent, such
                  provision will to that extent be severed from the remaining
                  provisions which will continue to be valid and enforceable to
                  the fullest extent permitted by law. If any provision of these
                  Terms and Conditions is deemed invalid or unenforceable, the
                  remaining portions shall remain in effect and the invalid or
                  unenforceable provision will be deemed modified so as to be
                  valid and enforceable to the maximum extent permitted by law.
                </p>

                <p className={style.description}>
                  27.3. This clause shall not apply if the severance alters the
                  basis nature of these Terms and Conditions or its contrary to
                  public policy. In such cases, NOTT reserves the right to
                  terminate your use of the Site, the Platform. and its
                  services.
                </p>

                <p className={style.description}>
                  27.4. Additionally, Users have the prerogative to initiate
                  termination through their account profile settings. However,
                  it is imperative to understand that certain provisions or
                  consequences may still apply post-termination, depending on
                  the nature of User’s engagement and any previous agreements.
                </p>
              </div>

              <div className={style.content}>
                <p id="28" className={style.title}>
                  28. Entire Agreement; Force Majeure
                </p>

                <p className={style.description}>
                  28.1. The Terms and Conditions, Privacy Policy, and any other
                  guidelines, rules, or operating policies that NOTT may post on
                  the Site, or provide to you from time to time, constitute the
                  complete and exclusive understanding and agreement between you
                  and NOTT concerning your use of the Site, and supersede and
                  govern over all prior written and verbal agreements,
                  representations, and understandings related to the Site.
                </p>

                <p className={style.description}>
                  28.2. No partnership, joint venture, franchise, or agency
                  relationship is intended or created between you and NOTT by
                  these Terms and Conditions. Neither party has the power to
                  obligate or bind the other beyond what is established in this
                  agreement.
                </p>

                <p className={style.description}>
                  28.3. If NOTT is prevented from carrying out its obligations
                  under these Terms and Conditions due to circumstances beyond
                  its reasonable control, including but not limited to acts of
                  God, war, fire, riot, terrorism, earthquake, government
                  mandates, or other similar events, this will not be deemed a
                  breach of these Terms and Conditions. Upon occurrence of a
                  Force Majeure event, NOTT will be excused from any further
                  performance or obligation of the affected obligation for as
                  long as such circumstances persist, and such non-performance
                  shall not constitute a breach of this agreement.
                </p>
              </div>

              <div className={style.content}>
                <p id="29" className={style.title}>
                  29. Your Comments and Concerns
                </p>

                <p className={style.description}>
                  <span>
                    29.1. We value your feedback and comments and are always
                    interested in learning about ways we can improve your
                    experience on our Site. Please direct all feedback,
                    comments, and other inquiries to
                  </span>
                  &nbsp;
                  <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>.
                </p>

                <p className={style.description}>
                  29.2. For prompt resolution of your issues, please include as
                  much detail as possible in your communication, including
                  specifics about your issue, error messages, and any steps you
                  have already taken to attempt to resolve the issue. We aim to
                  respond to all communications within a reasonable timeframe.
                </p>
              </div>

              <div className={style.content}>
                <p id="30" className={style.title}>
                  30. Effective Date and Updates
                </p>

                <p className={style.description}>
                  30.1. The Terms and Conditions herein are effective as of
                  [December 1], 2023. As our business evolves, NOTT reserves the
                  right to revise, modify, or update these Terms at any time in
                  our sole discretion. When we make changes, we will update the
                  date at the top of the Terms and, in some cases, we may
                  provide additional notice such as adding a statement to our
                  homepage or sending you an email notification 7 days in
                  advance for new functionality, security updates, bug fixes,
                  and a court order.
                </p>

                <p className={style.description}>
                  30.2. Please ensure you review these Terms periodically to
                  stay informed about any modifications. Your continued use of
                  the Site following the posting of revised Terms and Conditions
                  means that you accept and agree to the changes. If you do not
                  agree to the amended Terms, you must stop using the Site.
                </p>

                <p className={style.description}>
                  30.3. Please note that we reserve the right to determine the
                  form and means of providing notifications to you, provided
                  that you may opt out of certain means of notification as
                  described in these Terms and Our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LegalAndCompliance>
  );
};

export default TermService;
