import styles from "@/styles/Support/features.module.scss";
import Hero from "./Hero";

interface Props {
  children: React.ReactNode;
}

const LayoutSupport = ({ children }: Props) => {
  return (
    <div className={`${styles.wrapper}`}>
      <Hero />
      <div className={styles.container}>
        <div className={styles.rightBlock}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutSupport;
