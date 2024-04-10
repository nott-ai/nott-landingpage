import React, { useEffect, useState } from 'react'
import { SIDE_MENU_SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { Link as LinkScroll } from "react-scroll";

interface Props {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

const SideMenuDesktop = ({
  selectedItem, setSelectedItem
}: Props) => {

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarList}>
        {SIDE_MENU_SUPPORT.map((content) => (
          <div
            key={`${content.mainTitle}`}
          >
            <LinkScroll
              to={content.id}
              offset={-200}
              smooth={true}
              duration={1000}
              spy={true}
              onSetActive={() => {
                setSelectedItem(content.id);
              }}

            >
              <div
                className={`${styles.mainTitleWrapper} ${selectedItem === content.id && content.items && content.items.length === 0 ? styles.active : ""}`}
              >
                <div className={`${styles.mainTitle} `}>
                  {content.mainTitle}
                </div>
                {content.items?.length > 0 && (
                  <img src="/images/drop-down.svg" alt="hero" />
                )}
              </div>
              {
                content.items && content.items.length > 0 && (
                  <div
                    className={`${styles.dropdown}`}
                  >
                    {content.items.map((item) => (
                      <LinkScroll
                        key={item.id}
                        to={item.id}
                        offset={-200}
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

export default SideMenuDesktop