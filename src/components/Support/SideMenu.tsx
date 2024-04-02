import React from 'react'
import { SIDE_MENU_SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { Link as LinkScroll } from "react-scroll";

interface Props {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  openDropdown: any;
  toggleDropDown: (id: string) => void;
}

const SideMenu = ({
  selectedItem, setSelectedItem, openDropdown, toggleDropDown
}: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarList}>
        {SIDE_MENU_SUPPORT.map((content) => (
          <div
            key={content.mainTitle}
          >
            <LinkScroll
              to={content.id}
              offset={-100}
              smooth={true}
              duration={1000}
              spy={true}
              onSetActive={() => {
                setSelectedItem(content.id);
              }}
            >
              <div
                onClick={() => toggleDropDown(content.id)}
                className={`${styles.mainTitleWrapper} ${selectedItem === content.id ? styles.active : ""}`}>
                <div className={`${styles.mainTitle}`}>
                  {content.mainTitle}
                </div>
                {content.items?.length > 0 && (
                  <img src="/images/drop-down.svg" alt="hero" />
                )}
              </div>
              {openDropdown === content
                .id && content.items && content.items.length >= 1 && (
                  <div
                    className={`${styles.dropdown}`}
                  >
                    {content.items.map((item) => (
                      <LinkScroll
                        key={item.id}
                        to={item.id}
                        offset={-100}
                        smooth={true}
                        duration={1000}
                        spy={true}
                        onSetActive={() => {
                          setSelectedItem(item.id);
                        }}
                        onClick={() => setSelectedItem(item.id)}
                      >
                        <div
                          className={`${styles.listContent} ${selectedItem === item.id ? styles.active : ""}`}
                        >
                          {item.title}
                        </div>
                      </LinkScroll>
                    ))}
                  </div>
                )}
            </LinkScroll>
          </div>
        ))}
      </div>
    </div>)
}

export default SideMenu