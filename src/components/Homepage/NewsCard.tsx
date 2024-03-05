import styles from "@/styles/Homepage/news-card.module.scss";

export interface INewsCard {
  title: string;
  description: string;
  image: string;
  url: string;
}

const NewsCard = ({ title, description, url, image }: INewsCard) => {
  return (
    <div className={styles.card1}>
      <img className={styles.imgIcon} alt="" src={image} />
      <div className={styles.newResearchOnProstateCanceParent}>
        <div className={styles.newResearchOn}>{title}</div>
        <div className={styles.researchersAreReporting}>{description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
