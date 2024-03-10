import styles from "@/styles/Homepage/product-innovation.module.scss";
import ModalProductService from "../ModalProductService";
import { useState } from "react";
import { PRODUCT_INFO } from "@/constants/products";

export interface IProductAndInnovationCard {
  id: string;
  title: string;
  description: string;
  images: string[];
  imageHeight: number;
  imageWidth: number;
}

const ProductAndInnovationCard = ({
  id,
  title,
  description,
  images,
  imageHeight,
  imageWidth,
}: IProductAndInnovationCard) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productInfo, setProductInfo] = useState(PRODUCT_INFO[0]);
  const openModal = (e: any, infoId: string) => {
    e.preventDefault();
    const info = PRODUCT_INFO.find((item) => item.id === infoId);
    if (info) {
      setProductInfo(info);
      setModalIsOpen(true);
    }
    setModalIsOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div
            className={styles.imageContainer}
            style={{ height: imageHeight, width: imageWidth }}
          >
            <img className={styles.image} src={images[0]} alt="wearable" />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.rightBlock}>
          {/* <p className={styles.comingSoon}>Coming Soon</p> */}
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <a
            href="#"
            onClick={(e) => openModal(e, id)}
            className={styles.learnMore}
          >
            Learn more
          </a>
        </div>
      </div>
      <ModalProductService
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        productInfo={productInfo}
      />
    </>
  );
};

export default ProductAndInnovationCard;
