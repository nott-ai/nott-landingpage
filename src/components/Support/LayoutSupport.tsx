import styles from "@/styles/Support/features.module.scss";
import { useEffect, useRef, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import Hero from "./Hero";
import TopMenuMobile from "./TopMenuMobile";
import SideMenuDesktop from "./SideMenuDesktop";
import { SUPPORT } from "@/constants/support";

const scrollConfig: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center",
  inline: "center",
};


interface Props {
  children: React.ReactNode;
}

const LayoutSupport = ({ children }: Props) => {
  const [openDropdown, setOpenDropdown] = useState({});
  const [selectedItem, setSelectedItem] = useState(SUPPORT.SYSTEM_REQUIREMENTS);
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
    setSelectedItem(id);
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

  useEffect(() => {
    const sectionToScrollTo = localStorage.getItem(SUPPORT.SECTION_SCROLL);
    if (sectionToScrollTo) {
      scroller.scrollTo(sectionToScrollTo, {
        duration: 1000,
        delay: 0,
        offset: -100,
        smooth: "easeInOutQuart",
      });

      localStorage.removeItem(SUPPORT.SECTION_SCROLL);
    }
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <TopMenuMobile
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
        <SideMenuDesktop
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          toggleDropDown={toggleDropDown}
          openDropdown={openDropdown}
        />
        <div className={styles.rightBlock}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutSupport