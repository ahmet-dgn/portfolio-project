import { Roboto } from "next/font/google";
import Header from "../components/header";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="text-sky-900 ">
      <Header />
    </div>
  );
}
