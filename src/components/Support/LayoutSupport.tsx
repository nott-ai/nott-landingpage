import { GUIDELINE, SIDE_MENU_SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { useEffect, useRef, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { Element } from "react-scroll";
import Hero from "./Hero";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import useDeviceDetect from "../common/DeviceDetect";

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
  const [selectedItem, setSelectedItem] = useState("systemRequirements");
  const refSystemRequirements = useRef<any>();
  const refIOS = useRef<any>();
  const refRegisterLogin = useRef<any>();
  const refConnectingDevices1 = useRef<any>();
  const { isDesktop } = useDeviceDetect();

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
      <TopMenu
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
        {isDesktop && (
          <>
            <SideMenu
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              toggleDropDown={toggleDropDown}
              openDropdown={openDropdown}
            />
          </>
        )}
        <div className={styles.rightBlock}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutSupport