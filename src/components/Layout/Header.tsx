import { CrossIcon, MenuIcon } from "@/assets";
import { NAVIGATIONS } from "@/constants/header";
import styles from "@/styles/Layout/header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import TopBar from "./TopBar";
import { ROUTERS } from "@/constants/routes";


const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isEkyc, setIsEkyc] = useState(false);

  const customStyles: any = {
    content: {
      top: "56px",
      left: "0",
      right: "auto",
      padding: "0",
      bottom: "auto",
      width: "100vw",
      height: !isEkyc ? "100vh" : "calc(100vh - 56px)",
      boxSizing: "border-box",
      borderRadius: "0",
      border: "none",
      backgroundSize: "contain",
      backgroundColor: !isEkyc ? "#F9F9F9" : "#041c28",
      backdropFilter: isEkyc ? "blur(10px)" : "none",
    },
  };
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (modalIsOpen) return;
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const wrapper = document.querySelector(`#header`);
      if (st > lastScrollTop) {
        wrapper?.classList.add(styles.hidden);
      } else {
        wrapper?.classList.remove(styles.hidden);
      }
      if (router.pathname === ROUTERS.SUPPORT) {
        wrapper?.classList.remove(styles.hidden);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
   
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [modalIsOpen, router.pathname]);

  useEffect(() => {
    if (router.pathname.includes("/ekyc")) {
      setIsEkyc(true);
      const menuMobile = document.getElementsByClassName("ReactModalPortal");
      if (menuMobile.length > 0) {
        //@ts-ignore
        // menuMobile[0].children[0]?.style.backgroundColor = "transparent";
      }
    } else {
      setIsEkyc(false);
    }
  }, [router.pathname]);

  return (
    <>
      <header
        id="header"
        className={`${styles.wrapper} ${isEkyc ? styles.ekyc : ""} ${isEkyc && modalIsOpen ? styles.ekycOpen : ""
          }`}
      >
        {!isEkyc && <TopBar />}
        <div className={styles.container}>
          <div className={styles.content}>
            <img
              className={styles.logo}
              src={isEkyc ? "/images/light-logo.svg" : "/images/logo.svg"}
              alt="logo"
              onClick={() => {
                window.location.href = "/";
                window.scrollTo(0, 0);
              }}
            />
            <div className={styles.desktop}>
              <div className={styles.navigation}>
                {NAVIGATIONS.map((item) => (
                  <div
                    key={item.id}
                    className={`${item.isRoot
                      ? router.pathname.includes(item.rootUrl)
                        ? styles.active
                        : ""
                      : router.pathname === item.link
                        ? styles.active
                        : ""
                      }`}
                  >
                    {item.isExternal ? (
                      <a href={item.link} target="_blank">
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.link}>{item.name}</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.mobile} onClick={openModal}>
              {modalIsOpen ? <CrossIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={typeof window !== "undefined" ? document.body : undefined}
      >
        <div
          className={`${styles.navigationMobile} ${isEkyc ? styles.ekyc : ""} `}
        >
          {NAVIGATIONS.map((item) => (
            <div
              key={item.id}
              className={`${item.isRoot
                ? router.pathname.includes(item.rootUrl)
                  ? styles.active
                  : ""
                : router.pathname === item.link
                  ? styles.active
                  : ""
                }`}
              onClick={closeModal}
            >
              {item.isExternal ? (
                <a key={item.id} href={item.link} target="_blank">
                  <div>{item.name}</div>
                </a>
              ) : (
                <Link href={item.link} key={item.id}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className={`${styles.contactInfo} ${isEkyc ? styles.ekyc : ""}`}>
          <div className={`${styles.titleContact} `}>Contact Us</div>
          <div className={styles.gmailInfo}>info@nott.ai</div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
