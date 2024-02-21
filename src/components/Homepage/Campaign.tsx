import React from 'react'
import styles from "@/styles/Layout/campaign.module.scss";
import { motion } from 'framer-motion';
import { fadeIn, planetVariants } from '@/utils/motion';
import { dataFaqs, regularCampaigns } from '@/constants/faqs';
import { Collapse } from 'react-collapse';
import PrimaryButton from '../common/PrimaryButton';

const Campaign = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <motion.div
            variants={fadeIn({ direction: "left", type: "tween", delay: 0.2, duration: 1 })}
          >
            <div className={styles.contentQuestion}>
              <div className={styles.mobileTitle}>
                NOTT’s <span className={styles.highlightText}>Device Drop</span> Campaigns
              </div>
              <div className={styles.mobileDescription}>
                Discover the ongoing revolution in health tracking through NOTT&#39;s Device Drop Campaigns. These periodic initiatives are our commitment to making advanced health monitoring accessible to all
              </div>

              <PrimaryButton className={styles.mobileJoinCampaign}>
                Join Campaigns
                <img className={styles.rightArrow} src='../images/arrow-right-white.svg' alt='graphic' />
              </PrimaryButton>
            </div>
          </motion.div>
          <motion.div
            variants={planetVariants({ direction: "left" })}
          >
            <div className={styles.leftBlock}>
              <img src='../images/kgz2.svg' alt='graphic' />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "left", type: "tween", delay: 0.2, duration: 1 })}
          >
            <div className={styles.right}>
              <div className={styles.title}>
                NOTT’s <span className={styles.highlightText}>Device Drop</span> Campaigns
              </div>
              <div className={styles.description}>
                Discover the ongoing revolution in health tracking through NOTT&#39;s Device Drop Campaigns. These periodic initiatives are our commitment to making advanced health monitoring accessible to all
              </div>
              <PrimaryButton className={styles.joinCampaign}>
                Join Campaigns
                <img className={styles.rightArrow} src='../images/arrow-right-white.svg' alt='graphic' />
              </PrimaryButton>
              <div className={styles.contentSecond}>
                {regularCampaigns.map((faq, index) => (
                  <div key={index} style={{ background: 'white', borderRadius: '24px' }}>
                    <div className={openIndex === index ? `${styles.question} ${styles.activeQuestion}` : styles.question}>
                      <div className={styles.leftQuestion}>
                        <img className={styles.leftImage} src={faq.image} alt='graphic' />
                        {faq.title}
                      </div>
                      <img src={openIndex === index ? "../images/minus.svg" : "../images/plus.svg"} alt="Toggle Icon" onClick={() => setOpenIndex(openIndex === index ? null : index)} />
                    </div>
                    <Collapse isOpened={openIndex === index}>
                      <div className={styles.answers}>
                        {faq.subtitle}
                      </div>
                    </Collapse>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Campaign