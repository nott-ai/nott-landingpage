import React, { useEffect, useState } from "react";
import styles from "@/styles/Layout/policy.module.scss";
import { Link as LinkScroll, scroller } from "react-scroll";
import Link from "next/link";
import { ROUTERS } from "@/constants/routes";
import { useRouter } from "next/router";
import { INFO } from "@/constants/metas";
import style from "@/styles/PrivacyPolicy/privacy-policy.module.scss";
import { createMarkup } from "@/utils/index";

interface IContent {
  id: string;
  title: string;
  description: string | JSX.Element;
}

interface MenuItems {
  mainTitle: string;
  items: IContent[];
}

const menu: MenuItems[] = [
  {
    mainTitle: "Legal Disclaimer",
    items: [],
  },
  {
    mainTitle: "Privacy Policy",
    items: [
      {
        id: "collecting-information",
        title: "Collecting information",
        description: "",
      },
      {
        id: "processing-information",
        title: "Processing of information",
        description: "",
      },
      {
        id: "legal-basis",
        title: "Legal basis",
        description: "",
      },
      {
        id: "personal-information",
        title: "Sharing personal information",
        description: "",
      },
      {
        id: "cookies",
        title: "Cookies & tracking technologies",
        description: "",
      },
      {
        id: "storing-personal-information",
        title: "Storing personal information",
        description: "",
      },
      {
        id: "sharingData",
        title: "Sharing data with others",
        description: "",
      },
      {
        id: "userRight",
        title: "Users’ right with their own data",
        description: "",
      },
      {
        id: "updateAndNotice",
        title: "Updates and Notice",
        description: "",
      },
    ],
  },
  {
    mainTitle: "Terms of Service",
    items: [
      {
        id: "1",
        title: "About Use Of NOTT’s Site",
        description: <></>,
      },
      {
        id: "2",
        title: "Creation Account In NOTT App",
        description: <></>,
      },
      {
        id: "3",
        title: "Changes Of NOTT’s Terms And Conditions",
        description: <></>,
      },
      {
        id: "4",
        title:
          "Collecting Information Of Website/App And Other Platforms Owned By NOTT",
        description: <></>,
      },
      {
        id: "5",
        title: "Protection Of Your Privacy",
        description: <></>,
      },
      {
        id: "6",
        title: "User Representations And Warranties",
        description: <></>,
      },
      {
        id: "7",
        title: "Terms And Conditions For The Site",
        description: <></>,
      },
      {
        id: "8",
        title: "Data Protection",
        description: <></>,
      },
      {
        id: "9",
        title:
          "Ownership Of Intellectual Property Rights, Trademarks And Copyrights On The Site",
        description: <></>,
      },
      {
        id: "10",
        title: "Prohibited Uses Of The Site",
        description: <></>,
      },
      {
        id: "11",
        title: "Geographic Restrictions",
        description: <></>,
      },
      {
        id: "12",
        title: "Technology, Security, And User Responsibilities",
        description: <></>,
      },
      {
        id: "13",
        title: "Accounts Creation And Management; Site Access And Security",
        description: <></>,
      },
      {
        id: "14",
        title: "Accessing The Site And Account Security",
        description: <></>,
      },
      {
        id: "15",
        title: "Disclaimer Of Warranties And Limitation Of Liability",
        description: <></>,
      },
      {
        id: "16",
        title: "Using Mobile Devices",
        description: <></>,
      },
      {
        id: "17",
        title: "No Guaranteed Outcomes",
        description: <></>,
      },
      {
        id: "18",
        title: "Independent Status",
        description: <></>,
      },
      {
        id: "19",
        title: "Code Of Conduct",
        description: <></>,
      },
      {
        id: "20",
        title: "Monitoring, Enforcement, And Termination",
        description: <></>,
      },
      {
        id: "21",
        title: "Monitoring, Enforcement, And Termination",
        description: <></>,
      },
      {
        id: "22",
        title: "Dependence On Information Provided",
        description: <></>,
      },
      {
        id: "23",
        title: "Limitation Of Liability & Remedies",
        description: <></>,
      },
      {
        id: "24",
        title: "Indemnification",
        description: <></>,
      },
      {
        id: "25",
        title: "Dispute Resolution And Binding Arbitration",
        description: <></>,
      },
      {
        id: "26",
        title: "Time Limitation For Claims",
        description: <></>,
      },
      {
        id: "27",
        title: "Waiver And Severability",
        description: <></>,
      },
      {
        id: "28",
        title: "Entire Agreement; Force Majeure",
        description: <></>,
      },
      {
        id: "29",
        title: "Your Comments And Concerns",
        description: <></>,
      },
      {
        id: "30",
        title: "Effective Date And Updates",
        description: <></>,
      },
    ],
  },
  {
    mainTitle: "Device Drop Campaign",
    items: [],
  },
];

