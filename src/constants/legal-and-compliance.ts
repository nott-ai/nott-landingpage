import { ROUTERS } from "./routes";

interface IContent {
  id: string;
  title: string;
  description: string | JSX.Element;
}

interface MenuItems {
  mainTitle: string;
  items: IContent[];
  router: string;
}
export const SIDE_MENU: MenuItems[] = [
  {
    mainTitle: "Legal Disclaimer",
    items: [],
    router: ROUTERS.LEGAL_AND_COMPLIANCE.LEGAL_DISCLAIMER,
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
        title: "Keep personal information safe",
        description: "",
      },
      {
        id: "controlsFeature",
        title: "Controls for do-not-track features",
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
    router: ROUTERS.LEGAL_AND_COMPLIANCE.PRIVACY_POLICY,
  },
  {
    mainTitle: "Terms of Service",
    items: [
      {
        id: "1",
        title: "About Use of NOTT’s Site",
        description: "",
      },
      {
        id: "2",
        title: "Creation account in NOTT application",
        description: "",
      },
      {
        id: "3",
        title: "Changes of NOTT’s Terms and Conditions",
        description: "",
      },
      {
        id: "4",
        title:
          "Collecting information of website/app and other platforms owned by NOTT",
        description: "",
      },
      {
        id: "5",
        title: "Protection of Your Privacy",
        description: "",
      },
      {
        id: "6",
        title: "User Representations and Warranties",
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
          "Ownership of Intellectual Property Rights, Trademarks and Copyrights on the Site",
        description: "",
      },
      {
        id: "10",
        title: "Prohibited Uses of the Site",
        description: "",
      },
      {
        id: "11",
        title: "Geographic Restrictions",
        description: "",
      },
      {
        id: "12",
        title: "Technology, Security, and User Responsibilities",
        description: "",
      },
      {
        id: "13",
        title: "Accounts Creation and Management; Site Access and Security",
        description: "",
      },
      {
        id: "14",
        title: "Accessing the Site and Account Security",
        description: "",
      },
      {
        id: "15",
        title: "Disclaimer of Warranties and Limitation of Liability",
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
        title: "Code of Conduct",
        description: "",
      },
      {
        id: "20",
        title: "Monitoring, Enforcement, and Termination",
        description: "",
      },
      {
        id: "21",
        title: "Updates to the Website",
        description: "",
      },
      {
        id: "22",
        title: "Dependence on Information Provided",
        description: "",
      },
      {
        id: "23",
        title: "Limitation of Liability & Remedies",
        description: "",
      },
      {
        id: "24",
        title: "Indemnification",
        description: "",
      },
      {
        id: "25",
        title: "Dispute Resolution and Binding Arbitration",
        description: "",
      },
      {
        id: "26",
        title: "Time Limitation for Claims",
        description: "",
      },
      {
        id: "27",
        title: "Waiver and Severability",
        description: "",
      },
      {
        id: "28",
        title: "Entire Agreement; Force Majeure",
        description: "",
      },
      {
        id: "29",
        title: "Your Comments and Concerns",
        description: "",
      },
      {
        id: "30",
        title: "Effective Date and Updates",
        description: "",
      },
    ],
    router: ROUTERS.LEGAL_AND_COMPLIANCE.TERMS_OF_SERVICE,
  },
  {
    mainTitle: "Device Drop Campaign",
    items: [],
    router: ROUTERS.LEGAL_AND_COMPLIANCE.DEVICE_DROP_CAMPAIGN,
  },
];
