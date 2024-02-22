import { DiscordIcon, TelegramIcon, TwitterIcon } from "@/assets/index";
import { INFO } from "@/constants/metas";
import useTrans from "@/hooks/useTrans";
import styles from "@/styles/Layout/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.joinNOTT}>
            <div>
              <div className={styles.title}>Joining The Waitlist now!</div>
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
              <img src="/images/footer-logo.svg" alt="logo" />
              <div className={styles.subColumn}>
                <div>
                  Your Gateway <br /> to a Healthier Tomorrow
                </div>
                <a href={`mailto:${INFO.EMAIL}`}>{INFO.EMAIL}</a>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.about}</div>
              <div className={styles.subColumn}>
                <Link href="#">{trans.footer.company} </Link>
                <Link href={INFO.BLOG} target="_blank">
                  {trans.footer.blog}{" "}
                </Link>
                <Link href="#">{trans.footer.faqs} </Link>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.services}</div>
              <div className={styles.subColumn}>
                <Link href="#">{trans.footer.token} </Link>
                <Link href="#">{trans.footer.healthCare} </Link>
                <Link href="#">{trans.footer.productShowcase} </Link>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.documents}</div>
              <div className={styles.subColumn}>
                <Link href="#">{trans.footer.term} </Link>
                <Link href="#">{trans.footer.privacyPolicy} </Link>
                <Link href="#">{trans.footer.legalDisclaimer} </Link>
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
