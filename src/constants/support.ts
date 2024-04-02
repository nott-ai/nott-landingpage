interface IContent {
  id: string;
  title?: string;
  description: string;
  image?: string;
}

export const SUPPORT = {
  SYSTEM_REQUIREMENTS: "systemRequirements",
  SECTION_SCROLL: "sectionToScrollTo",
  REGISTER_LOGIN: "registerLogin",
  IOS : 'ios',
  CONNECTING_DEVICES: 'connectingDevices1',
}
interface MenuItems {
  id: string;
  mainSection?: string;
  mainTitle?: string;
  items: IContent[];
}

export const SIDE_MENU_SUPPORT: MenuItems[] = [
  {
    id: "systemRequirements",
    mainTitle: "System Requirements",
    items: [],
  },
  {
    id: "ios",
    mainTitle: "Download NOTT Application",
    items: [
      {
        id: "ios",
        title: "IOS",
        description: "",
      },
      {
        id: "android",
        title: "Android",
        description: "",
      },
    ],
  },
  {
    id: "registerLogin",
    mainTitle: "Register & Login with Passkey",
    items: [],
  },
  {
    id: "connectingDevices1",
    mainTitle: "Connecting Devices",
    items: [
      {
        id: "connectingDevices1",
        title: "NOTT devices",
        description: "",
      },
      {
        id: "connectingDevices2",
        title: "Third Party application",
        description: "",
      },
    ],
  },
];

