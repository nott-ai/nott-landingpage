import React, { useState } from 'react';
import styles from "@/styles/Layout/faqs.module.scss";
import { Collapse } from 'react-collapse';
import { dataFaqs } from '@/constants/faqs';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerFirst}>
        <div className={styles.contentTitle}>
          Frequently Asked Questions.
          <img className={styles.yellowCircle} src='../images/yellow-circle.svg' alt='graphic' />
        </div>
        <img className={styles.graphicImage} src='../images/graphic.svg' alt='graphic' />
        <img className={styles.graphicMobileImage} src='../images/graphic.svg' alt='graphic' />
      </div>
      <div className={styles.contentSecond}>
        {dataFaqs.map((faq, index) => (
          <div key={index} style={openIndex === index ? { backgroundColor: '#E9F8FF', borderRadius: '24px' } : {}}>
            <div className={openIndex === index ? `${styles.question} ${styles.activeQuestion}` : styles.question}>
              {faq.question}
              <img src={openIndex === index ? "../images/arrow-down-right.svg" : "../images/arrow-right.svg"} alt="Toggle Icon" onClick={() => setOpenIndex(openIndex === index ? null : index)} />
            </div>
            <Collapse isOpened={openIndex === index}>
              <div className={styles.answers}>
                {faq.answers}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs