import React, { useState } from 'react';
import styles from "@/styles/Layout/faqs.module.scss";
import { useTransition, animated } from '@react-spring/web';
import { dataFaqs } from '@/constants/faqs';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const transitions = useTransition(openIndex, {
    from: { opacity: 0, transform: 'translateY(50%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
    keys: null,
    config: {
      duration: 300,
      delay: openIndex === null ? 300 : 0,
    },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerFirst}>
        <div className={styles.contentTitle}>
          Frequently Asked Questions.
          <img className={styles.yellowCircle} src='../images/yellow-circle.svg' alt='graphic' />
        </div>
        <img className={styles.graphicImage} src='../images/graphic.svg' alt='graphic' />
      </div>
      <div className={styles.contentSecond}>
        {dataFaqs.map((faq, index) => (
          <div key={index} style={openIndex === index ? { backgroundColor: '#E9F8FF', borderRadius: '24px' } : {}}>
            <div
              className={openIndex === index ? `${styles.question} ${styles.activeQuestion}` : styles.question}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <img src={openIndex === index ? "../images/arrow-down-right.svg" : "../images/arrow-right.svg"} alt="Toggle Icon" />
            </div>
            {transitions((style, item) =>
              item === index && (
                <animated.div style={style} className={styles.answers}>
                  {faq.answers}
                </animated.div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;