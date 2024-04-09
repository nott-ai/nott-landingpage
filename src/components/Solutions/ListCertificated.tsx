import React from "react";
import style from "@/styles/Solutions/list-certificated.module.scss";

const data = [
  {
    id: 1,
    title: "Medical Research",
    description:
      "Health data from the network is utilized by data consumers for advancing medical research and clinical studies",
  },
  {
    id: 2,
    title: "Sleep Pattern Exploration",
    description:
      "Data consumers analyze health data to investigate sleep patterns for insights into improving sleep health",
  },
  {
    id: 3,
    title: "Vitual Health Assistance",
    description:
      "Service providers offer virtual health assistant packages to help users manage and enhance their health",
  },
  {
    id: 4,
    title: "Stress & Anxiety Analytics",
    description:
      "Service providers deliver analytics packages that assess stress and anxiety to improve mental wellness",
  },
  {
    id: 5,
    title: "Smart Wearable Devices",
    description:
      "Manufacturers within the NOTT ecosystem offer smart wearable devices for real-time health and fitness monitoring",
  },
  {
    id: 6,
    title: "Smart Scale",
    description:
      "The NOTT ecosystem includes manufacturers who sell smart scales that enable users to track various health metrics",
  },
];

const ListCertificated = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleMain}>Certificated Third Party Center</div>
      <div className={style.descriptionMain}>
        Explore the diverse applications of the NOTT ecosystem and unlock its
        full potential as a Certificated Third Party
      </div>
      <div className={style.layout}>
        {data.map((certificate) => {
          return (
            <div className={style.item} key={certificate.id}>
              <img
                src={`/images/solutions/certificate${certificate.id}.webp`}
                alt={`certificate${certificate.id}`}
              />
              <div className={style.content}>
                <div className={style.title}>{certificate.title}</div>
                <div className={style.description}>
                  {certificate.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCertificated;
