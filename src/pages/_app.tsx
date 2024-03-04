import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Orbitron } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "@/constants/firebase-config";
import { getAnalytics } from "@firebase/analytics";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import styles from "@/styles/Homepage/cookies-nott.module.scss";
import "react-hook-consent/dist/styles/style.css";
import {
  ConsentBanner,
  ConsentOptions,
  ConsentProvider,
} from "react-hook-consent";

const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== "undefined") {
  getAnalytics(app);
}

export const orbitron = Orbitron({ subsets: ["latin"] });

const consentOptions: ConsentOptions = {
  services: [],
  theme: "light",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <div className="content-body">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}
