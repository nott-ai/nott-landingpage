interface IContent {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export const SUPPORT = {
  SYSTEM_REQUIREMENTS: "systemRequirements",
  SECTION_SCROLL: "sectionToScrollTo",
  REGISTER_LOGIN: "registerLogin",
  IOS: "downloadApp",
  CONNECTING_DEVICES: "connectingDevices",
};
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
    mainTitle: "Download NOTT Beta",
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
        title: "With NOTT devices",
        description: "",
      },
      {
        id: "connectingDevices2",
        title: "With Third Party application",
        description: "",
      },
    ],
  },
];

export const GUIDELINE: MenuItems[] = [
  {
    id: "systemRequirements",
    mainSection: "1. System Requirements",
    items: [
      {
        title: "",
        id: "systemRequirements",
        description:
          "To ensure the optimal performance and high security of the NOTT Beta, it is necessary to use devices operating on compatible system software.\n•  For users with iOS devices, the application requires iOS 16.5 or later.\n• For users with Android devices, the application requires Android 11 or later.",
      },
    ],
  },
  {
    id: "downloadApp",
    mainSection: "2. Download NOTT Beta",
    mainTitle: "IOS",
    items: [
      {
        id: "ios",
        title:
          "Step 1: Download <a target='_blank' href='https://testflight.apple.com/join/YZtG2TFf'>TestFlight</a>",
        description:
          "If you haven't already, download the <a target='_blank' href='https://testflight.apple.com/join/YZtG2TFf'>TestFlight</a> app from the App Store on your iOS device. Simply open the App Store, search for TestFlight and download the app.",
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
        title: "Step 3: Install the NOTT Beta",
        description:
          "Click on Install to start downloading the beta version of the app to your device. The process is similar to downloading any app from the App Store.",
        image: "/images/support/support3.webp",
      },
      {
        id: "openingNott",
        title: "Step 4: Open NOTT Beta",
        description:
          "After the app is installed, you can open it directly from your home screen; or click OPEN in TestFlight. And now you are ready to experience NOTT Beta.",
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
          "Here is the screen for instruction of sharing feedback. Click Start Testing to experience NOTT Beta.",
        image: "/images/support/support6.webp",
      },
    ],
  },
  {
    id: "android",
    mainTitle: "Android",
    items: [
      {
        id: "android",
        title:
          "Step 1: Download the <a target='_blank' href='https://drive.google.com/file/d/1S4XwdrjYcnONTTMA37DKu9eq9-mHMgSF/view'>APK File</a>",
        description:
          "Click Download to download the <a target='_blank' href='https://drive.google.com/file/d/1S4XwdrjYcnONTTMA37DKu9eq9-mHMgSF/view'>APK File</a> of the NOTT Beta.",
        image: "/images/support/support7.webp",
      },
      {
        id: "invitationLink",
        title: "Step 2: Open the APK File",
        description:
          "Locate the downloaded APK file. This might be in your device's Downloads folder or wherever you chose to save it.\n Tap on the APK file - which is named nott-release.apk to open it. If you're doing this for the first time, you may be prompted to allow your file manager or browser app to install the APK. Confirm the prompt then click Install for app installation.",
        image: "/images/support/support8.webp",
      },
      {
        id: "installingNott",
        title: "Step 3: Install the NOTT Beta",
        description:
          "After opening the APK file, your device will prompt you with a confirmation to install the beta app. Review the permissions it requests, then tap Install.",
        image: "/images/support/support9.webp",
      },
      {
        id: "openingNott",
        title: "Step 4: Open and Test the NOTT Beta app",
        description:
          "Once the installation is complete, you can either tap Open directly from the installation screen to launch the beta app or find the app icon in your device’s beta app drawer.",
        image: "/images/support/support10.webp",
      },
    ],
  },
  {
    id: "registerLogin",
    mainSection: "3. Register & Login with Passkey",
    items: [
      {
        id: "tapToVerify",
        title: "Step 1: Tap To Verify",
        description:
          "When open the beta app, on the “Tap to verify” screen, click on logo to initiate the registration process.",
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
          "After setting up your passkey, the beta app will automatically log you into your new account.",
        image: "/images/support/support22.webp",
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
    id: "connectingDevices",
    mainSection: "4. Connecting Devices",
    mainTitle: "Connecting with NOTT devices",
    items: [
      {
        id: "connectingDevices1",
        title: "Step 1: Access the Main Screen",
        description:
          'Open the beta app, from the main screen, select "Connect Apps & Devices " to begin the connection process.',
        image: "/images/support/support14.webp",
      },
      {
        id: "chooseDevice",
        title: "Step 2: Choose the Device",
        description:
          'On the following screen, you will see a list of compatible apps and devices. Select various options to connect with the "NOTT Devices"',
        image: "/images/support/support15.webp",
      },
      {
        id: "prepareConnection",
        title: "Step 3: Prepare for Connection",
        description:
          "Ensure your mobile device's Bluetooth is turned on and you have a stable internet connection. Place the NOTT device close to your mobile device and check that the NOTT device is adequately charged. The app will automatically scan for signals from the NOTT device.",
        image: "/images/support/support16.webp",
      },
      {
        id: "authenticatePair",
        title: "Step 4: Authenticate and Pair",
        description:
          "Once successfully pair, click “Complete” to confirm the process.",
        image: "/images/support/support17.webp",
      },
      {
        id: "confirmationConnection",
        title: "Step 5: Confirmation of Successful Connection",
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
        id: "connectingDevices2",
        title: "Step 1: Select a Third-Party App",
        description:
          'In the "Connect Apps & Devices" screen, in "Other Apps & Devices", choose the third-party application or device you want to connect with.',
        image: "/images/support/support19.webp",
      },
      {
        id: "loginAccount",
        title: "Step 2: Log In to Your Account",
        description:
          "After selecting the desired application, a login screen will appear for you to enter your account details on that third-party application. Log in to authenticate and establish the connection.",
        image: "/images/support/support20.webp",
      },
      {
        id: "confirmationConnection",
        title: "Step 3: Confirmation of Successful Connection",
        description:
          'Once a third-party application is successfully connected, it will be highlighted on the "Connect Apps & Devices" screen.',
        image: "/images/support/support21.webp",
      },
    ],
  },
];
