import React, { useState } from "react";
import styles from "@/styles/AboutUs/faqs.module.scss";
import { dataFaqs } from "@/constants/faqs";
import Collapse from "../common/Collapse";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.wrapper}>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={styles.faqs}
      >
        <div className={`${styles.contentTitle} `}>
          Frequently Asked Questions
        </div>
        <div className={styles.contentSecond}>
          {dataFaqs.map((faq, index) => (
            <div
              key={index}
              style={openIndex === index ? { backgroundColor: "#F2F2F2" } : {}}
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
      </div>
      <img
        data-aos="fade-uo"
        data-aos-duration="1000"
        className={styles.graphicImage}
        src="/images/faqs.png"
        alt="faqs"
        loading="lazy"
      />
    </div>
  );
};

export default Faqs;
