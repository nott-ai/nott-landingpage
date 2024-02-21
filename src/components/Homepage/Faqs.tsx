import React, { useState } from 'react';
import styles from "@/styles/Layout/faqs.module.scss";
import { Collapse } from 'react-collapse';
import { dataFaqs } from '@/constants/faqs';
import { motion } from 'framer-motion';
import { fadeIn, planetVariants, slideDown } from '@/utils/motion';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={styles.wrapper}>
        <div className={styles.containerFirst}>
          <motion.div
            variants={fadeIn({ direction: "right", type: "tween", delay: 0.2, duration: 1 })}
          >
            <div className={styles.contentTitle}>
              Frequently Asked Questions.
              <img className={styles.yellowCircle} src='../images/yellow-circle.svg' alt='graphic' />
            </div>
          </motion.div>
          <motion.div
            variants={planetVariants({ direction: "right", rotation: 120 })}
          >
            <img className={styles.graphicImage} src='../images/graphic.svg' alt='graphic' />
            <img className={styles.graphicMobileImage} src='../images/graphic.svg' alt='graphic' />

          </motion.div>
        </div>
        <motion.div
          variants={fadeIn({ direction: "right", type: "tween", delay: 0.6, duration: 1 })}
        >
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
        </motion.div>
      </div>
    </motion.div >

  )
}

export default Faqs