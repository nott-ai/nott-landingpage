import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/assets/index";
import { INFO } from "@/constants/metas";
import { ROUTERS } from "@/constants/routes";
import { SOCIAL_LINK } from "@/constants/social";
import useTrans from "@/hooks/useTrans";
import styles from "@/styles/Layout/footer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useDeviceDetect from "../common/DeviceDetect";

const Footer = () => {
  const trans = useTrans();
  const router = useRouter();
  const { isMobile } = useDeviceDetect();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {!router.pathname.includes("/ekyc") ? (
        <footer className={styles.wrapper}>
          <div className={styles.container}>
            <div className={`${styles.column} ${styles.contact}`}>
              <img
                onClick={scrollToTop}
                className={styles.footerLogo}
                src="/images/footer-logo.svg"
                alt="logo"
              />
              <div
                className={`${styles.subColumn} ${styles.socialMediaWrapper}`}
              >
                <p className={styles.socialMedia}>Social Media:</p>

                <div className={styles.socialNetwork}>
                  <Link target="_blank" href={SOCIAL_LINK.GITHUB}>
                    <GithubIcon />
                  </Link>
                  <Link target="_blank" href={SOCIAL_LINK.TELEGRAM}>
                    <TelegramIcon />
                  </Link>
                  <Link target="_blank" href={SOCIAL_LINK.DISCORD}>
                    <DiscordIcon />
                  </Link>
                  <Link target="_blank" href={SOCIAL_LINK.FACEBOOK}>
                    <FacebookIcon />
                  </Link>
                  <Link target="_blank" href={SOCIAL_LINK.X}>
                    <TwitterIcon />
                  </Link>
                </div>
                <div className={styles.contactUsMobile}>
                  Contact us{" "}
                  <a href="mailto:info@nott.ai" className={styles.email}>
                    info@nott.ai
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={`${styles.column} ${styles.learn}`}>
                <p className={styles.title}>Learn</p>
                <div className={styles.subColumn}>
                  <Link href={ROUTERS.ABOUT_US}>About us</Link>
                  <Link href={ROUTERS.PRODUCTS_AND_SERVICES}>
                    Products & Services
                  </Link>
                  <Link href={ROUTERS.TECHNOLOGY_AND_INNOVATION}>
                    Technology & Innovation
                  </Link>
                </div>
              </div>

              <div className={`${styles.column} ${styles.documents}`}>
                <p className={styles.title}>{trans.footer.legalDocuments}</p>
                <div className={styles.subColumn}>
                  <Link href={ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER}>
                    Legal Disclaimer
                  </Link>
                  <Link href={ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY}>
                    Privacy Policy
                  </Link>
                  <Link href={ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE}>
                    Terms of Services{" "}
                  </Link>
                  <Link
                    href={ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN}
                  >
                    Device Drop Campaign
                  </Link>
                </div>
              </div>

              <div className={`${styles.column} ${styles.support}`}>
                <p className={styles.title}>Support</p>

                {isMobile ? (
                  <>
                    <a href={INFO.WHITE_PAPER} target="_blank">
                      FAQS
                    </a>
                    <a href={INFO.WHITE_PAPER} target="_blank">
                      Whitepaper
                    </a>
                    <div>
                      Help & Support{" "}
                      <a href="mailto:info@nott.ai" className={styles.email}></a>
                    </div>
                  </>
                ) : (
                  <div className={styles.subColumn}>
                    <a href={ROUTERS.ABOUT_US}>
                      FAQs
                    </a>

                    <a href={INFO.WHITE_PAPER} target="_blank">
                      Whitepaper
                    </a>

                    <a href={ROUTERS.SUPPORT}>
                      Help & Support
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.bottomBlock}>
            <div className={styles.copyRight}>
              <p className={styles.content}>
                © 2018-2024 NOTT Foundation. All rights reserved
              </p>
            </div>
          </div>
        </footer>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Footer;
