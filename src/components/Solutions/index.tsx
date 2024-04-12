import React from "react";
import Banner from "./Banner";
import Proof from "./Proof";
import style from "@/styles/Solutions/main.module.scss";
import ListCertificated from "./ListCertificated";

const Solutions = () => {
  return (
    <div className={style.wrapper}>
      <Banner />
      <Proof />
      <ListCertificated />
    </div>
  );
};

export default Solutions;
