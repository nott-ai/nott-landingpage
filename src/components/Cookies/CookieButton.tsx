import styles from "@/styles/Homepage/cookies-nott.module.scss";

type CookieButtonType = "accept" | "reject";
interface CookieButtonProps {
  type: CookieButtonType;
}

const CookieButton: React.FC<CookieButtonProps> = ({
  type = "accept",
}: CookieButtonProps) => {
  return (
    <div
      className={`${styles["textContainer"]} ${
        type === "reject" ? styles["reject"] : styles["accept"]
      }`}
    >
      {type === "accept" ? "Accept All" : "Reject"}
    </div>
  );
};

export default CookieButton;
