import React from 'react'
import styles from "@/styles/Layout/campaign.module.scss";
import { regularCampaigns } from '@/constants/faqs';
import { Collapse } from 'react-collapse';
import PrimaryButton from '../common/PrimaryButton';
import { useTransition, animated } from '@react-spring/web';

const Campaign = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const transitions = useTransition(openIndex, {
    from: { opacity: 0, transform: 'translateY(50%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
    keys: null,
    config: {
      duration: 500,
      delay: openIndex === null ? 500 : 0,
    },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentQuestion}>
          <div className={styles.mobileTitle}>
            NOTT’s <span className={styles.highlightText}>Device Drop</span> Campaigns
          </div>
          <div className={styles.mobileDescription}>
            Discover the ongoing revolution in health tracking through NOTT&#39;s Device Drop Campaigns. These periodic initiatives are our commitment to making advanced health monitoring accessible to all
          </div>
          <PrimaryButton className={styles.mobileJoinCampaign}>
            Join Campaigns
          </PrimaryButton>
        </div>
        <div className={styles.leftBlock}>
          <img src='../images/logo-campaign.svg' alt='graphic' />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            NOTT’s <span className={styles.highlightText}>Device Drop</span> Campaigns
          </div>
          <div className={styles.description}>
            Discover the ongoing revolution in health tracking through NOTT&#39;s Device Drop Campaigns. These periodic initiatives are our commitment to making advanced health monitoring accessible to all
          </div>
          <PrimaryButton className={styles.joinCampaign}>
            Join Campaigns
          </PrimaryButton>
          <div className={styles.contentSecond}>
            {regularCampaigns.map((faq, index) => (
              <div key={index} style={{ background: ' #f0f5ff', borderRadius: '24px' }}>
                <div className={openIndex === index ? `${styles.question} ${styles.activeQuestion}` : styles.question} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <div className={styles.leftQuestion}>
                    <img className={styles.leftImage} src={faq.image} alt='graphic' />
                    {faq.title}
                  </div>
                  <img src={openIndex === index ? "../images/minus.svg" : "../images/plus.svg"} alt="Toggle Icon" />
                </div>
                {transitions((style, item) =>
                  item === index && (
                    <animated.div style={style} className={styles.answers}>
                      {faq.subtitle}
                    </animated.div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Campaign