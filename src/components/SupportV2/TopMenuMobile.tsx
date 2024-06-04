import React, { useEffect, useRef } from 'react';
import { SIDE_MENU_SUPPORT, SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { Link as LinkScroll } from "react-scroll";

interface IProps {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

const scrollConfig: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center",
  inline: "center",
};

const TopMenuMobile = ({ selectedItem, setSelectedItem }: IProps) => {
  const refSystemRequirements = useRef<any>();
  const refDownloadApp = useRef<any>();
  const refRegisterLogin = useRef<any>();
  const refConnectingDevices = useRef<any>();
  const handleScrollIntoView = (id: string) => {
    setSelectedItem(id);
    switch (id) {
      case SUPPORT.SYSTEM_REQUIREMENTS:
        refSystemRequirements.current?.scrollIntoView(scrollConfig);
        break;
      case SUPPORT.IOS:
        refDownloadApp.current?.scrollIntoView(scrollConfig);
        break;
      case SUPPORT.REGISTER_LOGIN:
        refRegisterLogin.current?.scrollIntoView(scrollConfig);
        break;
      case SUPPORT.CONNECTING_DEVICES:
        refConnectingDevices.current?.scrollIntoView(scrollConfig);
        break;
      default:
        refSystemRequirements.current?.scrollIntoView(scrollConfig);
    }
  }

  return (
    <div className={styles.containerNav}>
      <div className={styles.navbar}>
        {SIDE_MENU_SUPPORT.map((menuItem) => (
          <LinkScroll
            key={menuItem.id}
            to={menuItem.id}
            offset={-250}
            smooth={true}
            delay={0}
            duration={1000}
            spy={true}
            onClick={() => handleScrollIntoView(menuItem.id)}
            onSetActive={() => setSelectedItem(menuItem.id)}
          >
            <div
              ref={
                menuItem.id === SUPPORT.SYSTEM_REQUIREMENTS
                  ? refSystemRequirements
                  : menuItem.id === SUPPORT.IOS
                    ? refDownloadApp
                    : menuItem.id === SUPPORT.REGISTER_LOGIN
                      ? refRegisterLogin
                      : refConnectingDevices
              }
              className={`${styles.navContent} ${selectedItem === menuItem.id ? styles.active : ""}`}
            >
              {menuItem.mainTitle}
            </div>
          </LinkScroll>
        ))}
      </div>
    </div>
  );
}

export default TopMenuMobile;