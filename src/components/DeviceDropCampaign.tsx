import React, { useEffect, useState } from "react";
import styles from "@/styles/Layout/device-drop-campaign.module.scss";
import { Link as LinkScroll, scroller } from "react-scroll";
import Link from "next/link";
import { ROUTERS } from "@/constants/routes";
import { useRouter } from "next/router";
import style from "@/styles/PrivacyPolicy/privacy-policy.module.scss";
import { createMarkup } from "@/utils";


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

const DeviceDropCampaign = () => {
  const [openMenu, setOpenMenu] = useState("");
  const router = useRouter();
  const [mainTitle, setMainTitle] = useState("");
  const [selectedTitle] = useState(null);
  const [selectedNavItem, setSelectedNavItem] = useState(
    ROUTERS.DEVICE_DROP_CAMPAIGN_POLICY
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
      case ROUTERS.DEVICE_DROP_CAMPAIGN_POLICY:
        setOpenMenu("Device Drop Campaign");
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
            </div>{" "}
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
          <Link
            onClick={() => setSelectedNavItem(ROUTERS.DEVICE_DROP_CAMPAIGN_POLICY)}
            href={ROUTERS.TERMS_OF_SERVICE}
          >
            <div
              className={`${styles.navContent} ${selectedNavItem === ROUTERS.DEVICE_DROP_CAMPAIGN_POLICY
                ? styles.active
                : ""
                }`}
            >
              Device Drop Campaign
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
                          duration={1000}
                          style={{ background: "transparent" }}
                        >
                          <div
                            className={`${styles.listContent} ${selectedTitle === item.title ? styles.active : ""
                              }`}
                          >
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
        <div style={{ padding: '20px', boxSizing: 'border-box' }} className={style.container}>
          <div className={style.contentContainer}>
            <div className={style.content}>
              <p
                id="collecting-information"
                className={style.title}
              >{`Terms of Service (ToS)`}</p>
              <p
                id="collecting-information"
                className={style.title}
              >{`Introduction`}</p>
              <p className={style.smDesc}>
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
                className={style.title}
              >{`Privacy Policy`}</p>
              <p
                id="collecting-information"
                className={style.title}
              >{`Introduction`}</p>
              <p className={style.smDesc}>
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
              <p className={style.smDesc}>
                {`By participating in the NOTT Device-Drop Campaign and completing the eKYC process, you consent to these terms and our handling of your information as described. For questions or concerns, please contact our support team.`}
              </p>
              <p className={style.smDesc}>
                {`This ToS and Privacy Policy are designed to meet general legal requirements and protect both the users' rights and NOTT's interests. Depending on the jurisdiction, additional clauses or adjustments may be necessary to comply with local laws and regulations.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDropCampaign;
