import React, { useState } from "react";
import styles from "@/styles/Ekyc/ekyc.module.scss";
import { CheckboxPersonIcon, ShiftsTeamIcon } from "@/assets";
import { useRouter } from "next/router";
import { ROUTERS } from "@/constants/routes";
import { useEffect } from "react";

const Ekyc = () => {
  const router = useRouter();
  const [statistic, setStatistic] = useState<any>();
  const [email, setEmail] = useState("");

  useEffect(() => {
    getStatistic();
  }, []);

  const getStatistic = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/kyc/statistic`
      );
      const data = await response.json();
      setStatistic(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const trackStatus = async (email: string) => {
    if (!email.trim()) return;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/kyc/${email.trim()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        router.push(`${ROUTERS.KYC_TRACKING}?email=${email}&status=NOT_FOUND`);
      }
      const data = await response.json();
      if (data?.data) {
        setEmail("");
        router.push(
          `${ROUTERS.KYC_TRACKING}?email=${email}&status=${
            data?.data?.kycStatus
          }${
            data?.data?.kycRejectReason
              ? `&reason=${data?.data?.kycRejectReason}`
              : ""
          }`
        );
      }
    } catch (error: any) {
      console.log("error");
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Join Our <br /> HealthTech Revolution: <br />
          <span className={styles.highlight}> Exclusive Airdrop Inside</span>
        </h1>
        <p className={styles.description}>
          Explore our exclusive HealthTech Airdrop with over{" "}
          <span className={styles.number}>10,000 devices</span> to revolutionize
          your wellness journey with the latest health innovations. <br />{" "}
          Don&#39;t miss out!
        </p>
        <button
          className={styles.applyEkyc}
          onClick={() => router.push(ROUTERS.APPLY_KYC)}
        >
          Apply eKYC
        </button>
        <div className={styles.inputWrapper}>
          <input
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <div
            className={`${styles.track} ${
              email.trim().length === 0 ? styles.disable : ""
            }`}
            onClick={() => trackStatus(email)}
          >
            Track
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.rate}>
            <div>
              <CheckboxPersonIcon />
            </div>
            <div>
              <p className={styles.label}>KYC approval rate</p>
              <p className={styles.value}>
                {statistic?.approved}/{statistic?.total}
              </p>
            </div>
          </div>
          <div className={styles.queue}>
            <div>
              <ShiftsTeamIcon />
            </div>
            <div>
              <p className={styles.label}>You are in queue</p>
              <p className={styles.value}>{statistic?.pending} people</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>© 2018-2024 NOTT Innovative Technology. All rights reserved</div>
      </div>
    </div>
  );
};

export default Ekyc;
