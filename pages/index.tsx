import type { NextPage } from "next";
import Head from "next/head";
import Download from "../components/home/Download";
import Faq from "../components/home/faq/Faq";
import Features from "../components/home/features/Features";
import Footer from "../components/common/Footer";
// import Image from "next/image";
import HomeHeroWithHeader from "../components/home/Hero";
import Instructions from "../components/home/instructions/Instructions";
import AppMain from "../components/common/AppMain";

const Home: NextPage = () => {
  return (
    <AppMain>
      <div className="bg-white dark:bg-darkAppBg">
        <Head>
          <title>Programme d&apos;eau - SEAAL</title>
          <meta
            name="description"
            content="Site web de l'application des programmes d'eau de seaal"
          />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <HomeHeroWithHeader />

        {/* px-28 */}
        <main className="w-full">
          <Features />
          <Instructions />
          <Download />
          <Faq />
          <Footer />
        </main>
      </div>
    </AppMain>
  );
};

export default Home;
