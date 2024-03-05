import styles from "@/styles/Homepage/product-innovation.module.scss";

export interface IProductAndInnovationCard {
  title: string;
  description: string;
  images: string[];
  imageHeight: number;
  imageWidth: number;
}

const ProductAndInnovationCard = ({
  title,
  description,
  images,
  imageHeight,
  imageWidth,
}: IProductAndInnovationCard) => {
  return (
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
        <p className={styles.comingSoon}>Coming Soon</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.learnMore}>Learn More</p>
      </div>
    </div>
  );
};

export default ProductAndInnovationCard;
