import React from 'react'
import style from "@/styles/TechnologyInnovation/technology-innovation.module.scss";

const HealthInsight = [
  {
    title: "AI-Driven Personalization:",
    description: "Utilizes advanced AI to analyze health data, offering personalized insights and advice for optimal wellness outcomes. This continuous learning ensures evolving health recommendations tailored to user behaviors and preferences.",
    image: "/images/technology/banner1.png"
  },
  {
    title: "DePIN for Security & Connectivity",
    description: "Employs Decentralized Physical Infrastructure Network (DePIN) for secure, decentralized data collection from a wide array of devices. This enhances data security and user privacy while ensuring comprehensive health insights.",
    image: "/images/technology/banner2.png"
  }
]

const HealthEngage = [
  {
    title: "DePIN for Security & Connectivity",
    description: "Utilizes advanced AI to analyze health data, offering personalized insights and advice for optimal wellness outcomes. This continuous learning ensures evolving health recommendations tailored to user behaviors and preferences.",
    image: "/images/technology/banner3.png"
  },
  {
    title: "DePIN for Security & Connectivity",
    description: "Utilizes advanced AI to analyze health data, offering personalized insights and advice for optimal wellness outcomes. This continuous learning ensures evolving health recommendations tailored to user behaviors and preferences.",
    image: "/images/technology/banner4.png"
  }
]


const TechnologyInnovationPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.title}>
          AI & DePIN Integration for Enhanced Health Insights
        </div>
        <div className={style.containerWrapper}>
          {HealthInsight.map((item, index) => (
            <div key={index} className={style.block}>
              <div className={style.content}>
                <img src={item.image} alt={`banner`} />
                <div className={style.title}>
                  {item.title}
                </div>
                <div className={style.description}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.container}>
        <div className={style.title}>
          HealthFi Protocol Rewarding Health Engagement
        </div>
        <div className={style.containerWrapper}>
          {HealthEngage.map((item, index) => (
            <div key={index} className={style.block}>
              <div className={style.content}>
                <img src={item.image} alt={`banner`} />
                <div className={style.title}>
                  {item.title}
                </div>
                <div className={style.description}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnologyInnovationPage