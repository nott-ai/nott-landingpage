import useTrans from "@/hooks/useTrans";
import styles from "@/styles/Homepage/hero.module.scss";
import { createMarkup } from "@/utils/index";

const Hero = () => {
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.videoDesktop}
        src="/videos/video-bg.mp4?v=1"
        autoPlay
        loop
        muted
      />
      <video
        className={styles.videoMobile}
        src="/videos/video-bg-mobile.mp4?v=1"
        autoPlay
        loop
        muted
      />
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.leftBlock}>
            <div className={styles.highlight}>
              Your Gateway <br /> to a{" "}
              <span style={{ color: "#346AF7" }}>Healthier </span>
              <br />
              Tomorrow
            </div>
            <div
              dangerouslySetInnerHTML={createMarkup(
                trans.homepage.heroDescription
              )}
              className={styles.description}
            />
            <div className={styles.joinWaitlistBtn}>Join The Waitlist</div>
          </div>
          <img className={styles.heroImg} src="/images/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
