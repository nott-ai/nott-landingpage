import React, { useRef } from 'react';
import { SIDE_MENU_SUPPORT, SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { Link as LinkScroll } from "react-scroll";

interface IProps {
  selectedItem: string;
}

const scrollConfig: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center",
  inline: "center",
};

const TopMenuMobile = ({ selectedItem }: IProps) => {
  const refSystemRequirements = useRef<any>();
  const refIOS = useRef<any>();
  const refRegisterLogin = useRef<any>();
  const refConnectingDevices1 = useRef<any>();
  const handleScrollIntoView = (id: string) => {
    switch (id) {
      case SUPPORT.SYSTEM_REQUIREMENTS:
        refSystemRequirements.current?.scrollIntoView(scrollConfig);
        break;
      case SUPPORT.IOS:
        refIOS.current?.scrollIntoView(scrollConfig);
        break;
      case SUPPORT.REGISTER_LOGIN:
        refRegisterLogin.current?.scrollIntoView(scrollConfig);
        break;
      case SUPPORT.CONNECTING_DEVICES:
        refConnectingDevices1.current?.scrollIntoView(scrollConfig);
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
            offset={0}
            smooth={true}
            delay={-100}
            duration={1000}
            spy={true}
            onClick={() => handleScrollIntoView(menuItem.id)}
          >
            <div
            ref={ 
              menuItem.id === SUPPORT.SYSTEM_REQUIREMENTS ? refSystemRequirements :
              menuItem.id === SUPPORT.IOS ? refIOS :
              menuItem.id === SUPPORT.REGISTER_LOGIN ? refRegisterLogin :
              menuItem.id === SUPPORT.CONNECTING_DEVICES ? refConnectingDevices1 : null
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