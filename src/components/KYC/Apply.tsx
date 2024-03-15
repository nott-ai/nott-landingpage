import { DiscordIcon } from "@/assets";
import { SOCIAL_LINK } from "@/constants/social";
import { ERROR_MESSAGE, VALIDATION } from "@/constants/validation";
import styles from "@/styles/Ekyc/apply-ekyc.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import useDeviceDetect from "../common/DeviceDetect";

interface EKYCForm {
  firstName: string;
  lastName: string;
  passportNumber: string;
  address: string;
  email: string;
  discordUsername: string;
  telegramUsername: string;
}
interface KYCBody {
  email: string;
  firstName: string;
  lastName: string;
  idType: string;
  idNumber: string;
  address: string;
  discord: string;
  telegram?: string;
  captchaToken: string;
}
const ApplyKyc = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EKYCForm>();
  const { isMobile } = useDeviceDetect();
  const [loading, setLoading] = useState(false);
  const [startEkyc, setStartEkyc] = useState(false);
  const [doEkyc, setDoEkyc] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [authorizationData, setAuthorizationData] = useState({
    kycToken: "",
    idToken: "",
  });
  const env = process.env.NODE_ENV;

  const onSubmit = async (data: EKYCForm) => {
    if (startEkyc) return;
    try {
      setStartEkyc(true);
      await kyc(data);
      if (navigator.mediaDevices.getUserMedia !== null) {
        const constraints = {
          video: true,
        };

        navigator.mediaDevices
          .getUserMedia(constraints)
          .then((mediaStream) => {
            mediaStream.getTracks().forEach((track) => {
              track.stop();
            });
            setCameraPermission(true);
            setDoEkyc(true);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Camera permission denied");
            setCameraPermission(false);
          });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error);
    } finally {
      setStartEkyc(false);
    }
  };

  const kyc = async (data: EKYCForm) => {
    if (loading) return;
    const body: KYCBody = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      idType: "PASSPORT",
      idNumber: data.passportNumber,
      address: data.address,
      discord: data.discordUsername,
      telegram: data.telegramUsername,
      captchaToken: "",
    };
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/kyc`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data?.data) {
        setAuthorizationData({
          kycToken: data?.data?.kycToken,
          idToken: data?.data?.idToken,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>
          <span className={styles.highlight}> Quick KYC Process</span> <br />-
          Your Path to Wellness
        </p>
        {!doEkyc && (
          <p className={styles.description}>
            Complete our quick KYC process to secure your cutting-edge health
            device. Enhance your well-being today!
          </p>
        )}
        {doEkyc && cameraPermission ? (
          <div className={styles.ekycIframe}>
            <iframe
              id="kyc-iframe"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/kyc/index${
                env === "production" ? ".production" : ""
              }.html?idToken=${authorizationData.idToken}&kycToken=${
                authorizationData.kycToken
              }`}
              allow={`${cameraPermission ? "camera" : ""}`}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.rows}>
              <div className={styles.inputWrapper}>
                <input
                  {...register("firstName", {
                    required: ERROR_MESSAGE.REQUIRED,
                    validate: (value) => {
                      if (!VALIDATION.NAME.test(value)) {
                        return ERROR_MESSAGE.INVALID_NAME;
                      }
                    },
                  })}
                  placeholder="First name"
                />
                {errors.firstName?.message && (
                  <div className={styles.errorMsg}>
                    {errors.firstName?.message.toString()}
                  </div>
                )}
              </div>
              <div className={styles.inputWrapper}>
                <input
                  {...register("lastName", {
                    required: ERROR_MESSAGE.REQUIRED,
                    validate: (value) => {
                      if (!VALIDATION.NAME.test(value)) {
                        return ERROR_MESSAGE.INVALID_NAME;
                      }
                    },
                  })}
                  placeholder="Last name"
                />
                {errors.lastName?.message && (
                  <div className={styles.errorMsg}>
                    {errors.lastName?.message.toString()}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <input
                {...register("passportNumber", {
                  required: ERROR_MESSAGE.REQUIRED,
                  validate: (value) => {
                    if (!VALIDATION.PASSPORT.test(value)) {
                      return ERROR_MESSAGE.INVALID_PASSPORT;
                    }
                  },
                })}
                placeholder="Passport"
              />
              {errors.passportNumber?.message && (
                <div className={styles.errorMsg}>
                  {errors.passportNumber?.message.toString()}
                </div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                {...register("address", {
                  required: ERROR_MESSAGE.REQUIRED,
                })}
                maxLength={200}
                placeholder="Address"
              />
              {errors.address?.message && (
                <div className={styles.errorMsg}>
                  {errors.address?.message.toString()}
                </div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                {...register("email", {
                  required: ERROR_MESSAGE.REQUIRED,
                  validate: (value) => {
                    if (!VALIDATION.EMAIL.test(value)) {
                      return ERROR_MESSAGE.INVALID_EMAIL;
                    }
                  },
                })}
                placeholder="Email"
              />
              {errors.email?.message && (
                <div className={styles.errorMsg}>
                  {errors.email?.message.toString()}
                </div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                {...register("discordUsername", {
                  required: ERROR_MESSAGE.REQUIRED,
                })}
                placeholder="Discord username"
              />
              {errors.discordUsername?.message && (
                <div className={styles.errorMsg}>
                  {errors.discordUsername?.message.toString()}
                </div>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <input
                {...register("telegramUsername", {
                  required: ERROR_MESSAGE.REQUIRED,
                })}
                placeholder="Telegram username"
              />
              {errors.telegramUsername?.message && (
                <div className={styles.errorMsg}>
                  {errors.telegramUsername?.message.toString()}
                </div>
              )}
            </div>

            <button className={styles.applyEkyc} type="submit">
              {startEkyc ? <ClipLoader color="#fff" size={16} /> : "Do eKYC"}
            </button>
          </form>
        )}
      </div>
      <div className={styles.footer}>
        {!doEkyc && (
          <div className={styles.content}>
            <DiscordIcon /> <a href={SOCIAL_LINK.DISCORD}>Join Our Discord</a>
          </div>
        )}
        {isMobile && (
          <p className={styles.copyRight}>
            © 2018-2024 NOTT Foundation. All rights reserved
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplyKyc;
