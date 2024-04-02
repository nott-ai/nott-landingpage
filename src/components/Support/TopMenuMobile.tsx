import React from 'react';
import { SIDE_MENU_SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { Link as LinkScroll } from "react-scroll";

interface IProps {
  selectedItem: string;
  handleScrollIntoView: (id: string) => void;
  refs: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const TopMenuMobile = ({ selectedItem, handleScrollIntoView, refs }: IProps) => {
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
              ref={refs[menuItem.id]}
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