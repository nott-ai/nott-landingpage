import styles from "@/styles/common/primary-button.module.scss";

type Variant = "primary" | "outline-white" | "outline-black";
interface PrimaryButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  isDisabled?: boolean;
  fontWeight?: 400 | 500 | 600 | 700;
  className?: string;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  variant = "primary",
  isDisabled = false,
  fontWeight = 400,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <div
      style={{
        fontWeight: fontWeight,
      }}
      className={`${styles["primary-button"]} ${styles[variant]} ${
        isDisabled ? styles["disabled"] : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
