import styles from "@/styles/Support/features.module.scss";
import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import Hero from "./Hero";
import TopMenuMobile from "./TopMenuMobile";
import SideMenuDesktop from "./SideMenuDesktop";
import { SUPPORT } from "@/constants/support";


interface Props {
  children: React.ReactNode;
}

const LayoutSupport = ({ children }: Props) => {
  const [selectedItem, setSelectedItem] = useState(SUPPORT.SYSTEM_REQUIREMENTS);
  
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
      />
      <Hero />
      <div className={styles.container}>
        <SideMenuDesktop
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <div className={styles.rightBlock}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutSupport