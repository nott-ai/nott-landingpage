import { useState } from "react";
import CookieConsent, { VISIBLE_OPTIONS } from "react-cookie-consent";
import CookieButton from "./CookieButton";
import { CloseCookieIcon } from "@/assets";
import styles from "@/styles/Homepage/cookies-nott.module.scss";

const cookiesContents = [
  {
    title: "Necessary Cookies:",
    content: `Vital for website functionality, enabling basic features like secure navigation and access. These cookies are always active to ensure our website operates correctly.`,
  },
  {
    title: "Preferences Cookies:",
    content: `These cookies remember your settings and preferences (like your preferred language or region), making your experience more personalized and convenient. You have the choice to enable or disable these cookies.`,
  },
  {
    title: "Analytics Cookies:",
    content: `We use these to understand how visitors interact with our site, which helps us improve our services and website performance. Your consent is sought to use these cookies, and you can opt-in or opt-out at any time.`,
  },
  {
    title: "Marketing Cookies:",
    content: `Aimed at providing you with ads tailored to your interests, these cookies track your online activities to offer relevant advertising. You have full control over accepting or declining these cookies.`,
  },
  {
    title: "Social Media Cookies:",
    content: `Set by social media services integrated into our website, these allow you to share our content with your networks. They may track your browser activity elsewhere to build a profile of your interests.`,
  },
];

const CookiePopup = () => {
  const [cookieVisibility, setCookieVisibility] = useState(
    VISIBLE_OPTIONS.BY_COOKIE_VALUE
  );

  const handleCloseCookie = () => {
    setCookieVisibility(VISIBLE_OPTIONS.HIDDEN);
  };
  return (
    <CookieConsent
      disableStyles={true}
      enableDeclineButton
      location="none"
      visible={cookieVisibility}
      disableButtonStyles
      containerClasses={styles.cookieBanner}
      buttonText={<CookieButton type="accept" />}
      declineButtonText={<CookieButton type="reject" />}
      buttonClasses={styles.acceptButton}
      declineButtonClasses={styles.declineButton}
      buttonWrapperClasses={styles.buttonWrapper}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.wrapperHeader}>
          <div className={styles.title}>
            Cookies and related technologies on this site
          </div>
          <div className={styles.closeIcon} onClick={() => handleCloseCookie()}>
            <CloseCookieIcon />
          </div>
        </div>
        <div className={styles.line} />
        {cookiesContents.map((item) => (
          <div className={styles.wrapperItem}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        ))}
        <div className={styles.line} />
      </div>
    </CookieConsent>
  );
};

export default CookiePopup;
