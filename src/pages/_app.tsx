import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Orbitron } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "@/constants/firebase-config";
import { getAnalytics } from "@firebase/analytics";
import {
  RemoteConfig,
  getRemoteConfig,
  getString,
} from "@firebase/remote-config";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import CookiePopup from "@/components/Cookies/CookiePopup";

let remoteConfig: RemoteConfig;
const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== "undefined") {
  getAnalytics(app);
  remoteConfig = getRemoteConfig(app);
  remoteConfig.settings.minimumFetchIntervalMillis = 10000;
}

export { remoteConfig };
export const orbitron = Orbitron({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <CookiePopup />
      <Header />
      <div className="content-body">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}
