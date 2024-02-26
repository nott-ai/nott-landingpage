import {
  DiscordIcon,
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/assets/index";
import { INFO } from "@/constants/metas";
import useTrans from "@/hooks/useTrans";
import { orbitron } from "@/pages/_app";
import styles from "@/styles/Layout/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const trans = useTrans();
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.joinNOTT}>
            <div>
              <div className={`${styles.title} ${orbitron.className}`}>
                Joining The Waitlist now!
              </div>
              <div className={styles.description}>
                {`Be the first to receive the latest updates on NOTT's innovative products and offerings`}
              </div>
            </div>
            <div className={styles.joinBtn}>Join The Waitlist</div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.centerBlock}>
            <div className={`${styles.column} ${styles.contact}`}>
              <img
                onClick={scrollToTop}
                className={styles.footerLogo}
                src="/images/footer-logo.svg"
                alt="logo"
              />
              <div className={`${styles.subColumn} ${styles.logo}`}>
                <div className={styles.description}>
                  Your Gateway to a Healthier Tomorrow
                </div>
                <div className={styles.email}>
                  <EmailIcon />
                  <div>
                    Contact Us:{" "}
                    <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightBlock}>
              <div className={`${styles.column} ${styles.learn}`}>
                <div className={styles.title}>Learn</div>
                <div className={styles.subColumn}>
                  <Link href="#">{trans.footer.company} </Link>
                  <Link href={INFO.BLOG} target="_blank">
                    {trans.footer.blog}{" "}
                  </Link>
                  <Link href="#">DePIN </Link>
                  <Link href="#">Wellness </Link>
                  <Link href="#">White Paper </Link>
                </div>
              </div>

              <div className={`${styles.column} ${styles.document}`}>
                <div className={styles.title}>{trans.footer.documents}</div>
                <div className={styles.subColumn}>
                  <Link href="#">{trans.footer.term} </Link>
                  <Link href="#">{trans.footer.privacyPolicy} </Link>
                  <Link href="#">{trans.footer.legalDisclaimer} </Link>
                </div>
              </div>


              <div className={`${styles.column} ${styles.networkColumn}`}>
                <div className={styles.title}>Get in touch</div>
                <div className={styles.socialNetwork}>
                  <Link href="#">
                    <TelegramIcon />
                  </Link>
                  <Link href="#">
                    <DiscordIcon />
                  </Link>
                  <Link href="#">
                    <FacebookIcon />
                  </Link>
                  <Link href="#">
                    <TwitterIcon />
                  </Link>
                  <Link href="#">
                    <LinkedinIcon />
                  </Link>
                  <Link href="#">
                    <GithubIcon />
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.copyRight}>
            © 2018-2024 Healthy And Happy Life JSC. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
