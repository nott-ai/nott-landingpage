import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Orbitron } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "@/constants/firebase-config";
import { getAnalytics } from "@firebase/analytics";
import { RemoteConfig, getRemoteConfig } from "@firebase/remote-config";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import CookieRequest from "@/components/Cookies/CookieRequest";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <CookieRequest />
      <Header />
      <div className="content-body">
        <Component {...pageProps} />
      </div>
      <Footer />
      <Toaster
        toastOptions={{
          position: "top-right",
          duration: 4000,
        }}
      />
    </main>
  );
}
