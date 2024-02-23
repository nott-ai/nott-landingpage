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

const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== "undefined") {
  getAnalytics(app);
}
const inter = Inter({ subsets: ["latin"] });
export const orbitron = Orbitron({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