const PrivacyPolicy = () => {
  const [openMenu, setOpenMenu] = useState("");
  const router = useRouter();
  const [mainTitle, setMainTitle] = useState("");
  const [activeSection] = useState();
  const [selectedNavItem, setSelectedNavItem] = useState(
    ROUTERS.PRIVACY_POLICY
  );

  const getHighlightedText = (text: string) => {
    return `<span style="font-weight: 600; color: #0F244C">${text}</span>`;
  };

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? "" : menuId);
  };

  const getMainTitle = () => {
    switch (router.pathname) {
      case ROUTERS.LEGAL_DISCLAIMER:
        setMainTitle("Legal Disclaimer");
        break;
      case ROUTERS.PRIVACY_POLICY:
        setMainTitle("Privacy Policy");
        break;
      case ROUTERS.TERMS_OF_SERVICE:
        setMainTitle("Terms of Service");
        break;
      case ROUTERS.DEVICE_DROP_CAMPAIGN_POLICY:
        setMainTitle("Device Drop Campaign");
        break;
      default:
        setMainTitle("Legal Disclaimer");
    }
  };

  const handleTitleClick = (mainTitle: string) => {
    toggleMenu(mainTitle);
    switch (mainTitle) {
      case "Legal Disclaimer":
        router.push(ROUTERS.LEGAL_DISCLAIMER);
        break;
      case "Privacy Policy":
        router.push(ROUTERS.PRIVACY_POLICY);
        break;
      case "Terms of Service":
        router.push(ROUTERS.TERMS_OF_SERVICE);
        break;
      case "Device Drop Campaign":
        router.push(ROUTERS.DEVICE_DROP_CAMPAIGN_POLICY);
        break;
      default:
        break;
    }
    setSelectedNavItem(mainTitle);
  };

  useEffect(() => {
    getMainTitle();
  }, [router.pathname]);

  useEffect(() => {
    const sectionToScrollTo = localStorage.getItem("sectionToScrollTo");
    if (sectionToScrollTo) {
      scroller.scrollTo(sectionToScrollTo, {
        duration: 1000,
        delay: 0,
        offset: -100,
        smooth: "easeInOutQuart",
      });

      localStorage.removeItem("sectionToScrollTo");
    }
  }, []);

  useEffect(() => {
    switch (router.pathname) {
      case ROUTERS.LEGAL_DISCLAIMER:
        setOpenMenu("Legal Disclaimer");
        break;
      case ROUTERS.PRIVACY_POLICY:
        setOpenMenu("Privacy Policy");
        break;
      case ROUTERS.TERMS_OF_SERVICE:
        setOpenMenu("Terms of Service");
        break;
      default:
        setOpenMenu("");
    }
  }, [router.pathname]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerNav}>
        <div className={styles.navbar}>
          <Link
            onClick={() => setSelectedNavItem(ROUTERS.LEGAL_DISCLAIMER)}
            href={ROUTERS.LEGAL_DISCLAIMER}
          >
            <div
              className={`${styles.navContent} ${selectedNavItem === ROUTERS.LEGAL_DISCLAIMER
                ? styles.active
                : ""
                }`}
            >
              Legal Disclaimer
            </div>
          </Link>
          <Link
            onClick={() => setSelectedNavItem(ROUTERS.PRIVACY_POLICY)}
            href={ROUTERS.PRIVACY_POLICY}
          >
            <div
              className={`${styles.navContent} ${selectedNavItem === ROUTERS.PRIVACY_POLICY ? styles.active : ""
                }`}
            >
              Privacy Policy
            </div>
          </Link>
          <Link
            onClick={() => setSelectedNavItem(ROUTERS.TERMS_OF_SERVICE)}
            href={ROUTERS.TERMS_OF_SERVICE}
          >
            <div
              className={`${styles.navContent} ${selectedNavItem === ROUTERS.TERMS_OF_SERVICE
                ? styles.active
                : ""
                }`}
            >
              Terms of Service
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarList}>
            {menu.map((content) => (
              <div
                onClick={() => {
                  toggleMenu(content.mainTitle);
                  handleTitleClick(content.mainTitle);
                }}
                key={content.mainTitle}
              >
                <div className={styles.mainTitleWrapper}>
                  <div className={styles.mainTitle}>{content.mainTitle}</div>
                  {content.items?.length > 0 && (
                    <img src="/images/drop-down.svg" alt="hero" />
                  )}
                </div>
                {openMenu === content.mainTitle && (
                  <div className={styles.dropdown}>
                    {content.items &&
                      content.items.map((item) => (
                        <LinkScroll
                          key={item.id}
                          to={item.id}
                          offset={-100}
                          smooth={true}
                          duration={500}
                          style={{ background: "transparent" }}
                          className={`${styles.listContent} ${activeSection === item.id ? styles.active : ""
                            }`}
                        >
                          <div key={item.id} className={styles.listContent}>
                            {item.title}
                          </div>
                        </LinkScroll>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.mainTittle}> {mainTitle}</div>
          <div className={styles.bannerImage}>
            <div className={style.content}>
              <p className={style.content3}>
                The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you
                make, and the products and features you use.
              </p>

              <p className={style.content3}>
                {
                  'This privacy notice for NOTT company (doing business as NOTT) ("NOTT," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:      '
                }{" "}
              </p>
              <li>{`Visit our website at https://nott.ai, or any website of ours that links to this privacy notice`}</li>
              <li>{`Download and use our mobile application (NOTT), or any other application of ours that links to this privacy notice`}</li>
              <li>{`Engage with us in other related ways, including any sales, marketing, or events`}</li>
            </div>
            <img
              className={styles.imgPolicy}
              src="/images/banner-policy2.png"
              alt="hero"
            />
          </div>

          <div className={style.container}>
            <div className={style.contentContainer}>
              <div className={style.content}>
                <p className={style.description}>
                  Questions or concerns? Reading this privacy notice will help
                  you understand your privacy rights and choices. If you do not
                  agree with our policies and practices, please do not use our
                  Services. If you still have any questions or concerns, please
                  contact us at info@nott.ai
                </p>
                <p
                  id="collecting-information"
                  className={style.title}
                >{`1. Collecting information:`}</p>
                <p className={style.smDesc}>
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, when you participate in activities on the Services,
                  or otherwise when you contact us.
                </p>
                <ul>
                  <li>{`Name`}</li>
                  <li>{`Phone numbers`}</li>
                  <li>{`Email addresses`}</li>
                  <li>{`Gender`}</li>
                  <li>{`Nationality`}</li>
                  <li>{`Contact or authentication data`}</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={createMarkup(
                    ' … other basic personal information according to <span style="font-weight: 600">Art. 4 GDPR</span>'
                  )}
                  style={{ fontSize: "16px" }}
                  className={style.description}
                />
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(`
            ${getHighlightedText(
                    "Sensitive Information"
                  )}: When necessary, with your consent or as
            otherwise permitted by applicable law, we process the following
            categories of sensitive information:
            `)}
                />
                <ul>
                  <li>{`Financial data`}</li>
                  <li>{`Health data`}</li>
                  <li>{`Biometric data`}</li>
                </ul>
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(`
            and other special categories of personal data according to <span style="font-weight: 600">Art. 9
            GDPR</span>`)}
                />
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(`
            ${getHighlightedText(
                    "Application Data"
                  )}: If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
          `)}
                />
                <p className={style.description}>
                  {`Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's bluetooth, camera, microphone, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings. Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.`}
                </p>
                <p className={style.description}>
                  {`This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.`}
                </p>
                <p className={style.description}>
                  {`All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.`}
                </p>
              </div>

              <div className={style.content}>
                <p
                  id="processing-information"
                  className={style.title}
                >{`2. Processing of information`}</p>
                <p className={style.description}>
                  {`We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent.`}
                </p>
                <p className={style.description}>
                  {`We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:`}
                </p>
                <ul>
                  <li
                    dangerouslySetInnerHTML={createMarkup(`<span style="font-weight: 600; color: #0F244C">To facilitate account creation and authentication and otherwise
            manage user accounts.</span> We may process your information so you can
            create and log in to your account, as well as keep your account in
            working order.`)}
                  />
                  <li
                    dangerouslySetInnerHTML={createMarkup(`${getHighlightedText(
                      "Strictly limited to the purposes of analyzing health indicators, offering personalized health advice, and improving overall service quality for the benefit of our users."
                    )} In accordance with the General Data Protection Regulation (GDPR), NOTT is committed to the lawful, fair, and transparent processing of personal health data of our users. The collection, processing, and use of personal health data are conducted with the sole purpose of analyzing health indicators and providing users with valuable health-related information and insights, all aimed at benefiting the user's health and well-being. The processing of personal health data is based on explicit consent obtained from the users. Users have the right to withdraw their consent at any time without affecting the lawfulness of processing based on consent before its withdrawal. 
              ${getHighlightedText("To request feedback. ")}
              We may process your information when necessary to request feedback and to contact you about your use of our Services.
                `)}
                  />
                  <li
                    dangerouslySetInnerHTML={createMarkup(`<span style="font-weight: 600; color: #0F244C">To send you marketing and promotional communications.</span> We may process
            the personal information you send to us for our marketing purposes,
            if this is in accordance with your marketing preferences. You can
            opt out of our marketing emails at any time. <span style="font-weight: 600; color: #0F244C">To deliver targeted advertising to you.</span> We may process your
            information to develop and display personalized content and
            advertising tailored to your interests, location, and more. <span style="font-weight: 600; color: #0F244C">To save or protect an individual's vital interest.</span> We may process
            your information when necessary to save or protect an individual’s
            vital interest, such as to prevent harm.`)}
                  />
                </ul>
              </div>

              <div className={style.content}>
                <p
                  id="legal-basis"
                  className={style.title}
                >{`3. Legal basis`}</p>

                <p className={style.description}>
                  {`We may process your information if you have given us permission
            (i.e., consent) to use your personal information for a specific
            purpose. You can withdraw your consent at any time.`}
                </p>
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(`
            ${getHighlightedText("Legitimate Interests:")} We
            may process your information when we believe it is reasonably
            necessary to achieve our legitimate business interests and those
            interests do not outweigh your interests and fundamental rights and
            freedoms. For example, we may process your personal information for
            some of the purposes described in order to:
          `)}
                />

                <ul>
                  <li>
                    {`Send users information about special offers and discounts on our
              products and services`}
                  </li>
                  <li>
                    {`Develop and display personalized and relevant advertising content
              for our users`}
                  </li>
                  <li>
                    {`Understand how our users use our products and services so we can
              improve user experience`}
                  </li>
                </ul>
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(`
            ${getHighlightedText("Legal Obligations:")}
            We may process your information where we believe it is necessary for
            compliance with our legal obligations, such as to cooperate with a
            law enforcement body or regulatory agency, exercise or defend our
            legal rights, or disclose your information as evidence in litigation
            in which we are involved.`)}
                />
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(`
            ${getHighlightedText("Vital Interests:")} We may
            process your information where we believe it is necessary to protect
            your vital interests or the vital interests of a third party, such
            as situations involving potential threats to the safety of any
            person.
          `)}
                />
              </div>

              <div className={style.content}>
                <p
                  id="personal-information"
                  className={style.title}
                >{`4. Sharing personal information`}</p>
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(
                    getHighlightedText(
                      "We may need to share your personal information in the following situations:"
                    )
                  )}
                />
                <p className={style.description}>
                  {`Business Transfers. We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.`}
                </p>
              </div>

              <div className={style.content}>
                <p
                  id="cookies"
                  className={style.title}
                >{`5. Cookies & tracking technologies`}</p>
                <p className={style.description}>
                  {`We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice.`}
                </p>
              </div>

              <div className={style.content}>
                <p
                  id="storing-personal-information"
                  className={style.title}
                >{`6. Storing personal information`}</p>
                <p className={style.description}>
                  {`We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us to keep your personal information for longer
            than the period of time in which users have an account with us.`}
                </p>
                <p className={style.description}>
                  {`When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.`}
                </p>
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(
                    getHighlightedText("Keep personal information safe")
                  )}
                />
                <p className={style.description}>
                  {`We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.`}
                </p>
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(
                    getHighlightedText("Controls for do-not-track features")
                  )}
                />
                <p className={style.description}>
                  {`Most web browsers and some mobile operating systems and mobile
            applications include a do-not-track ("dnt") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing dnt signals has been finalized. As such, we do not
            currently respond to dnt browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.`}
                </p>
              </div>

              <div className={style.content}>
                <p
                  id="sharingData"
                  className={style.title}
                >{`7. Sharing data with others`}</p>
                <p className={style.description}>
                  {`We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Each service provider is a for-profit entity that processes the
            information on our behalf.`}
                </p>
                <p className={style.description}>
                  {`We may use your personal information for our own business purposes,
            such as for undertaking internal research for technological
            development and analysis for users’ goodness. This is not considered
            to be "selling" of your personal information.`}
                </p>
                <p className={style.description}>
                  {`NOTT has not disclosed or sold any personal information to third
            parties for a business or commercial purpose in the preceding twelve
            (12) months. NOTT not sell personal information in the future
            belonging to website visitors, users, and other consumers.`}
                </p>
              </div>

              <div className={style.content}>
                <p
                  id="userRight"
                  className={style.title}
                >{`8. Users’ right with their own data`}</p>
                <p className={style.italicDesc}>
                  {`Right to request deletion of the data — Request to delete:`}
                </p>
                <p className={style.description}>
                  {`
            You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
            `}
                </p>
                <p className={style.italicDesc}>
                  {`Right to be informed — Request to know:`}
                </p>
                <p
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(`
            <span style="font-weight: 600">Depending on the circumstances, you have a right to know:</span>
          `)}
                />

                <ul>
                  <li>{`Whether we collect and use your personal information`}</li>
                  <li>{`The categories of personal information that we collect`}</li>
                  <li>
                    {`The purposes for which the collected personal information is used`}
                  </li>
                  <li>
                    {`Whether we sell your personal information to third parties`}
                  </li>
                  <li>
                    {`The categories of personal information that we sold or disclosed for a business purpose`}
                  </li>
                  <li>
                    {`The categories of third parties to whom the personal information was sold or disclosed for a business purpose`}
                  </li>
                  <li>
                    {`The business or commercial purpose for collecting or selling personal information`}
                  </li>
                  <li>
                    {`In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request`}
                  </li>
                </ul>
                <p className={style.italicDesc}>
                  {`Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights`}
                </p>
                <p className={style.description}>
                  {`We will not discriminate against you if you exercise your privacy rights.`}
                </p>
                <p className={style.italicDesc}>{`Verification process`}</p>
                <p className={style.description}>
                  {`Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.`}
                </p>
                <p className={style.description}>
                  {`We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.`}
                </p>
                <p className={style.italicDesc}>{`Other privacy rights`}</p>
                <p className={style.description}>
                  <span>{`You may object to the processing of your personal information. You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA. You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission. To exercise these rights, you can contact us by email at `}</span>
                  <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>
                  <span>{` or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.`}</span>
                </p>
                <p className={style.italicDesc}>
                  {`Review, update, or delete the data collected`}
                </p>
                <p className={style.description}>
                  <span>{`Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by email `}</span>
                  <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>
                </p>
              </div>

              <div className={style.content}>
                <p
                  id="updateAndNotice"
                  className={style.title}
                >{`9. Updates and Notice`}</p>
                <p className={style.description}>
                  {`We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