export const GUIDELINE: MenuItems[] = [
  {
    id: "systemRequirements",
    items: [],
  },
  {
    id: "ios",
    mainSection: "2.Download NOTT Application",
    mainTitle: "IOS",
    items: [
      {
        id: "downloadTestFlight",
        title: "Step 1: Download TestFlight",
        description:
          "If you haven't already, download the TestFlight app from the App Store on your iOS device. Simply open the App Store, search for TestFlight and download the app.",
        image: "/images/support/support1.webp",
      },
      {
        id: "invitationLink",
        title: "Step 2: Open the Invitation Link",
        description:
          "After successfully install TestFlight, open the invitation link you received from the developer. Click Continue to open list of available app for download",
        image: "/images/support/support2.webp",
      },
      {
        id: "installingNott",
        title: "Step 3: Install the NOTT App",
        description:
          "Click on Install to start downloading the beta version of the app to your device. The process is similar to downloading any app from the App Store.",
        image: "/images/support/support3.webp",
      },
      {
        id: "openingNott",
        title: "Step 4: Open NOTT App",
        description:
          "After the app is installed, you can open it directly from your home screen; or click OPEN in TestFlight. And now you are ready to experience NOTT app.",
        image: "/images/support/support4.webp",
      },
      {
        id: "readGuideline",
        title: "Step 5: Read Guideline from the Developer",
        description:
          "After reading guideline from the developer, click Next to go to next screen.",
        image: "/images/support/support5.webp",
      },
      {
        id: "shareFeedback",
        title: "Step 6: Share Feedback",
        description:
          "Here is the screen for instruction of sharing feedback. Click Start Testing to experience NOTT app.",
        image: "/images/support/support6.webp",
      },
    ],
  },
  {
    id: "android",
    mainTitle: "Android",
    items: [
      {
        id: "downloadTestFlight",
        title: "Step 1: Download TestFlight",
        description:
          "If you haven't already, download the TestFlight app from the App Store on your iOS device. Simply open the App Store, search for TestFlight and download the app.",
        image: "/images/support/support7.webp",
      },
      {
        id: "invitationLink",
        title: "Step 2: Open the Invitation Link",
        description:
          "After successfully install TestFlight, open the invitation link you received from the developer. Click Continue to open list of available app for download",
        image: "/images/support/support8.webp",
      },
      {
        id: "installingNott",
        title: "Step 3: Install the NOTT App",
        description:
          "Click on Install to start downloading the beta version of the app to your device. The process is similar to downloading any app from the App Store.",
        image: "/images/support/support9.webp",
      },
      {
        id: "openingNott",
        title: "Step 4: Open NOTT App",
        description:
          "After the app is installed, you can open it directly from your home screen; or click OPEN in TestFlight. And now you are ready to experience NOTT app.",
        image: "/images/support/support10.webp",
      },
    ],
  },
  {
    id: "registerLogin",
    mainSection: "3.Register & Login with Passkey",
    mainTitle: "Register with passkey",
    items: [
      {
        id: "tapToVerify",
        title: "Step 1: Tap To Verify",
        description:
          "When open the app, on the “Tap to verify” screen, click on logo to initiate the registration process.",
        image: "/images/support/support11.webp",
      },
      {
        id: "createPasskey",
        title: "Step 2: Create Your Passkey",
        description:
          "Next, you will be asked to create a passkey. Click “Continue” to create a secure and memorable passkey.",
        image: "/images/support/support12.webp",
      },
      {
        id: "verifyPasskey",
        title: "Step 3: Verify Passkey",
        description:
          "After setting up your passkey, the app will automatically log you into your new account.",
        image: "/images/support/support13.webp",
      },
      {
        id: "automaticLogin",
        title: "Step 4: Automatic Login",
        description:
          "You are now directly taken into the app’s main dashboard, where you can start exploring all the features available.",
        image: "/images/support/support14.webp",
      },
    ],
  },
  {
    id: "connectingDevices1",
    mainSection: "4.Connecting Devices",
    mainTitle: "Connecting with NOTT devices",
    items: [
      {
        id: "accessMainScreen",
        title: "Step 1: Access the Main Screen",
        description:
          'Open the app, from the main screen, select "Connect Apps & Devices " to begin the connection process.',
        image: "/images/support/support15.webp",
      },
      {
        id: "chooseDevice",
        title: "Step 2: Choose the Device",
        description:
          'On the following screen, you will see a list of compatible apps and devices. Select various options to connect with the "NOTT Devices',
        image: "/images/support/support16.webp",
      },
      {
        id: "prepareConnection",
        title: "Step 3: Prepare for Connection",
        description:
          "Ensure your mobile device's Bluetooth is turned on and you have a stable internet connection. Place the NOTT device close to your mobile device and check that the NOTT device is adequately charged. The app will automatically scan for signals from the NOTT device.",
        image: "/images/support/support17.webp",
      },
      {
        id: "authenticatePair",
        title: "Step 4: Authenticate and Pair",
        description:
          "Once successfully pair, click “Complete” to confirm the process.",
        image: "/images/support/support18.webp",
      },
      {
        id: "confirmationConnection",
        title: "Steps 5: Confirmation of Successful Connection",
        description:
          'When successfully connecting with the NOTT devices, it will be highlighted on the "Connect Apps & Devices" screen.',
        image: "/images/support/support18.webp",
      },
    ],
  },
  {
    id: "connectingDevices2",
    mainTitle: "Connecting with third party application",
    items: [
      {
        id: "selectApp",
        title: "Step 1: Select a Third-Party App",
        description:
          'In the "Connect Apps & Devices" screen, in Other Apps & Devices, choose the third-party application or device you want to connect with.',
        image: "/images/support/support20.webp",
      },
      {
        id: "loginAccount",
        title: "Step 2: Log In to Your Account",
        description:
          "After selecting the desired application, a login screen will appear for you to enter your account details on that third-party application. Log in to authenticate and establish the connection.",
        image: "/images/support/support21.webp",
      },
      {
        id: "confirmationConnection",
        title: "Steps 3: Confirmation of Successful Connection",
        description:
          'Once a third-party application is successfully connected, it will be highlighted on the "Connect Apps & Devices" screen.',
        image: "/images/support/support22.webp",
      },
    ],
  },
];
