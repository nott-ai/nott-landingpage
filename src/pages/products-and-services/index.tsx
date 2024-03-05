import React, { useState } from 'react'
import styles from "@/styles/ProductService/product-service.module.scss";
import ModalProductService from '@/components/ModalProductService';

const ProductLineUpData = [
  {
    status: 'Comming Soon',
    title: 'Smartband',
    description: 'This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.',
    img: '/images/product-service/product-lineup/banner1.png'
  },
  {
    status: 'Comming Soon',
    title: 'Smartwatch',
    description: 'A fusion of elegance and functionality, this smartwatch tracks your health, boosts productivity, and integrates seamlessly with your tech ecosystem.',
    img: '/images/product-service/product-lineup/banner1.png'
  },
  {
    status: 'Comming Soon',
    title: 'Smartscale',
    description: 'Advanced technology meets health monitoring; get detailed body composition, BMI, and trend analysis, all synced effortlessly with your health apps.',
    img: '/images/product-service/product-lineup/banner1.png'
  },
  {
    status: 'Comming Soon',
    title: 'Smartpillow',
    description: 'Experience unparalleled comfort and sleep analysis with our smart pillow, featuring non-contact monitoring and AI-powered insights for a better night\'s rest',
    img: '/images/product-service/product-lineup/banner1.png'
  },
]

const ProductServices = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content1}>
          <div className={styles.title}>{`NOTT's Initial Product Lineup`}</div>
          <div className={styles.description}>{`Explore NOTT's innovative product range, featuring smartwatch, smartband, smartscale, and smart pillow designed to enhance your health and wellness journey.`}</div>
          <div className={styles.block}>
            <div className={styles.contentRow}>
              <div className={styles.card}>
                <img src="/images/product-service/product-lineup/banner1.png" alt="smartwatch" />
                <div className={styles.textContent}>
                  <div className={styles.status}>
                    Comming Soon
                  </div>
                  <div className={styles.title}>
                    Smartband
                  </div>
                  <div className={styles.description}>
                    This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.
                  </div>
                  <a href='#'
                  >Learn More</a>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/product-service/product-lineup/banner2.png" alt="smartwatch" />
                <div className={styles.textContent}>
                  <div className={styles.status}>
                    Comming Soon
                  </div>
                  <div className={styles.title}>
                    Smartband
                  </div>
                  <div className={styles.description}>
                    This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.
                  </div>
                  <a href=''>Learn More</a>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/product-service/product-lineup/banner2.png" alt="smartwatch" />
                <div className={styles.textContent}>
                  <div className={styles.status}>
                    Comming Soon
                  </div>
                  <div className={styles.title}>
                    Smartband
                  </div>
                  <div className={styles.description}>
                    This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.
                  </div>
                  <a href=''>Learn More</a>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/product-service/product-lineup/banner2.png" alt="smartwatch" />
                <div className={styles.textContent}>
                  <div className={styles.status}>
                    Comming Soon
                  </div>
                  <div className={styles.title}>
                    Smartband
                  </div>
                  <div className={styles.description}>
                    This stylish tracker goes beyond counting steps, offering rich health insights and guidance to enhance your wellness journey with proactive data analysis.
                  </div>
                  <a href=''>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductServices