import { SIDE_MENU } from "@/constants/legal-and-compliance";
import { ROUTERS } from "@/constants/routes";
import styles from "@/styles/Layout/legal-and-compliance.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

interface IProps {
  children: React.ReactNode;
}
const LegalAndCompliance: React.FC<IProps> = ({ children }: IProps) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState("");
  const [selectedNavItem, setSelectedNavItem] = useState(
    ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER
  );
  const [selectedTitle] = useState(null);
  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? "" : menuId);
  };

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
    handleRouterChange(router.pathname);
  }, [router.pathname]);

  const handleRouterChange = (pathname: string) => {
    switch (pathname) {
      case ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER:
        setOpenMenu("Legal Disclaimer");
        break;

      case ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY:
        setOpenMenu("Privacy Policy");
        break;

      case ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE:
        setOpenMenu("Terms of Service");
        break;

      case ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN:
        setOpenMenu("Device Drop Campaign");
        break;

      default:
        setOpenMenu("Legal Disclaimer");
    }
  };

  const handleTitleClick = (mainTitle: string) => {
    toggleMenu(mainTitle);
    switch (mainTitle) {
      case "Legal Disclaimer":
        router.push(ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER);
        break;
      case "Privacy Policy":
        router.push(ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY);
        break;
      case "Terms of Service":
        router.push(ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE);
        break;
      case "Device Drop Campaign":
        router.push(ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN);
        break;
      default:
        break;
    }
    setSelectedNavItem(mainTitle);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerNav}>
        <div className={styles.navbar}>
          <Link
            onClick={() =>
              setSelectedNavItem(ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER)
            }
            href={ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER}
          >
            <div
              className={`${styles.navContent} ${
                selectedNavItem ===
                ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER
                  ? styles.active
                  : ""
              }`}
            >
              Legal Disclaimer
            </div>{" "}
          </Link>
          <Link
            onClick={() =>
              setSelectedNavItem(ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY)
            }
            href={ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY}
          >
            <div
              className={`${styles.navContent} ${
                selectedNavItem === ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY
                  ? styles.active
                  : ""
              }`}
            >
              Privacy Policy
            </div>
          </Link>
          <Link
            onClick={() =>
              setSelectedNavItem(ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE)
            }
            href={ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE}
          >
            <div
              className={`${styles.navContent} ${
                selectedNavItem ===
                ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE
                  ? styles.active
                  : ""
              }`}
            >
              Terms of Service
            </div>
          </Link>
          <Link
            onClick={() =>
              setSelectedNavItem(
                ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN
              )
            }
            href={ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN}
          >
            <div
              className={`${styles.navContent} ${
                selectedNavItem ===
                ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN
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
            {SIDE_MENU.map((content) => (
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
                            className={`${styles.listContent} ${
                              selectedTitle === item.title ? styles.active : ""
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
        <div className={styles.rightBlock}>{children}</div>
      </div>
    </div>
  );
};

export default LegalAndCompliance;
