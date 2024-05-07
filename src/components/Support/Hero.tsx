import styles from "@/styles/Support/support.module.scss";
import useDeviceDetect from "@/components/common/DeviceDetect";
import { SOCIAL_LINK } from "@/constants/social";
import Link from "next/link";

const Hero = () => {
  const { isDesktop } = useDeviceDetect();

  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        {isDesktop ? (
          <div className={styles.banner}>
            <img
              className={styles.bannerImage}
              src="/images/banner-support.webp"
              alt="banner-support"
            />

            <div className={styles.content}>
              <div className={styles.description}>
                Shape Your Health,
                <br />
                Shape Your Future with NOTT
              </div>
              <div className={styles.description2}>
                Download NOTT Beta now for next level of convenience
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
              <div className={styles.description}>
                <p>
                  Shape Your Health,
                  <br />
                  Shape Your Future with NOTT
                </p>
              </div>
              <div className={styles.description2}>
                <p>Download NOTT App now for next level of convenience</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
