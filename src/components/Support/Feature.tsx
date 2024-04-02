import { GUIDELINE, SIDE_MENU_SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { useEffect, useRef, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { Element } from "react-scroll";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const scrollConfig: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center",
  inline: "center",
};

const Feature: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState({});
  const [selectedItem, setSelectedItem] = useState("systemRequirements");
  const refSystemRequirements = useRef<any>();
  const refIOS = useRef<any>();
  const refRegisterLogin = useRef<any>();
  const refConnectingDevices1 = useRef<any>();

  const toggleDropDown = (id: string) => {
    if (openDropdown === id) {
      setOpenDropdown({});
    } else {
      setOpenDropdown(id);
    }
  };

  const handleScrollIntoView = (id: string) => {
    switch (id) {
      case "systemRequirements":
        refSystemRequirements.current?.scrollIntoView(scrollConfig);
        break;
      case "iOS":
        refIOS.current?.scrollIntoView(scrollConfig);
        break;
      case "registerLogin":
        refRegisterLogin.current?.scrollIntoView(scrollConfig);
        break;
      case "connectingDevices1":
        refConnectingDevices1.current?.scrollIntoView(scrollConfig);
        break;
      default:
        refSystemRequirements.current?.scrollIntoView(scrollConfig);
    }
  }

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
    <div className={`${styles.wrapper}`}>
      <Navbar
        selectedItem={selectedItem}
        handleScrollIntoView={handleScrollIntoView}
        refs={{
          systemRequirements: refSystemRequirements,
          iOS: refIOS,
          registerLogin: refRegisterLogin,
          connectingDevices1: refConnectingDevices1,
        }}
      />
      <Hero />
      <div className={styles.container}>
        <Sidebar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          toggleDropDown={toggleDropDown}
          openDropdown={openDropdown}
        />
        <div className={styles.rightBlock}>
          <div className={styles.userManual}>User Manual</div>
          <div>
            {GUIDELINE.map((content) => (
              <>
                {
                  content.id === "systemRequirements" && (
                    <>
                      <Element name={content.id} key={content.id}>
                        <div className={styles.textContent}>
                          <div className={styles.mainTitle}>1.System Requirements</div>
                          To ensure the optimal performance and security of the NOTT application, it is necessary to use devices operating on compatible system software.
                          <br />
                          &bull; For users with iOS devices, the application requires iOS 16.5 or later.
                          <br />
                          &bull; For users with Android devices, the application requires Android 11 or later.
                        </div>
                      </Element>
                    </>
                  )
                }
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
                          {item.image && <img className={styles.image} src={item.image} loading="lazy" alt="hero" />}
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
