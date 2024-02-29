import React, { useState } from "react";
import styles from "@/styles/Layout/faqs.module.scss";
import { dataFaqs } from "@/constants/faqs";
import Collapse from "../common/Collapse";
import { orbitron } from "@/pages/_app";
import Link from "../../../node_modules/next/link";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.containerFirst}>
          <div className={`${styles.contentTitle} ${orbitron.className}`}>
            Frequently Asked Questions
            <img
              className={styles.yellowCircle}
              src="../images/yellow-circle.svg"
              alt="graphic"
              loading="lazy"
            />
          </div>
          <img
            className={styles.graphicImage}
            src="../images/graphic.png"
            alt="graphic"
            loading="lazy"
          />
        </div>
        <div className={styles.readMoreDesktop}>
          <Link href={"#"}>Read more</Link>
        </div>
      </div>
      <div className={styles.contentSecond}>
        {dataFaqs.map((faq, index) => (
          <div
            key={index}
            style={
              openIndex === index
                ? { backgroundColor: "#E9F8FF", borderRadius: "24px" }
                : {}
            }
          >
            <div
              className={
                openIndex === index
                  ? `${styles.question} ${styles.activeQuestion}`
                  : styles.question
              }
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <img
                src={
                  openIndex === index
                    ? "../images/arrow-down-right.svg"
                    : "../images/arrow-right.svg"
                }
                loading="lazy"
                alt="Toggle Icon"
              />
            </div>
            <Collapse isActive={openIndex === index}>
              <div className={styles.answers}>
                {faq.answers.split("\n").map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </div>
            </Collapse>
          </div>
        ))}
      </div>
      <div className={styles.readMoreMobile}>
        <Link href={"#"}>Read more</Link>
      </div>
    </div>
  );
};

export default Faqs;
