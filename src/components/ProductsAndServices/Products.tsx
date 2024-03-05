import React, { useState } from "react";
import styles from "@/styles/ProductsAndServices/products.module.scss";
import ModalProductService from "@/components/ModalProductService";

import { PRODUCT_INFO, PRODUCT_LINEUP_DATA } from "@/constants/products";

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{`NOTT's Initial Product Lineup`}</p>
      <p
        className={styles.description}
      >{`Explore NOTT's innovative product range, featuring smartwatch, smartband, smartscale, and smart pillow designed to enhance your health and wellness journey.`}</p>
      <div className={styles.products}>
        <div className={styles.contentRow}>
          {PRODUCT_LINEUP_DATA.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.img} alt="smartwatch" />
                <div className={styles.divider} />
              </div>
              <div className={styles.textContent}>
                <div className={styles.header}>
                  <p className={styles.status}>{item.status}</p>
                  <p className={styles.title}>{item.title}</p>
                </div>
                <div className={styles.description}>{item.description}</div>
                <a href="#" onClick={openModal} className={styles.learnMore}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalProductService
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        productInfo={PRODUCT_INFO}
      />
    </div>
  );
};

export default Products;