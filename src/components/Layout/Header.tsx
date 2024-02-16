import { ArrowDown, Logo, MenuIcon } from "@/assets";
import { NAVIGATIONS } from "@/constants/header";
import styles from "@/styles/Layout/header.module.scss";
import Link from "next/link";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import { useState } from "react";
import useTrans from "@/hooks/useTrans";
import { useRouter } from "next/router";
import Image from "next/image";
import PrimaryButton from "../common/PrimaryButton";
import Icon from "../common/Icon";
import { ProfileIcon } from "@/assets/index";
import Modal from "react-modal";
type Language = "en" | "vi";

const customStyles = {
  content: {
    top: "80px",
    left: "0",
    right: "auto",
    bottom: "auto",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    borderRadius: "0",
  },
};

const LANGUAGES = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "vi",
    name: "Tiếng Việt",
  },
];
const Header = () => {
  const trans: any = useTrans();
  const router = useRouter();
  const [language, setLanguage] = useState<Language>("en");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.logo} src="/images/logo.svg" alt="logo" />
            <div className={styles.desktop}>
              <div className={styles.navigation}>
                {NAVIGATIONS.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <div>{trans.header[item.name]}</div>
                  </Link>
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
            {/* <PrimaryButton fontWeight={400} className={styles.preOrderBtn}>
              <ProfileIcon /> {trans.header.joinTheWaitList}
            </PrimaryButton> */}
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
      >
        {/* <div className={styles.closeBtn} onClick={closeModal}>
          x
        </div> */}
        <div className={styles.navigationMobile}>
          {NAVIGATIONS.map((item) => (
            <Link onClick={closeModal} key={item.id} href={item.link}>
              <div>{trans.header[item.name]}</div>
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Header;
