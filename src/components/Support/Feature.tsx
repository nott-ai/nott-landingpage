import { GUIDELINE, SIDE_MENU_SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { Element } from "react-scroll";
import Hero from "./Hero";
const Feature: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState({});
  const [selectedItem, setSelectedItem] = useState("systemRequirements");

  const toggleDropDown = (id: string) => {
    setOpenDropdown((prevOpen) => prevOpen === id ? null : id);
  };

  useEffect(() => {
    const sectionToScrollTo = localStorage.getItem("sectionToScrollTo");
    if (sectionToScrollTo) {
      scroller.scrollTo(sectionToScrollTo, {
        duration: 1000,
        delay: 0,
        offset: -100,
        smooth: "easeInOutQuart",
      });

      localStorage.removeItem("sectionToScrollTo");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerNav}>
        <div className={styles.navbar}>
          <LinkScroll
            to={'systemRequirements'}
            offset={-100}
            smooth={true}
            duration={1000}
            spy={true}
          >
            <div
              className={`${styles.navContent} ${selectedItem === "systemRequirements" ? styles.active : ""}`}
            >
              System Requirements
            </div>{" "}
          </LinkScroll>
          <LinkScroll
            to={'ios'}
            offset={-100}
            smooth={true}
            duration={1000}
            spy={true}
          >
            <div
              className={`${styles.navContent} ${selectedItem === "ios" ? styles.active : ""}`}
            >
              Download NOTT Application
            </div>{" "}
          </LinkScroll>
          <LinkScroll
            to={'registerLogin'}
            offset={-100}
            smooth={true}
            duration={1000}
            spy={true}
          >
            <div
              className={`${styles.navContent} ${selectedItem === "registerLogin" ? styles.active : ""}`}
            >
              Register & Login with Passkey
            </div>{" "}
          </LinkScroll>
          <LinkScroll
            to={'connectingDevices1'}
            offset={-100}
            smooth={true}
            duration={1000}
            spy={true}
          >
            <div
              className={`${styles.navContent} ${selectedItem === "connectingDevices1" ? styles.active : ""}`}
            >
              Connecting Devices
            </div>{" "}
          </LinkScroll>
        </div>
      </div>
      <Hero />
      <div className={styles.container}>
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
                    toggleDropDown(content.id);
                  }}
                  style={{ background: "transparent" }}
                  onClick={() => {
                    toggleDropDown(content.id);
                    setSelectedItem(content.id);
                  }}                >
                  <div className={`${styles.mainTitleWrapper} ${selectedItem === content.id ? styles.active : ""}`}>
                    <div className={`${styles.mainTitle} ${selectedItem === content.id ? styles.active : ""}`}>
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
                            style={{ background: "transparent" }}
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
        </div>
        <div className={styles.rightBlock}>
          <div>
            <div className={styles.mainTitle}>1.System Requirements</div>
            <div className={styles.textContent}>
              To ensure the optimal performance and security of the NOTT application, it is necessary to use devices operating on compatible system software.
            </div>
            <div className={styles.textContent}>
              &bull; For users with iOS devices, the application requires iOS 16.5 or later.                </div>
            <div className={styles.textContent}>
              &bull; For users with Android devices,  the application requires Android 11 or later.                </div>
          </div>

          <div>
            {GUIDELINE.map((content) => (
              <>
                <Element name={content.id} key={content.id}>
                  <div id={content.id} key={content.mainTitle} className={styles.mainTitle}>{content.mainSection}</div>
                  {content.mainTitle && <div className={styles.highlightTitle}>&bull; {content.mainTitle}</div>}
                  <div className={styles.wrapper}>
                    {content.items.map((item) => (
                      <div key={item.id} id={item.id} className={styles.item}>
                        <div className={styles.wrapperGuide}>
                          <div className={styles.content}>
                            <div className={styles.title}>
                              {item.title}
                            </div>
                            <div className={styles.textContent}>
                              {item.description}
                            </div>
                          </div>
                          {item.image && <img className={styles.image} src={item.image} alt="hero" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </Element>
              </>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
