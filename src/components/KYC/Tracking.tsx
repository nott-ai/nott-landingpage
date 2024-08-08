import { MailAlertIcon } from "@/assets";
import styles from "@/styles/Ekyc/apply-ekyc.module.scss";
import { useSearchParams } from "next/navigation";

const STATUS: {
  [key: string]: {
    title: string;
    description: string;
  };
} = {
  NOT_FOUND: {
    title: "Not Found!",
    description:
      "We could not find any application matching the provided Email. Please verify your email and try again.",
  },
  NOT_VERIFIED_EMAIL: {
    title: "Not Verified Email!",
    description:
      "Your email address is awaiting verification. A confirmation link has been sent to your inbox. Please check your email for the verification link",
  },
  PENDING: {
    title: "Received & Pending!",
    description:
      "Your application is safely with us and currently under review. We're working hard to process it swiftly. We'll notify you once there's an update.",
  },
  APPROVED: {
    title: "Prepared to Ship!",
    description:
      "Great news! Your application has been approved, and your device is now being prepared for shipment.",
  },

  SHIPPED: {
    title: "Shipped!",
    description:
      "Your device is on its way! We hope you're as excited as we are. Track your shipment with the provided tracking number to know when to expect delivery.",
  },
  REJECTED: {
    title: "Rejected!",
    description: "[Custom reason will be displayed here]",
  },
};
const Tracking = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const status = searchParams.get("status");
  const reason = searchParams.get("reason");
  const currenStatus = status ? STATUS[status + ""] : STATUS.NOT_FOUND;

  return (
    <div className={`${styles.wrapper} ${styles.tracking}`}>
      <div className={styles.container}>
        <MailAlertIcon />
        <h1 className={styles.title}>eKYC Application Status Tracking</h1>
        <p className={styles.description}>
          Stay updated with the progress of your eKYC application for the Device
          Drop Campaign.
        </p>
        <p className={styles.email}>{email}</p>
        <div className={styles.status}>
          <div className={`${styles.highlight} ${styles[`${status}`]}`}>
            {" "}
            {currenStatus.title}
          </div>
          <div>Status</div>
        </div>
        <p className={styles.statusDescription}>
          {status !== "REJECTED"
            ? currenStatus.description
            : `Reason: ${reason}`}
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyRight}>
          © 2018-2024 NOTT Innovative Technology. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Tracking;
