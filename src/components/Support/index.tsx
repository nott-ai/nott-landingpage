import { GUIDELINE, SUPPORT } from "@/constants/support";
import styles from "@/styles/Support/features.module.scss";
import { Element } from "react-scroll";
import LayoutSupport from "./LayoutSupport";
import React from "react";

const Support: React.FC = () => {

  return (
    <LayoutSupport>
      <div className={styles.userManual}>User Manual</div>
      <div>
        {GUIDELINE.map((content) => (
          <>
            <Element name={content.id} key={content.id}>
              <div id={content.id} key={content.mainTitle} className={styles.mainContent}>
                {content.mainSection}
              </div>
              {content.mainTitle && <div className={styles.highlightTitle}>&bull; {content.mainTitle}</div>}
              <div className={styles.wrapper}>
                {content.items.map((item) => (
                  <div key={item.id} id={item.id} className={content.id === SUPPORT.SYSTEM_REQUIREMENTS ? styles.systemItem : styles.item}>
                    <div className={styles.wrapperGuide}>
                      <div className={styles.content}>
                        <div className={styles.mainTitle} dangerouslySetInnerHTML={{
                          __html: item.title
                        }}/>
                        <div className={styles.textContent}>
                          {item.description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              <div dangerouslySetInnerHTML={{__html: line}}></div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      {item.image && <img className={styles.image} src={item.image} loading="lazy" alt="hero" />}
                    </div>
                  </div>
                ))}
              </div>
            </Element>
          </>
        ))}
      </div>
    </LayoutSupport>
  );
};

export default Support;
