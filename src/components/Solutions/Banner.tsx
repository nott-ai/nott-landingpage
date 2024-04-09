import React from "react";
import style from "@/styles/Solutions/banner.module.scss";
import { useRouter } from "next/router";
import { ROUTERS } from "@/constants/routes";
import Network from "./Network";

const Banner = () => {
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <img
        className={style.bg}
        src="/images/solutions/bannerSolution.webp"
        alt="bannerSolution"
      />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title}>
            SECURE wellness <br />
            data network <br />
            and mine NOTT token
          </div>
          <div className={style.description}>
            Dive into the NOTT Wellness DePIN Network: mine tokens while
            enhancing personal health. It’s health empowerment in your hands.
            Join now, and make your wellness count.
          </div>

          <button
            className={style.action}
            onClick={() => router.push(ROUTERS.SUPPORT)}
          >
            <div className={style.text}>Become a Participant</div>
          </button>
        </div>

        <div className={style.bgNetwork}>
          <div className={style.networkDesktop}>
            <Network />
          </div>
          <img
            className={style.networkMobile}
            src="/images/solutions/networks.webp"
            alt="networks"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
