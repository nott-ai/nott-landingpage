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
                  <>
                    Your Path to Wellness:
                    <br /> Quick KYC Process
                  </>
                ) : (
                  <>Email Verification Link Expired</>
                )}
              </p>
              <p className={styles.description}>
                {verifySuccess ? (
                  <>
                    Thank you for participating in NOTT&#39;s Device Drop
                    campaign. Your registration and eKYC submission have been
                    received. Stay informed about your application status by
                    email updates or for faster tracking, visit our{" "}
                    <Link href={ROUTERS.KYC}> Landing Page</Link>{" "}
                  </>
                ) : (
                  <>
                    Unfortunately, the verification link has expired and is not
                    available. For a new verification link, please click the
                    &#39;Resend&#39; button below. A new link will be sent to
                    your email immediately.
                  </>
                )}
              </p>
              {!verifySuccess && (
                <button className={styles.resendBtn}>Get new link</button>
              )}
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
                © 2018-2024 NOTT Foundation. All rights reserved
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Confirmation;
