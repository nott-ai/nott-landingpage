import {
  DiscordIcon,
  Error404Icon,
  FacebookIcon,
  GithubIcon,
  MailAlertIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/assets";
import { ROUTERS } from "@/constants/routes";
import { SOCIAL_LINK } from "@/constants/social";
import styles from "@/styles/Ekyc/apply-ekyc.module.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

const Confirmation = () => {
  const searchParams = useSearchParams();
  const verificationCode = searchParams.get("verificationCode");
  const [verifySuccess, setVerifySuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const verify = async (code: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/confirmation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );
      if (response.ok) {
        console.log("success");
        setVerifySuccess(true);
      } else {
        console.log("error");
        setVerifySuccess(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (verificationCode) {
      verify(verificationCode);
    }
  }, [verificationCode]);
  return (
    <>
      <div className={`${styles.wrapper} ${styles.confirmation}`}>
        {loading ? (
          <div className={styles.loading}>
            <FadeLoader loading={loading} color="#fff" />
          </div>
        ) : (
          <>
            <div className={styles.container}>
              {verifySuccess ? <MailAlertIcon /> : <Error404Icon />}

              <p className={styles.title}>
                {verifySuccess ? (
                  <>Submission Confirmed</>
                ) : (
                  <>Page Not Found</>
                )}
              </p>
              <p className={styles.description}>
                {verifySuccess ? (
                  <>
                    Thank you for participating in NOTT&#39;s Device Drop
                    campaign. Your registration and eKYC submission have been
                    received. <br /> Stay informed about your application status
                    by email updates or for faster tracking, visit our{" "}
                    <Link href={ROUTERS.KYC}> Landing Page</Link>{" "}
                  </>
                ) : (
                  <>
                    Oops! Something went wrong, and we couldn&#39;t complete
                    your email verification. This may be due to a technical
                    error or the page you&#39;re looking for doesn&#39;t exist
                    anymore.
                    <br />
                    <br />
                    Please try the verification process again, or contact our
                    support team for assistance:{" "}
                    <a href="mailto:info@nott.ai">info@nott.ai</a>
                  </>
                )}
              </p>

              <p className={styles.contact}>Contact</p>
              <div className={styles.socialNetwork}>
                <Link target="_blank" href={SOCIAL_LINK.GITHUB}>
                  <GithubIcon />
                </Link>
                <Link target="_blank" href={SOCIAL_LINK.TELEGRAM}>
                  <TelegramIcon />
                </Link>
                <Link target="_blank" href={SOCIAL_LINK.DISCORD}>
                  <DiscordIcon />
                </Link>
                <Link target="_blank" href={SOCIAL_LINK.FACEBOOK}>
                  <FacebookIcon />
                </Link>
                <Link target="_blank" href={SOCIAL_LINK.X}>
                  <TwitterIcon />
                </Link>
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.copyRight}>
                © 2018-2024 NOTT Innovative Technology. All rights reserved
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Confirmation;
