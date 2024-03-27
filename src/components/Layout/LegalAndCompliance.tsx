import { SIDE_MENU } from "@/constants/legal-and-compliance";
import { ROUTERS } from "@/constants/routes";
import styles from "@/styles/Layout/legal-and-compliance.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const scrollConfig = {
  behavior: "smooth",
  block: "center",
  inline: "center",
};
interface IProps {
  children: React.ReactNode;
}
const LegalAndCompliance: React.FC<IProps> = ({ children }: IProps) => {
  const router = useRouter();
  const [selectedNavItem, setSelectedNavItem] = useState(
    ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER
  );

  const [selectedTitle] = useState(null);
  const toggleMenu = (menuRouter: string) => {
    if (selectedNavItem && selectedNavItem !== menuRouter) {
      router.push(menuRouter);
    } else if (selectedNavItem === menuRouter) {
      setSelectedNavItem("");
    } else {
      router.push(menuRouter);
      setSelectedNavItem(menuRouter);
    }
  };
  const refLegalAndDisclaimer = useRef<any>();
  const refPrivacyPolicy = useRef<any>();
  const refTermsOfService = useRef<any>();
  const refDeviceDropCampaign = useRef<any>();

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
    setSelectedNavItem(pathname);

    switch (pathname) {
      case ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER:
        refLegalAndDisclaimer.current.scrollIntoView(scrollConfig);
        break;

      case ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY:
        refPrivacyPolicy.current.scrollIntoView(scrollConfig);
        break;

      case ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE:
        refTermsOfService.current.scrollIntoView(scrollConfig);
        break;

      case ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN:
        refDeviceDropCampaign.current.scrollIntoView(scrollConfig);
        break;

      default:
        refLegalAndDisclaimer.current.scrollIntoView(scrollConfig);
    }
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
            ref={refLegalAndDisclaimer}
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
            ref={refPrivacyPolicy}
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
            ref={refTermsOfService}
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
            ref={refDeviceDropCampaign}
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
                  toggleMenu(content.router);
                }}
                key={content.mainTitle}
              >
                <div className={styles.mainTitleWrapper}>
                  <div className={styles.mainTitle}>{content.mainTitle}</div>
                  {content.items?.length > 0 && (
                    <img src="/images/drop-down.svg" alt="hero" />
                  )}
                </div>
                {content.items && content.items.length >= 1 && (
                  <div
                    className={`${styles.dropdown}`}
                    style={{
                      height: content.router !== selectedNavItem ? 0 : 450,
                    }}
                  >
                    {content.items.map((item) => (
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
