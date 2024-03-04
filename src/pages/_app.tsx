import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter, Orbitron } from "next/font/google";
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
export const inter = Inter({ subsets: ["latin"] });

export const orbitron = Orbitron({ subsets: ["latin"] });

const consentOptions: ConsentOptions = {
  services: [],
  theme: "light",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConsentProvider options={consentOptions}>
      <main className={`${inter.className}`}>
        <ConsentBanner>
          <>
            Can we use cookies and external services according to our{" "}
            <a href="test">privacy paasdasdaolicy</a> to improve the browsing
            experience?
          </>
        </ConsentBanner>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ConsentProvider>
  );
}
