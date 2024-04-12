import React from "react";
import style from "@/styles/Solutions/proof.module.scss";
import useDeviceDetect from "../common/DeviceDetect";

const Proof = () => {
  const { isMobile } = useDeviceDetect();
  return (
    <div className={style.wrapper}>
      <div className={style.layout}>
        <div className={style.item}>
          {!isMobile ? (
            <img src="/images/solutions/img_proof_1.png" alt="img_proof_1" />
          ) : (
            <img
              src="/images/solutions/img_proof_mb_1.png"
              alt="img_proof_mb_1"
            />
          )}

          <div className={style.content}>
            <div className={style.title}>PROOF OF IDENTITY</div>
            <div className={style.description}>
              A consensus mechanism is used to validate the identity of
              participants within NOTT network
            </div>
          </div>
        </div>
        <div className={style.item}>
          {!isMobile ? (
            <img src="/images/solutions/img_proof_2.png" alt="img_proof_2" />
          ) : (
            <img
              src="/images/solutions/img_proof_mb_2.png"
              alt="img_proof_mb_2"
            />
          )}
          <div className={style.content}>
            <div className={`${style.title} ${style.contentRight}`}>
              PROOF OF CONTRIBUTION
            </div>
            <div className={`${style.description} ${style.contentRight}`}>
              A mechanism is designed to ensure fair and transparent rewards for
              contributors within NOTT network
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proof;
