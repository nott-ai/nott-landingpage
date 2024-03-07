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
import Script from "next/script";
import CookiePopup from "@/components/Cookies/CookiePopup";
import CookieDetailPopup from "@/components/Cookies/CookieDetailPopup";
import { useState } from "react";
import { VISIBLE_OPTIONS } from "react-cookie-consent";
import CookieRequest from "@/components/Cookies/CookieRequest";

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
      <CookieRequest />
      <Header />
      <div className="content-body">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}
