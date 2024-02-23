import { CrossIcon, MenuIcon } from "@/assets";
import { NAVIGATIONS } from "@/constants/header";
import styles from "@/styles/Layout/header.module.scss";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import useTrans from "@/hooks/useTrans";
import Modal from "react-modal";
import useDeviceDetect from "../common/DeviceDetect";
import { inter } from "@/pages/_app";

// const LANGUAGES = [
//   {
//     id: "en",
//     name: "English",
//   },
//   {
//     id: "vi",
//     name: "Tiếng Việt",
//   },
// ];

const customStyles: any = {
  content: {
    top: "40px",
    left: "0",
    right: "auto",
    bottom: "auto",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    borderRadius: "0",
    border: "none",
    backgroundImage: 'url(/images/banner-navigation-mobile.png)',
    backgroundSize: "contain",
  },
};
const Header = () => {
  const trans: any = useTrans();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isDesktop } = useDeviceDetect();

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
      if (wrapper) {
        if (st > lastScrollTop) {
          wrapper.classList.add(styles.hidden);
        } else {
          wrapper.classList.remove(styles.hidden);
        }
      }

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [modalIsOpen]);

  return (
    <>
      <div id="header" className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img
              className={styles.logo}
              src="/images/logo.svg"
              alt="logo"
              onClick={() => {
                window.location.reload();
                window.scrollTo(0, 0);
              }}
            />
            <div className={styles.desktop}>
              <div className={styles.navigation}>
                {NAVIGATIONS.map((item) => (
                  <div key={item.id}>
                    {item.scroll ? (
                      <LinkScroll
                        activeClass="active"
                        style={{ cursor: "pointer" }}
                        target={item.link}
                        to={item.link}
                        smooth={true}
                        spy={true}
                        offset={isDesktop ? -80 : -44}
                        duration={500}
                        key={item.id}
                      >
                        <div>{trans.header[item.name]}</div>
                      </LinkScroll>
                    ) : (
                      <Link
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>{trans.header[item.name]}</div>
                      </Link>
                    )}
                  </div>
                ))}
                {/* <DropdownMenu<HTMLButtonElement>
                trigger={({
                  triggerRef,
                  isSelected,
                  testId,
                  ...providedProps
                }) => (
                  <button
                    className={styles.translationBtn}
                    type="button"
                    {...providedProps}
                    ref={triggerRef}
                  >
                    <Image
                      width={20}
                      height={20}
                      alt="language"
                      src={`/images/${language}.png`}
                      className={styles.flag}
                    />
                    {language === "en" ? "English" : "Tiếng Việt"}
                    <Icon icon={<ArrowDown />} color="#333333" />
                  </button>
                )}
              >
                <DropdownItemGroup>
                  {LANGUAGES.map((item) => (
                    <DropdownItem
                      key={item.id}
                      onClick={() => {
                        setLanguage(item.id as Language);
                        router.push(router.pathname, router.pathname, {
                          locale: item.id,
                        });
                      }}
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                </DropdownItemGroup>
              </DropdownMenu> */}
              </div>
            </div>

            <div className={styles.mobile} onClick={openModal}>
              {modalIsOpen ? <CrossIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={typeof window !== "undefined" ? document.body : undefined}
      >
        <div className={`${styles.navigationMobile} ${inter.className}`} >
          {
            NAVIGATIONS.map((item) => (
              item.scroll ? (
                <LinkScroll
                  activeClass="active"
                  style={{ cursor: "pointer" }}
                  target={item.link}
                  to={item.link}
                  smooth={true}
                  spy={true}
                  offset={isDesktop ? -80 : -44}
                  duration={500}
                  key={item.id}
                  onClick={closeModal}
                >
                  <div>{trans.header[item.name]}</div>
                </LinkScroll>
              ) : (
                <Link onClick={closeModal} href={item.link} key={item.id}>
                  {trans.header[item.name]}
                </Link>
              )
            ))
          }
        </div>
        <div className={`${styles.contactInfo} ${inter.className}`}>
          <div className={`${styles.titleContact} `}>
            Contact Us
          </div>
          <div className={styles.gmailInfo}>
            info@nott.ai
          </div>
        </div>
      </Modal >
    </>
  );
};

export default Header;
