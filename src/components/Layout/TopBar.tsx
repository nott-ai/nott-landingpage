import { ArrowRightIcon, LoudSpeakerIcon } from "@/assets/index";
import { INFO } from "@/constants/metas";
import styles from "@/styles/Layout/top-bar.module.scss";
const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.notification}>
          <LoudSpeakerIcon />
          <span className={styles.text}>
            Deep learning-based model development to predict critical pediatric
            events in general wards...
          </span>
        </div>
        <a className={styles.explore} target={"_blank"} href={INFO.BLOG}>
          Explore now
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
