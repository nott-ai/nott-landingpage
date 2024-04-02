import styles from "@/styles/Support/support.module.scss";
import useDeviceDetect from "@/components/common/DeviceDetect";
import { SOCIAL_LINK } from "@/constants/social";

const Hero = () => {
  const { isDesktop } = useDeviceDetect();

  return (
    <div className={styles.container}>
      <div
        className={styles.bannerContainer}>
        {isDesktop ? (
          <div className={styles.banner}>
            <img
              className={styles.bannerImage}
              src="/images/banner-support.webp"
              alt="banner-support"
            />

            <div className={styles.content}>
              <div className={styles.description}>
                <p>Shape Your Health,<br />
                  Shape Your Future with NOTT</p>
              </div>
              <div className={styles.description2}>
                <p>Download NOTT App now for next level of convenience</p>
              </div>
              <div className={styles.linkSocialWrapper}>
                <a href={SOCIAL_LINK.GOOGLE_PLAY} target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/googleplay.webp"
                    alt="googleplay"
                  />
                </a>
                <a href={SOCIAL_LINK.APP_STORE} target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/appstore.webp"
                    alt="appstore"
                  />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.banner}>
            <img
              className={styles.bannerImage}
              src="/images/banner-support-mobile.webp"
              alt="banner-support-mobile"
            />
            <div className={styles.content}>
              <div
                className={styles.description}
              >
                <p>Shape Your Health,<br />
                  Shape Your Future with NOTT</p>
              </div>
              <div className={styles.description2}>
                <p>Download NOTT App now for next level of convenience</p>
              </div>
              <div className={styles.linkSocialWrapper}>
                <a href={SOCIAL_LINK.GOOGLE_PLAY} target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/googleplay.webp"
                    alt="googleplay"
                  />
                </a>
                <a href={SOCIAL_LINK.APP_STORE} target="_blank">
                  <img
                    className={styles.logo}
                    src="/images/appstore.webp"
                    alt="appstore"
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
