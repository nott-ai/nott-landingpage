import React, { useState } from "react";
import Modal from "react-modal";
import styles from "@/styles/ProductsAndServices/product-modal.module.scss";
import { CloseCookieIcon } from "@/assets/index";
import { PRODUCT_IMAGES } from "@/constants/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#__next");

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
interface ProductInfo {
  price?: number;
  images: string[];
  name: string;
  benefits: {
    title: string;
    description: string;
  }[];
}
interface ModalProductServiceProps {
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
  productInfo: ProductInfo;
}

const ModalProductService: React.FC<ModalProductServiceProps> = ({
  modalIsOpen,
  setModalIsOpen,
  productInfo,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className={styles.modalContent}
      overlayClassName={styles.overlay}
    >
      <div className={styles.topBlock}>
        <div className={styles.header}>
          {/* <div className={styles.price}>
            {productInfo.price || "Coming Soon"}
          </div> */}
          <CloseCookieIcon
            className={styles.closeIcon}
            onClick={() => setModalIsOpen(false)}
          />
        </div>
        <div className={styles.title}>
          Key Features of the {productInfo.name}
        </div>
      </div>
      <div className={styles.slider} id="product-image-slider">
        <Slider {...settings}>
          {productInfo.images.map((image, index) => (
            <div className={styles.popupImage} key={index}>
              <img src={image} alt="smartwatch" />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.detail}>
        {productInfo.benefits.map((benefit, index) => (
          <div key={index}>
            <li className={styles.benefitTitle}>{benefit.title}</li>
            <div className={styles.description}>{benefit.description}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ModalProductService;
