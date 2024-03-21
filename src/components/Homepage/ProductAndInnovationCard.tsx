import styles from "@/styles/Homepage/product-innovation.module.scss";
import ModalProductService from "../ModalProductService";
import { useState } from "react";
import { PRODUCT_INFO } from "@/constants/products";
import useModal from "@/hooks/useModal";

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
  const [productInfo, setProductInfo] = useState(PRODUCT_INFO[0]);
  const { modalIsOpen, onOpen, onClose } = useModal();
  const openModal = (e: any, infoId: string) => {
    e.preventDefault();
    const info = PRODUCT_INFO.find((item) => item.id === infoId);
    if (info) {
      setProductInfo(info);
      onOpen();
    }
    onOpen();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <div
            className={styles.imageContainer}
            // style={{ height: imageHeight, width: imageWidth }}
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
        onClose={onClose}
        productInfo={productInfo}
      />
    </>
  );
};

export default ProductAndInnovationCard;
