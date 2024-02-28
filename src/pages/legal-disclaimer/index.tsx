import React, { useEffect, useState } from 'react'
import styles from "@/styles/Layout/policy.module.scss";
import { Link as LinkScroll } from "react-scroll";
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
        id: "privacy-policy",
        title: "Policy",
        description: "This Privacy Policy describes how NOTT collects, uses, and shares information about you. This Privacy Policy applies to information we collect when you use our websites, mobile applications, and other online products and services (collectively, the “Services”) or when you otherwise interact with us.",
      },
    ],
  },
  {
    mainTitle: "Terms & Service",
    items: [
      {
        id: "terms-of-service",
        title: "Terms",
        description: <></>,
      },
    ],
  },
];


const LegalDisclaimerPage = () => {
  const [openMenu, setOpenMenu] = useState('');
  const router = useRouter();
  const [mainTitle, setMainTitle] = useState('');
  const [activeSection] = useState();
  const [selectedNavItem, setSelectedNavItem] = useState(ROUTERS.LEGAL_DISCLAIMER);

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? '' : menuId);
  };

  useEffect(() => {
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
  }, [router.pathname]);

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.containerNav}>
        <div className={styles.navbar}>
          <Link onClick={() => setSelectedNavItem(ROUTERS.LEGAL_DISCLAIMER)} href={ROUTERS.LEGAL_DISCLAIMER}>
            <div className={`${styles.navContent} ${selectedNavItem === ROUTERS.LEGAL_DISCLAIMER ? styles.active : ''}`}>Legal Disclaimer</div>
          </Link>
          <Link onClick={() => setSelectedNavItem(ROUTERS.PRIVACY_POLICY)} href={ROUTERS.PRIVACY_POLICY}>
            <div className={`${styles.navContent} ${selectedNavItem === ROUTERS.PRIVACY_POLICY ? styles.active : ''}`}>Privacy Policy</div>
          </Link>
          <Link onClick={() => setSelectedNavItem(ROUTERS.TERMS_OF_SERVICE)} href={ROUTERS.TERMS_OF_SERVICE}>
            <div className={`${styles.navContent} ${selectedNavItem === ROUTERS.TERMS_OF_SERVICE ? styles.active : ''}`}>Terms of Service</div>
          </Link>
        </div>
      </div> */}
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarList}>
            {menu.map((content) => (
              <div key={content.mainTitle}>
                <div
                  onClick={() => toggleMenu(content.mainTitle)}
                  className={styles.mainTitleWrapper}
                >
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
                        duration={500}
                        style={{ background: 'transparent' }}
                        className={`${styles.listContent} ${activeSection === item.id ? styles.active : ''}`}
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