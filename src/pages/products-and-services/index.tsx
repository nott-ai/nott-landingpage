import React, { useState } from 'react'
import styles from "@/styles/ProductService/product-service.module.scss";
import ModalProductService from '@/components/ModalProductService';
import { CloseCookieIcon } from '@/assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productLineUpData = [
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
    img: '/images/product-service/product-lineup/banner2.png'
  },
  {
    status: 'Comming Soon',
    title: 'Smartscale',
    description: 'Advanced technology meets health monitoring; get detailed body composition, BMI, and trend analysis, all synced effortlessly with your health apps.',
    img: '/images/product-service/product-lineup/banner3.png'
  },
  {
    status: 'Comming Soon',
    title: 'Smartpillow',
    description: 'Experience unparalleled comfort and sleep analysis with our smart pillow, featuring non-contact monitoring and AI-powered insights for a better night\'s rest',
    img: '/images/product-service/product-lineup/banner4.png'
  },
]


const ProductServices = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = (e:
    React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const products = [
    {
      images: [
        "/images/product-service/product-lineup/banner1.png",
      ],
    },
    {
      images: [
        "/images/product-service/product-lineup/banner2.png",
      ],
    },
    {
      images: [
        "/images/product-service/product-lineup/banner3.png",
      ],
    },
    {
      images: [
        "/images/product-service/product-lineup/banner4.png",
      ],
    },
  ];


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots: any) => (
      <div className={styles.dots}>
        <ul
          style={{
            margin: "0px",
            marginBlockStart: 0,
            marginBlockEnd: 0,
            paddingInlineStart: 0,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => <div />,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content1}>
          <div className={styles.title}>{`NOTT's Initial Product Lineup`}</div>
          <div style={{ paddingBottom: '20px' }} className={styles.description}>{`Explore NOTT's innovative product range, featuring smartwatch, smartband, smartscale, and smart pillow designed to enhance your health and wellness journey.`}</div>
          <div className={styles.block}>
            <div className={styles.contentRow}>
              {productLineUpData.map((item, index) => (
                <>
                  <div key={index} className={styles.card}>
                    <img src={item.img} alt="smartwatch" />
                    <div className={styles.textContent}>
                      <div className={styles.status}>
                        {item.status}
                      </div>
                      <div className={styles.title}>
                        {item.title}
                      </div>
                      <div className={styles.description}>
                        {item.description}
                      </div>
                      <a href='#' onClick={openModal} className={styles.learnMore}>Learn More</a>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <ModalProductService modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
            <div className={styles.status}>Comming Soon
              <CloseCookieIcon className={styles.closeIcon} onClick={() => setModalIsOpen(false)} />
            </div>
            <div className={styles.title}>Key Features of the NOTT Smartband</div>
            <Slider {...settings}>
              {products.map((prod, index) => (
                <div key={index}>
                  {prod.images.map((image, imageIndex) => (
                    <img key={imageIndex} className={styles.popupImage} src={image} alt="smartwatch" />
                  ))}
                </div>
              ))}
            </Slider>
            <li>{`Holistic Health Tracking:`}</li>
            <div className={styles.description}>
              Combines daily activity metrics, heart rate monitoring, and advanced sleep analysis with stress management for a comprehensive wellness overview.
            </div>
            <li>{`Enhanced Exercise and Connectivity:`}</li>
            <div className={styles.description}>
              Features specialized sports modes for varied activities and smart notifications, ensuring you stay connected and motivated. Water resistance and music control enhance your workout experience.
            </div>
            <li>{`Optimized Usage:`}</li>
            <div className={styles.description}>
              Boasts long battery life, blood oxygen (SpO2) monitoring for health insights, and tactile feedback for discreet alerts. Seamless app integration and a customizable design personalize your health tracking experience.
            </div>
            <li>{`User-Friendly Interface:`}</li>
            <div className={styles.description}>
              An intuitive touchscreen display with easy navigation, coupled with interchangeable bands, offers style and simplicity in managing health data and daily notifications.            </div>
          </ModalProductService>
        </div>
      </div>
    </div>
  )
}

export default ProductServices