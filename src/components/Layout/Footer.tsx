import {
  DiscordIcon,
  FooterLogo,
  TelegramIcon,
  TwitterIcon,
} from "@/assets/index";
import { INFO } from "@/constants/metas";
import useTrans from "@/hooks/useTrans";
import styles from "@/styles/Layout/footer.module.scss";
import { createMarkup } from "@/utils/index";
import Link from "next/link";

const Footer = () => {
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.topBlock}>
            <FooterLogo />
            <div className={styles.rightBlock}>
              <Link href="#">
                <TelegramIcon />
              </Link>
              <Link href="#">
                <DiscordIcon />
              </Link>
              <Link href="#">
                <TwitterIcon />
              </Link>
            </div>
          </div>
          <div className={styles.centerBlock}>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.about}</div>
              <div className={styles.subColumn}>
                <Link href="#">{trans.footer.company} </Link>
                <Link href="#">{trans.footer.careers} </Link>
                <Link href="#">{trans.footer.blog} </Link>
                <Link href="#">{trans.footer.communinites} </Link>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.services}</div>
              <div className={styles.subColumn}>
                <Link href="#">{trans.footer.token} </Link>
                <Link href="#">{trans.footer.healthCare} </Link>
                <Link href="#">{trans.footer.purchaseProducts} </Link>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.help}</div>
              <div className={styles.subColumn}>
                <Link href="#">{trans.footer.faqs} </Link>
                <Link href="#">{trans.footer.social} </Link>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>{trans.footer.contact}</div>
              <div className={styles.subColumn}>
                <div dangerouslySetInnerHTML={createMarkup(INFO.ADDRESS)} />
                <div>
                  {trans.footer.callUs}{" "}
                  <a href={`tel:${INFO.PHONE}`}>{INFO.PHONE}</a>
                </div>
                <div>{INFO.EMAIL}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <div>{trans.footer.copyRight}</div>
          <div className={styles.rightBlock}>
            <Link href="#">{trans.footer.term}</Link>
            <Link href="#">{trans.footer.privacyPolicy}</Link>
            <Link href="#">{trans.footer.legalDisclaimer}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
