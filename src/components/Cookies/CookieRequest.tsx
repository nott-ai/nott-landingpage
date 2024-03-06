import { InfoIcon } from "@/assets";
import styles from "@/styles/Homepage/cookies-nott.module.scss";
// import Cookies from "js-cookie";
import CookieDetailPopup from "./CookieDetailPopup";
import CookiePopup from "./CookiePopup";
import { use, useEffect, useState } from "react";
import { VISIBLE_OPTIONS, getCookieConsentValue } from "react-cookie-consent";

const CookieRequest = () => {
  const [cookieVisibility, setCookieVisibility] = useState(
    VISIBLE_OPTIONS.HIDDEN
  );

  const [isShowGeneralCookie, setIsShowGeneralCookie] = useState(false);

  const handleShowDetailCookie = () => {
    setCookieVisibility(VISIBLE_OPTIONS.SHOW);
    setIsShowGeneralCookie(false);
  };

  const handleCloseCookie = () => {
    setCookieVisibility(VISIBLE_OPTIONS.HIDDEN);
  };

  const handleCloseCookieGeneral = () => {
    setIsShowGeneralCookie(false);
  };

  useEffect(() => {
    const cookieValue = getCookieConsentValue();
    console.log(cookieValue);
    if (cookieValue === undefined) {
      setIsShowGeneralCookie(true);
    }
  }, []);

  return (
    <div>
      <CookiePopup
        handleShowDetail={handleShowDetailCookie}
        handleCloseCookieGeneral={handleCloseCookieGeneral}
        isShow={isShowGeneralCookie}
      />
      <CookieDetailPopup
        isShow={cookieVisibility}
        handleCloseCookie={handleCloseCookie}
      />
    </div>
  );
};

export default CookieRequest;
