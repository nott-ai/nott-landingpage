import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/ProductsAndServices/product-screen-section.module.scss";

import Slider from "react-slick";

const screens = [
  {
    title: "Wellness",
    image: "/images/product-service/phone-screen/screen1.png",
  },
  {
    title: "Wellness",
    image: "/images/product-service/phone-screen/screen2.png",
  },
  {
    title: "Wellness",
    image: "/images/product-service/phone-screen/screen3.png",
  },
  {
    title: "Wellness",
    image: "/images/product-service/phone-screen/screen4.png",
  },
  {
    title: "Wellness",
    image: "/images/product-service/phone-screen/screen5.png",
  },
  {
    title: "Wellness",
    image: "/images/product-service/phone-screen/screen6.png",
  },
];

export default function ProductScreenSection() {
  var settings = {
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendDots: (dots: any) => <div>{dots}</div>,
    customPaging: (i: any) => <div className={styles.dot}></div>,
    responsive: [
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.wrapper}
      data-aos="zoom-out-down"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>NOTT Mobile App</div>
          <div className={styles.content}>
            NOTT Mobile App is a cutting-edge solution for proactive health
            management, seamlessly integrating with various health tracking
            devices, offering features across different user tiers, and
            leveraging AI technology for tailored wellness guidance.
          </div>
        </div>
        <div className={styles.slideScreen} id="products-hightlight">
          <Slider className={styles.slider} {...settings}>
            {screens.map((screen, index) => (
              <div key={index}>
                <div className={styles.imageBack}>
                  <img
                    src={screen.image}
                    alt={screen.title}
                    loading="lazy"
                    className={styles.imageFront}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className={styles.paragraph}>
          <div className={styles.title}>
            Empowering User-Controlled Data with NOTT
          </div>
          <div className={styles.content2}>
            User BenefitsDiscover the ongoing revolution in health tracking
            through NOTT&apos;s Device Drop Campaigns. These periodic
            initiatives are our commitment to making advanced health monitoring
            accessible to all. Anonymous Data Sharing Rewards: Users can opt to
            anonymously share their health data, contributing to community
            health advancements and receiving rewards in return. Contributing to
            Research: By sharing anonymized data, users can directly contribute
            to health research, aiding in the development of better health and
            wellness insights and solutions.
          </div>
        </div> */}
      </div>
    </div>
  );
}
