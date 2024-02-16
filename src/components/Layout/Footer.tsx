import {
  DiscordIcon,
  FooterLogo,
  TelegramIcon,
  TwitterIcon,
} from "@/assets/index";
import { INFO } from "@/constants/metas";
import useTrans from "@/hooks/useTrans";
import styles from "@/styles/Layout/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.topBlock}>
            <FooterLogo />
          </div>
          <div className={styles.centerBlock}>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.contact}</div>
              <div className={styles.subColumn}>
                <div className={styles.socialNetwork}>
                  <Link href="#">
                    <TelegramIcon />
                  </Link>
                  <Link href="#">
                    <DiscordIcon />
                  </Link>
                  <Link href={INFO.TWITTER} target="_blank">
                    <TwitterIcon />
                  </Link>
                </div>
                {/* <div dangerouslySetInnerHTML={createMarkup(INFO.ADDRESS)} />
                <div>
                  {trans.footer.callUs}{" "}
                  <a href={`tel:${INFO.PHONE}`}>{INFO.PHONE}</a>
                </div> */}
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
          <div>{trans.footer.copyRight}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
