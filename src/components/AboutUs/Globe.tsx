import { IllustrationBar } from "@/assets/index";
import styles from "@/styles/AboutUs/globe.module.scss";
const Globe = () => {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.videoDesktop}
        src="/videos/video-bg.mp4?v=1"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className={styles.videoMobile}
        src="/videos/video-bg-mobile.mp4?v=1"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.globeWrapper}>
        <img className={styles.globe} src="/images/earth.png" alt="earth" />
        <div className={styles.globelMobileWrapper}>
          <img
            className={styles.globeMobile}
            src="/images/earth-mobile.png"
            alt="earth"
          />
        </div>
        <div className={styles.illustrationBarMobile}>
          <div className={styles.illustrationBarWrapper}>
            <img
              src="/images/illustration-bar-mobile.svg"
              alt="illustration-bar"
            />
            <div className={styles.leftInfoMobile}>
              <p className={styles.title}>Global reach</p>
              <div className={styles.bottomBlock}>
                <p>
                  <span className={styles.number}>. . . </span> Countries with
                  NOTT users
                </p>
                <p>
                  <span className={styles.number}>. . . </span> New accounts in
                  last 7 days
                </p>
                <p>
                  <span className={styles.number}>. . . </span> Days since
                  launch
                </p>
              </div>
            </div>
            <div className={styles.rightInfoMobile}>
              <p className={styles.title}>Financial Momentum</p>
              <div className={styles.bottomBlock}>
                <p>
                  <span className={styles.number}>. . . </span> Amount of NOTT
                  claimed
                </p>
                <p>
                  <span className={styles.number}>. . . </span> Daily wallet
                  transactions
                </p>
                <p>
                  <span className={styles.number}>. . . </span> Orbs
                  manufactured
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.leftInfo}>
          <p className={styles.title}>Global reach</p>
          <IllustrationBar />
          <div className={styles.bottomBlock}>
            <p>
              <span className={styles.number}> . . .</span> Countries with NOTT
              users
            </p>
            <p>
              <span className={styles.number}>. . . </span> New accounts in last
              7 days
            </p>
            <p>
              <span className={styles.number}>. . . </span> Days since launch
            </p>
          </div>
        </div>
        <div className={styles.rightInfo}>
          <p className={styles.title}>Financial Momentum</p>
          <IllustrationBar />
          <div className={styles.bottomBlock}>
            <p>
              <span className={styles.number}>. . . </span> Amount of NOTT
              claimed
            </p>
            <p>
              <span className={styles.number}>. . . </span> Daily wallet
              transactions
            </p>
            <p>
              <span className={styles.number}>. . . </span> Orbs manufactured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globe;
