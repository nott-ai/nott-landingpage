import { ArrowDown, MegaphoneIcon } from "@/assets";
import useTrans from "@/hooks/useTrans";
import styles from "@/styles/Layout/notification.module.scss";
import Link from "next/link";
import Icon from "../common/Icon";

const Notification = () => {
  const trans = useTrans();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <MegaphoneIcon />
        </div>
        <div className={styles.textContent}>
          {trans.header.notification}
          <Link href={"#"}>
            {trans.header.seeDetail}{" "}
            <div className={styles.arrowWrapper}>
              <Icon icon={<ArrowDown />} color="#0065E9" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
