interface IContent {
  id: string;
  title: string;
  description: string | JSX.Element;
}

interface MenuItems {
  mainTitle: string;
  items: IContent[];
}
export const SIDE_MENU: MenuItems[] = [
  {
    mainTitle: "Legal Disclaimer",
    items: [],
  },
  {
    mainTitle: "Privacy Policy",
    items: [
      {
        id: "collecting-information",
        title: "Collecting information",
        description: "",
      },
      {
        id: "processing-information",
        title: "Processing of information",
        description: "",
      },
      {
        id: "legal-basis",
        title: "Legal basis",
        description: "",
      },
      {
        id: "personal-information",
        title: "Sharing personal information",
        description: "",
      },
      {
        id: "cookies",
        title: "Cookies & tracking technologies",
        description: "",
      },
      {
        id: "storing-personal-information",
        title: "Storing personal information",
        description: "",
      },
      {
        id: "keepPersonal",
        title: "Keep Personal Information Safe",
        description: "",
      },
      {
        id: "controlsFeature",
        title: "Controls For Do-Not-Track Features",
        description: "",
      },
      {
        id: "sharingData",
        title: "Sharing data with others",
        description: "",
      },
      {
        id: "userRight",
        title: "Users’ right with their own data",
        description: "",
      },
      {
        id: "updateAndNotice",
        title: "Updates and Notice",
        description: "",
      },
    ],
  },
  {
    mainTitle: "Terms of Service",
    items: [
      {
        id: "1",
        title: "About Use Of NOTT’s Site",
        description: "",
      },
      {
        id: "2",
        title: "Creation Account In NOTT App",
        description: "",
      },
      {
        id: "3",
        title: "Changes Of NOTT’s Terms And Conditions",
        description: "",
      },
      {
        id: "4",
        title:
          "Collecting Information Of Website/App And Other Platforms Owned By NOTT",
        description: "",
      },
      {
        id: "5",
        title: "Protection Of Your Privacy",
        description: "",
      },
      {
        id: "6",
        title: "User Representations And Warranties",
        description: "",
      },
      {
        id: "7",
        title: "Terms And Conditions For The Site",
        description: "",
      },
      {
        id: "8",
        title: "Data Protection",
        description: "",
      },
      {
        id: "9",
        title:
          "Ownership Of Intellectual Property Rights, Trademarks And Copyrights On The Site",
        description: "",
      },
      {
        id: "10",
        title: "Prohibited Uses Of The Site",
        description: "",
      },
      {
        id: "11",
        title: "Geographic Restrictions",
        description: "",
      },
      {
        id: "12",
        title: "Technology, Security, And User Responsibilities",
        description: "",
      },
      {
        id: "13",
        title: "Accounts Creation And Management; Site Access And Security",
        description: "",
      },
      {
        id: "14",
        title: "Accessing The Site And Account Security",
        description: "",
      },
      {
        id: "15",
        title: "Disclaimer Of Warranties And Limitation Of Liability",
        description: "",
      },
      {
        id: "16",
        title: "Using Mobile Devices",
        description: "",
      },
      {
        id: "17",
        title: "No Guaranteed Outcomes",
        description: "",
      },
      {
        id: "18",
        title: "Independent Status",
        description: "",
      },
      {
        id: "19",
        title: "Code Of Conduct",
        description: "",
      },
      {
        id: "20",
        title: "Monitoring, Enforcement, And Termination",
        description: "",
      },
      {
        id: "21",
        title: "Updates To The Website",
        description: "",
      },
      {
        id: "22",
        title: "Dependence On Information Provided",
        description: "",
      },
      {
        id: "23",
        title: "Limitation Of Liability & Remedies",
        description: "",
      },
      {
        id: "24",
        title: "Indemnification",
        description: "",
      },
      {
        id: "25",
        title: "Dispute Resolution And Binding Arbitration",
        description: "",
      },
      {
        id: "26",
        title: "Time Limitation For Claims",
        description: "",
      },
      {
        id: "27",
        title: "Waiver And Severability",
        description: "",
      },
      {
        id: "28",
        title: "Entire Agreement; Force Majeure",
        description: "",
      },
      {
        id: "29",
        title: "Your Comments And Concerns",
        description: "",
      },
      {
        id: "30",
        title: "Effective Date And Updates",
        description: "",
      },
    ],
  },
  {
    mainTitle: "Device Drop Campaign",
    items: [],
  },
];
