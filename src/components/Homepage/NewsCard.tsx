import styles from "@/styles/Homepage/news-card.module.scss";
import Link from "next/link";

export interface INewsCard {
  title: string;
  description: string;
  image: string;
  url: string;
}

const NewsCard = ({ title, description, url, image }: INewsCard) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <div className={styles.card1} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img className={styles.image} alt="" src={image} />
      </div>
      <div className={styles.newResearchOnProstateCanceParent}>
        <div className={styles.newResearchOn}>{title}</div>
        <div className={styles.researchersAreReporting}>{description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
