import { DiscordIcon } from "@/assets";
import { SOCIAL_LINK } from "@/constants/social";
import { ERROR_MESSAGE, VALIDATION } from "@/constants/validation";
import styles from "@/styles/Ekyc/apply-ekyc.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
const ApplyKyc = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EKYCForm>();
  const { isMobile } = useDeviceDetect();
  const [loading, setLoading] = useState(false);
  const [doEkyc, setDoEkyc] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(false);
  const onSubmit = (data: EKYCForm) => {
    console.log(data);
    try {
      if (navigator.mediaDevices.getUserMedia !== null) {
        const constraints = {
          video: true,
        };
        navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
          mediaStream.getTracks().forEach((track) => {
            track.stop();
          });
          setCameraPermission(true);
          setDoEkyc(true);
          console.log(mediaStream);
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Camera permission denied");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>
          <span className={styles.highlight}> Quick KYC Process</span> <br />-
          Your Path to Wellness
        </p>
        <p className={styles.description}>
          Complete our quick KYC process to secure your cutting-edge health
          device. Enhance your well-being today!
        </p>
        {doEkyc && cameraPermission ? (
          <div className={styles.ekycIframe}>
            <iframe
              src="http://localhost:4200"
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
              Do eKYC
            </button>
          </form>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <DiscordIcon /> <a href={SOCIAL_LINK.DISCORD}>Join Our Discord</a>
        </div>
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
