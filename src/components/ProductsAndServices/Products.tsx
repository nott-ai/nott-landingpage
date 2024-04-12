import React, { useState } from "react";
import styles from "@/styles/ProductsAndServices/products.module.scss";
import ModalProductService from "@/components/ModalProductService";

import { PRODUCT_INFO, PRODUCT_LINEUP_DATA } from "@/constants/products";
import useModal from "@/hooks/useModal";

const Products = () => {
  const { modalIsOpen, onOpen, onClose } = useModal();
  const [productInfo, setProductInfo] = useState(PRODUCT_INFO[0]);
  const openModal = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    infoId: string
  ) => {
    e.preventDefault();
    const info = PRODUCT_INFO.find((item) => item.id === infoId);
    if (info) {
      setProductInfo(info);
      onOpen();
    }
    onOpen();
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{`NOTT's Initial Product Lineup`}</p>
      <p
        className={styles.description}
      >{`Explore NOTT's innovative product range, featuring smartwatch, smartband, smartscale, and smartpillow designed to enhance your health and wellness journey.`}</p>
      <div className={styles.products}>
        <div className={styles.contentRow}>
          {PRODUCT_LINEUP_DATA.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img className={styles.image} src={item.img} alt={item.title} />
                <div className={styles.divider} />
              </div>
              <div className={styles.textContent}>
                <div className={styles.header}>
                  {/* <p className={styles.status}>{item.status}</p> */}
                  <p className={styles.title}>{item.title}</p>
                </div>
                <div className={styles.description}>{item.description}</div>
                <a
                  href="#"
                  onClick={(e) => openModal(e, item.id)}
                  className={styles.learnMore}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalProductService
        modalIsOpen={modalIsOpen}
        productInfo={productInfo}
        onClose={onClose}
      />
    </div>
  );
};

export default Products;
