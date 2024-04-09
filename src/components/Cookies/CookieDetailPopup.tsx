import React, { useEffect, useRef } from "react";
import CookieConsent, { VISIBLE_OPTIONS } from "react-cookie-consent";
import CookieButton from "./CookieButton";
import { CloseCookieIcon } from "@/assets";
import styles from "@/styles/Homepage/cookies-nott.module.scss";
import ReactModal from "react-modal";
const customStyles: any = {
  content: {
    top: "10%",
    left: "0",
    right: "auto",
    padding: "0",
    bottom: "auto",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    borderRadius: "0",
    border: "none",
    backgroundSize: "contain",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    zIndex: 130,
  },
};
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

interface CookieDetailProps {
  isShow: string;
  handleCloseCookie: Function;
}

const CookieDetailPopup = ({
  isShow = VISIBLE_OPTIONS.HIDDEN,
  handleCloseCookie,
}: CookieDetailProps) => {
  const modalRef = useRef<any>(null);
  useEffect(() => {
    const preventTouchMove = (e: TouchEvent) => {
      if (
        modalRef.current &&
        modalRef.current.contains &&
        !modalRef.current.contains(e.target)
      ) {
        e.preventDefault();
      }
    };
    if (isShow !== VISIBLE_OPTIONS.HIDDEN) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventTouchMove);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("touchmove", preventTouchMove);
    };
  }, [isShow]);
  return (
    <ReactModal
      isOpen={isShow === VISIBLE_OPTIONS.HIDDEN ? false : true}
      onRequestClose={() => {
        handleCloseCookie();
      }}
      style={customStyles}
      ref={modalRef}
      overlayClassName={styles.overlay}
    >
      <CookieConsent
        disableStyles={true}
        enableDeclineButton
        onAccept={() => {
          handleCloseCookie();
        }}
        onDecline={() => {
          handleCloseCookie();
        }}
        location="none"
        visible={isShow}
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
            <div
              className={styles.closeIcon}
              onClick={() => handleCloseCookie()}
            >
              <CloseCookieIcon />
            </div>
          </div>
          <div className={styles.line} />
          {cookiesContents.map((item, index) => (
            <div key={index} className={styles.wrapperItem}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.content}>{item.content}</div>
            </div>
          ))}
          <div className={styles.line} />
        </div>
      </CookieConsent>
    </ReactModal>
  );
};

export default CookieDetailPopup;
