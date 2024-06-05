export const INFO = {
  ADDRESS: `2118 Thornridge Cir. <br/>
Syracuse, Connecticut 35624`,
  PHONE: "(+84) 0123456789",
  EMAIL: "info@nott.ai",
  TWITTER: "https://twitter.com/nott_depin",
  BLOG: "https://blog.nott.ai/",
  WEBSITE: "https://nott.ai",
  FAQS: "#",
  WHITE_PAPER:
    "https://bit.ly/NOTT-Whitepaper",
};

export interface IDescription {
  image: string;
  type: string;
  title: string;
  items: string[];
}

export const BENEFITS = [
  {
    image: "/images/benefits/engage-daily.png",
    type: "User Benefits",
    title: "Empowering User-Controlled<br/> Data with NOTT",
    items: [
      "User Data Sovereignty",
      "Anonymous Data Sharing Rewards",
      "Contributing to Research",
    ],
  },

  {
    image: "/images/benefits/sleep-quality.png",
    type: "User Benefits",
    title: "Comprehensive Sleep Monitoring<br/> with NOTT",
    items: [
      "Advanced Sleep Tracking",
      "Personalized Sleep Insights",
      "Smart Environment Control",
    ],
  },
  {
    image: "/images/benefits/heart-rate.png",
    type: "User Benefits",
    title: "Heart Rate Monitorin<br/> for Holistic Wellness",
    items: [
      "Continuous Heart Rate Tracking",
      "AI-Driven Analysis",
      "Actionable Health Insights",
    ],
  },
  {
    image: "/images/benefits/stress.png",
    type: "User Benefits",
    title: "AI-Enhanced Stress Management<br/> with NOTT",
    items: [
      "Stress Level Detection",
      "Mindfulness and Relaxation Tips",
      "Real-time Feedback",
    ],
  },
];
