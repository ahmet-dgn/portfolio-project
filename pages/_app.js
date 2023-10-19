import "@/styles/globals.css";
import { Satisfy } from "next/font/google";
import { Roboto } from "next/font/google";

const satisfy = Satisfy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-satisfy",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${satisfy.variable} font-display ${roboto.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
