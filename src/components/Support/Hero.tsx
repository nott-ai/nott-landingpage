import styles from "@/styles/Support/support.module.scss";
import useDeviceDetect from "@/components/common/DeviceDetect";
import TypeWriter from "@/components/common/TypeWriter";
import { SOCIAL_LINK } from "@/constants/social";

const Hero = () => {
  const { isDesktop, isMobile } = useDeviceDetect();

  return (
    <div className={styles.container}>
      <div
        className={styles.bannerContainer}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {isDesktop? (
          <div className={styles.banner}>
            <img
              className={styles.bannerImage}
              src="/images/banner-support.png"
              alt="banner"
            />

            <div className={styles.content}>
              <div className={styles.description}>
                <TypeWriter
                  text="Shape Your Health,<br/>
                   Shape Your Future with NOTT"
                  speed={40}
                />
              </div>
              <div className={styles.description2}>
                <TypeWriter
                  text="Download NOTT App now for next level of convenience"
                  speed={40}
                />
              </div>
              <div className={styles.linkSocialWrapper}>
                <a href={SOCIAL_LINK.GOOGLE_PLAY} target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/googleplay.png"
                    alt="banner"
                  />
                </a>
                <a href={SOCIAL_LINK.APP_STORE} target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/appstore.png"
                    alt="banner"
                  />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.banner}>
            <img
              className={styles.bannerImage}
              src="/images/banner-support-mobile.png"
              alt="banner"
            />
            <div className={styles.content}>
              <div
                style={{ textAlign: "center" }}
                className={styles.description}
              >
                <TypeWriter
                  text="Shape Your Health,<br/>
                   Shape Your Future with NOTT"
                  speed={40}
                />
              </div>
              <div className={styles.description2}>
                <TypeWriter
                  text="Download NOTT App now for next level of convenience"
                  speed={40}
                />
              </div>
              <div className={styles.linkSocialWrapper}>
                <a href="" target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/googleplay.png"
                    alt="banner"
                  />
                </a>
                <a href="" target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/appstore.png"
                    alt="banner"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
