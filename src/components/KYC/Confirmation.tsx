import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  MailAlertIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/assets";
import { SOCIAL_LINK } from "@/constants/social";
import styles from "@/styles/Ekyc/apply-ekyc.module.scss";
import Link from "next/link";

const Confirmation = () => {
  return (
    <div className={`${styles.wrapper} ${styles.confirmation}`}>
      <div className={styles.container}>
        <MailAlertIcon />
        <p className={styles.title}>
          Your Path to Wellness:
          <br /> Quick KYC Process
        </p>
        <p className={styles.description}>
          Thank you for your interest in participating in the eKYC process. We
          have successfully received your eKYC submission.
          <br />
          <br />
          To complete the final step of the verification process, please find
          the link in your email to verify your email.
        </p>
        <p className={styles.contact}>Contact</p>
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
      </div>
      <div className={styles.footer}>
        © 2018-2024 NOTT Foundation. All rights reserved
      </div>
    </div>
  );
};

export default Confirmation;
