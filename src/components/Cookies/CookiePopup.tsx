import { InfoIcon } from "@/assets";
import styles from "@/styles/Homepage/cookies-nott.module.scss";
import Cookies from "js-cookie";

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

interface CookieProps {
  handleShowDetail: Function;
  handleCloseCookieGeneral: Function;
  isShow: boolean;
}

const CookiePopup = ({
  handleShowDetail,
  isShow,
  handleCloseCookieGeneral,
}: CookieProps) => {
  const handleReject = () => {
    Cookies.set("CookieConsent", "false", { expires: 365 });
    handleCloseCookieGeneral();
  };

  const handleAccept = () => {
    Cookies.set("CookieConsent", "true", { expires: 365 });
    handleCloseCookieGeneral();
  };

  return (
    <div
      className={styles.cookieGeneral}
      style={{ display: isShow ? "" : "none" }}
    >
      <div className={styles.contentGeneralWrapper}>
        <div className={styles.headerGeneral}>We Value Your Privacy</div>
        <div className={styles.content}>
          At NOTT, your wellness journey is personal, and so is your privacy. We
          use cookies to ensure our website works efficiently, tailor your
          experience, and improve our services. By clicking "Accept," you agree
          to our use of cookies for these purposes. To enhance your experience,
          our site employs various cookies-small text files placed on your
          device.
        </div>
        <div className={styles.functionWrapper}>
          <div className={styles.details} onClick={() => handleShowDetail()}>
            <InfoIcon />
            <div className={styles.detailText}> View Details</div>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button} onClick={() => handleReject()}>
              Reject
            </div>
            <div
              className={`${styles.button} ${styles.acceptButton}`}
              onClick={() => handleAccept()}
            >
              Accept All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
