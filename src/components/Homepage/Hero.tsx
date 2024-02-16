import { ComingSoon } from "@/assets/index";
import useTrans from "@/hooks/useTrans";
import styles from "@/styles/Homepage/hero.module.scss";
import { createMarkup } from "@/utils/index";

const Hero = () => {
  const trans = useTrans();

  return (
    <div className={styles.wrapper}>
      <video src="/videos/video-bg.mp4?v=1" autoPlay loop muted />
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.leftBlock}>
            <div
              className={styles.highlight}
              dangerouslySetInnerHTML={createMarkup(trans.homepage.heroTitle)}
            />
            <div
              dangerouslySetInnerHTML={createMarkup(
                trans.homepage.heroDescription
              )}
              className={styles.description}
            />
            <img
              className={styles.comingSoon}
              src="/images/coming-soon.svg"
              alt="coming-soon"
            />
          </div>
          <img className={styles.heroImg} src="/images/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
