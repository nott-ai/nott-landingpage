import { MenuIcon } from "@/assets";
import { NAVIGATIONS } from "@/constants/header";
import styles from "@/styles/Layout/header.module.scss";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import useTrans from "@/hooks/useTrans";
import Modal from "react-modal";
import { it } from "node:test";
import useDeviceDetect from "../common/DeviceDetect";

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
  },
};
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
const Header = () => {
  const trans: any = useTrans();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isDesktop } = useDeviceDetect();
  const [isHidden, setIsHidden] = useState(false);
  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const wrapper = document.querySelector(`.${styles.wrapper}`);

      if (wrapper) {
        if (st > lastScrollTop) {
          wrapper.classList.add(styles.hidden);
        } else {
          wrapper.classList.remove(styles.hidden);
        }
      }

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`wrapper ${isHidden ? 'hidden' : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.content}>
              <Link href="/">
                <img className={styles.logo} src="/images/logo.svg" alt="logo" />
              </Link>
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
                <MenuIcon />
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
          <div className={styles.navigationMobile}>
            {NAVIGATIONS.map((item) => (
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
                href={item.link}
              >
                <div>{trans.header[item.name]}</div>
              </LinkScroll>
            ))}
          </div>
        </Modal>
      </header>
    </>
  );
};

export default Header;
