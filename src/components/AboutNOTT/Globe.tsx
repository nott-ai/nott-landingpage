import { IllustrationBar } from "@/assets/index";
import styles from "@/styles/AboutUs/globe.module.scss";
import { BeatLoader } from "react-spinners";
import useDeviceDetect from "../common/DeviceDetect";
import CustomGlobe from "./NewGlobe";
const Globe = () => {
  const { isMobile } = useDeviceDetect();
  const Loading = () => (
    <BeatLoader size={4} color="#346af7" loading={true} speedMultiplier={0.5} />
  );
  return (
    <div className={styles.wrapper}>
      {!isMobile ? (
        <video
          className={styles.videoDesktop}
          src="/videos/video-bg.mp4?v=1"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <video
          className={styles.videoMobile}
          src="/videos/video-bg-mobile.mp4?v=1"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div className={styles.globeWrapper}>
        {/* <img className={styles.globe} src="/images/earth.png" alt="earth" />
        <div className={styles.globelMobileWrapper}>
          <img
            className={styles.globeMobile}
            src="/images/earth-mobile.png"
            alt="earth"
          /> */}

        <CustomGlobe />

        <div className={styles.illustrationBarMobile}>
          <div className={styles.illustrationBarWrapper}>
            <img
              src="/images/illustration-bar-mobile.svg"
              alt="illustration-bar"
            />
            <div className={styles.leftInfoMobile}>
              <h1 className={styles.title}>Global reach</h1>
              <div className={styles.bottomBlock}>
                <p>
                  <span className={styles.number}>
                    <Loading />
                  </span>{" "}
                  Countries with NOTT users
                </p>
                <p>
                  <span className={styles.number}>
                    <Loading />
                  </span>{" "}
                  New accounts in last 7 days
                </p>
                <p>
                  <span className={styles.number}>
                    <Loading />
                  </span>{" "}
                  Days since launch
                </p>
              </div>
            </div>
            <div className={styles.rightInfoMobile}>
              <h1 className={styles.title}>Financial Momentum</h1>
              <div className={styles.bottomBlock}>
                <p>
                  <span className={styles.number}>
                    <Loading />
                  </span>{" "}
                  Amount of NOTT claimed
                </p>
                <p>
                  <span className={styles.number}>
                    <Loading />
                  </span>{" "}
                  Daily wallet transactions
                </p>
                <p>
                  <span className={styles.number}>
                    <Loading />
                  </span>{" "}
                  Orbs manufactured
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.container}>
          <div
            className={styles.leftInfo}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1
              className={styles.title}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Global reach
            </h1>
            <IllustrationBar />
            <div className={styles.bottomBlock}>
              <p data-aos="fade-up" data-aos-duration="1000">
                <span className={styles.number}>
                  <Loading />
                </span>{" "}
                Countries with NOTT users
              </p>
              <p data-aos="fade-up" data-aos-duration="2000">
                <span className={styles.number}>
                  <Loading />
                </span>{" "}
                New accounts in last 7 days
              </p>
              <p data-aos="fade-up" data-aos-duration="3000">
                <span className={styles.number}>
                  <Loading />
                </span>{" "}
                Days since launch
              </p>
            </div>
          </div>
          <div
            className={styles.rightInfo}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1
              className={styles.title}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Financial Momentum
            </h1>
            <IllustrationBar />
            <div className={styles.bottomBlock}>
              <p data-aos="fade-up" data-aos-duration="1000">
                <span className={styles.number}>
                  <Loading />
                </span>{" "}
                Amount of NOTT claimed
              </p>
              <p data-aos="fade-up" data-aos-duration="2000">
                <span className={styles.number}>
                  <Loading />
                </span>{" "}
                Daily wallet transactions
              </p>
              <p data-aos="fade-up" data-aos-duration="3000">
                <span className={styles.number}>
                  <Loading />
                </span>{" "}
                Orbs manufactured
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globe;
