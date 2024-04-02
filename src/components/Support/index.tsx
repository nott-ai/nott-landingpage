import { GUIDELINE, SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { Element } from "react-scroll";
import LayoutSupport from "./LayoutSupport";

const Support: React.FC = () => {

  return (
    <LayoutSupport>
      <div className={styles.userManual}>User Manual</div>
      <div>
        {GUIDELINE.map((content) => (
          <>
            {
              content.id === SUPPORT.SYSTEM_REQUIREMENTS && (
                <>
                  <Element name={content.id} key={content.id}>
                    <div className={styles.textContent}>
                      <div className={styles.mainTitle}>1.System Requirements</div>
                      To ensure the optimal performance and security of the NOTT application, it is necessary to use devices operating on compatible system software.
                      <br />
                      &bull; For users with iOS devices, the application requires iOS 16.5 or later.
                      <br />
                      &bull; For users with Android devices, the application requires Android 11 or later.
                    </div>
                  </Element>
                </>
              )
            }
            <Element name={content.id} key={content.id}>
              <div id={content.id} key={content.mainTitle} className={styles.mainTitle}>{content.mainSection}</div>
              {content.mainTitle && <div className={styles.highlightTitle}>&bull; {content.mainTitle}</div>}
              <div className={styles.wrapper}>
                {content.items.map((item) => (
                  <div key={item.id} id={item.id} className={styles.item}>
                    <div className={styles.wrapperGuide}>
                      <div className={styles.content}>
                        <div className={styles.title}>
                          {item.title}
                        </div>
                        <div className={styles.textContent}>
                          {item.description}
                        </div>
                      </div>
                      {item.image && <img className={styles.image} src={item.image} loading="lazy" alt="hero" />}
                    </div>
                  </div>
                ))}
              </div>
            </Element>
          </>
        ))
        }
      </div>
    </LayoutSupport>
  );
};

export default Support;
