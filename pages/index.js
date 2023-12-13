import Navbar from "@/components/navbar";
import HeroArea from "../components/heroArea";
import About from "@/components/about";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Head from "next/head";

export default function Home() {
  return (
    <div className="text-sky-900 ">
      <>
        <Head>
          <title>Ahmet Can Doğan - Project Manager</title>
          <meta name="robots" content="noindex" />
          <meta
            name="description"
            content="I specialize in building the frontend of websites and web applications, ensuring they contribute to the overall success of the product."
          />
          <link rel="icon" href="/images/favicon.ico" />
          <meta
            property="og:title"
            content="Ahmet Can Doğan - Project Manager"
          />
          <meta
            property="og:description"
            content="I specialize in building the frontend of websites and web applications, ensuring they contribute to the overall success of the product."
          />
          <meta property="og:image" content="/images/favicon.ico" />
          <meta property="og:url" content="https://ahmetcandgn.com/" />
        </Head>

        <Navbar />
        <HeroArea />
        <About />
        <Projects />
        <Footer />
      </>
    </div>
  );
}
