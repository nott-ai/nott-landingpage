import { ArrowRightIcon, LoudSpeakerIcon } from "@/assets/index";
import styles from "@/styles/Layout/top-bar.module.scss";
const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.notification}>
          <LoudSpeakerIcon /> Deep learning-based model development to predict
          critical pediatric events in general wards...
        </div>
        <div className={styles.explore}>
          <a href="#">Explore now</a>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
