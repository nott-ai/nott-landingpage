import React from "react";
import style from "@/styles/Solutions/banner.module.scss";

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <img
        className={style.bg}
        src="/images/solutions/bannerSolution.png"
        alt=""
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

          <button className={style.action}>
            <div className={style.text}>Become a Participant</div>
          </button>
        </div>

        <div className={style.bgNetwork}>
          <img src="/images/solutions/networks.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;