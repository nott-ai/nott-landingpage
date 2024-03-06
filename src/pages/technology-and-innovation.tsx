import React from 'react'
import style from "@/styles/TechnologyInnovation/technology-innovation.module.scss";

const HealthInsight = [
  {
    title: "AI-Driven Personalization",
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
    title: "Tokenized Incentives",
    description: "The HealthFi protocol rewards users for sharing health data and participating in wellness activities, promoting a community-driven health approach. This fosters active engagement in personal health management within the NOTT ecosystem.",
    image: "/images/technology/banner3.png"
  },
  {
    title: "Ecosystem Growth & User Rewards",
    description: "Through the HealthFi flywheel, user participation leads to ecosystem expansion, increasing the demand for services and enhancing the value for all stakeholders. This self-reinforcing model encourages continuous engagement and contributes to a thriving health community.",
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
                <img style={{ objectFit: 'contain' }} src={item.image} alt={`banner`} />
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
                <img style={{ objectFit: 'contain' }} src={item.image} alt={`banner`} />
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