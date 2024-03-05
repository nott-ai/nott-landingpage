import React, { useEffect, useState } from 'react'
import styles from "@/styles/Layout/policy.module.scss";
import { Link as LinkScroll, scroller } from "react-scroll";
import Link from "next/link";
import { ROUTERS } from '@/constants/routes';
import { useRouter } from 'next/router';


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
    items: [
      {
        id: "general-disclaimer",
        title: "General Disclaimer",
        description: "The information contained in this site is for general guidance on matters of interest only. The application and impact of laws can vary widely based on the specific facts involved. Given the changing nature of laws, rules and regulations, and the inherent hazards of electronic communication, there may be delays, omissions or inaccuracies in information contained in this site. Accordingly, the information on this site is provided with the understanding about the platform and products.",
      },
      {
        id: "device-usage-disclaimer",
        title: "Device Usage Disclaimer",
        description: "NOTT physical wellness products are wellness devices and not a medical device. It is intended for aiding health improvement through personalized health tracking content. If you have any medical concerns, please consult with your healthcare provider, including but not limited to, before using this device. NOTT devices are not intended to serve as a replacement for professional health care, diagnosis, treatment, or advice. NOTT company is not liable for any health issues that may arise as a result of the recommendations, activities, or other information or events you learn or experience as a result of using NOTT devices. You should read all product packaging and instructions carefully before purchasing or intending to acquire any of the products or services recommended on this website or application. YOU ACKNOWLEDGE AND AGREE THAT YOU ARE USING NOTT DEVICES AT YOUR OWN RISK. You and any of the physicians or health professionals linked with this website, application, or your use of any product or service from this website or application. Furthermore, neither this information nor any assertions on this website or application are meant to diagnose, treat, or cure any condition.",
      },
      {
        id: "health-advisory-notice",
        title: "Health Advisory Notice",
        description: "NOTT company DOES NOT OFFER ANYTHING that can be used to diagnose, treat, or prevent any medical, mental, or physical ailment. All of the information provided here is for information and educational purposes only, and it should not be construed as a personal medical device. As a result, you should not act entirely on the basis of the contents of this information. Instead, users should seek advice from qualified health professionals on any issues concerning their health and well-being. These items are not intended for symptom management or treatment, and they are not intended to be used in place of any form of therapy or treatment for any symptoms or disorders.",
      },
      {
        id: "external-links-disclaimer",
        title: "External Links Disclaimer",
        description: "Certain links in this site connect to other websites maintained by third parties over whom NOTT has no control. NOTT makes no representations as to the accuracy or any other aspect of information contained in other websites.",
      },
    ],
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
    mainTitle: "Terms & Service",
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
        title: "Collecting Information Of Website/App And Other Platforms Owned By NOTT",
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
        title: "Ownership Of Intellectual Property Rights, Trademarks And Copyrights On The Site",
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
];


const LegalDisclaimerPage = () => {
  const [openMenu, setOpenMenu] = useState('');
  const router = useRouter();
  const [mainTitle, setMainTitle] = useState('');
  const [selectedTitle] = useState(null);
  const [selectedNavItem, setSelectedNavItem] = useState(ROUTERS.LEGAL_DISCLAIMER);

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? '' : menuId);
  };

  const getMainTitle = () => {
    switch (router.pathname) {
      case ROUTERS.LEGAL_DISCLAIMER:
        setMainTitle('Legal Disclaimer');
        break;
      case ROUTERS.PRIVACY_POLICY:
        setMainTitle('Privacy Policy');
        break;
      case ROUTERS.TERMS_OF_SERVICE:
        setMainTitle('Terms of Service');
        break;
      default:
        setMainTitle('Legal Disclaimer');
    }
  }

  const handleTitleClick = (mainTitle: string) => {
    toggleMenu(mainTitle);
    switch (mainTitle) {
      case 'Legal Disclaimer':
        router.push('/legal-disclaimer');
        break;
      case 'Privacy Policy':
        router.push('/privacy-policy');
        break;
      case 'Terms & Service':
        router.push('/terms-service');
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
    const sectionToScrollTo = localStorage.getItem('sectionToScrollTo');
    if (sectionToScrollTo) {
      scroller.scrollTo(sectionToScrollTo, {
        duration: 1000,
        delay: 0,
        offset: -100,
        smooth: 'easeInOutQuart',
      });

      localStorage.removeItem('sectionToScrollTo');
    }
  }, []);

  useEffect(() => {
    switch (router.pathname) {
      case '/legal-disclaimer':
        setOpenMenu('Legal Disclaimer');
        break;
      case '/privacy-policy':
        setOpenMenu('Privacy Policy');
        break;
      case '/terms-service':
        setOpenMenu('Terms & Service');
        break;
      default:
        setOpenMenu('');
    }
  }, [router.pathname]);


  return (
    <div className={styles.wrapper}>
      <div className={styles.containerNav}>
        <div className={styles.navbar}>
          <Link onClick={() => setSelectedNavItem(ROUTERS.LEGAL_DISCLAIMER)} href={ROUTERS.LEGAL_DISCLAIMER}>
            <div className={`${styles.navContent} ${selectedNavItem === ROUTERS.LEGAL_DISCLAIMER ? styles.active : ''}`}>Legal Disclaimer</div>          </Link>
          <Link onClick={() => setSelectedNavItem(ROUTERS.PRIVACY_POLICY)} href={ROUTERS.PRIVACY_POLICY}>
            <div className={`${styles.navContent} ${selectedNavItem === ROUTERS.PRIVACY_POLICY ? styles.active : ''}`}>Privacy Policy</div>
          </Link>
          <Link onClick={() => setSelectedNavItem(ROUTERS.TERMS_OF_SERVICE)} href={ROUTERS.TERMS_OF_SERVICE}>
            <div className={`${styles.navContent} ${selectedNavItem === ROUTERS.TERMS_OF_SERVICE ? styles.active : ''}`}>Terms of Service</div>
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
                key={content.mainTitle}>
                <div className={styles.mainTitleWrapper}>
                  <div className={styles.mainTitle}>{content.mainTitle}</div>
                  <img src="/images/drop-down.svg" alt="hero" />
                </div>
                {openMenu === content.mainTitle && (
                  <div className={styles.dropdown}>
                    {content.items.map((item) => (
                      <LinkScroll
                        key={item.id}
                        to={item.id}
                        offset={-100}
                        smooth={true}
                        duration={1000}
                        style={{ background: 'transparent' }}
                      >
                        <div className={`${styles.listContent} ${selectedTitle === item.title ? styles.active : ''}`}>
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
          <div style={{marginBottom : '16px'}} className={styles.bannerImage}>
            <div className={styles.content}>
              <p  style={{ margin: '11px 0px', lineHeight: '24px' , letterSpacing: '0.01em', fontWeight: 400 }} className={styles.smDesc}>
                {`The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following`}
              </p>
              <p style={{color: '#1b1b1d', fontWeight: 500, fontSize: '16px'}} className={styles.title}>{`Basic Information`}</p>
              <p className={styles.smDesc}  style={{ margin: '11px 0px', lineHeight: '24px' , letterSpacing: '0.01em', fontWeight: 400 }}>
                {`This privacy notice for NOTT company (doing business as NOTT) ("NOTT," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:`}
              </p>
            </div>
            <img className={styles.imgPolicy} src="/images/banner-policy.png" alt="hero" />
          </div>
          <div className={styles.textContent}>
            {menu
              .filter((section) => section.mainTitle === 'Legal Disclaimer')
              .map((section) =>
                section.items.map((item) => (
                  <div key={item.id} id={item.id} className={styles.wrapperTitle}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}>{item.description}</div>
                  </div>
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  )
}



export default LegalDisclaimerPage;