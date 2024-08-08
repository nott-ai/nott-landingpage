import { orbitron } from "@/pages/_app";
import styles from "@/styles/Homepage/joining-the-waitlist.module.scss";
import PrimaryButton from "../common/PrimaryButton";
const JoiningTheWaitList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={`${orbitron.className} ${styles.title}`}>
            Joining The Waitlist now!
          </h1>
          <div className={styles.description}>
            Be the first to receive the latest updates on NOTT&#39;s innovative
            products and offerings
          </div>
        </div>
        <PrimaryButton className={styles.joinBtn}>
          Join The Waitlist
        </PrimaryButton>
      </div>
    </div>
  );
};

export default JoiningTheWaitList;
