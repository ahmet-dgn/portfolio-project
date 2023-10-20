import Header from "../components/header";
import HeroArea from "../components/heroArea";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="text-sky-900 ">
      <Header />
      <HeroArea />
      <About />
    </div>
  );
}
