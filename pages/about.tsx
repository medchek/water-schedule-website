import { NextPage } from "next";
import AboutHero from "../components/about/AboutHero";
import MoreProjects from "../components/about/MoreProjects";
import ProjectDetail from "../components/about/ProjectDetail";
import AppMain from "../components/common/AppMain";
import Footer from "../components/common/Footer";

const About: NextPage = () => {
  return (
    <AppMain>
      <div className="bg-white dark:bg-darkAppBg">
        <AboutHero />
        <main>
          <ProjectDetail />
          {/* from-appDarkPurple to-[#0E1741]  */}
          <MoreProjects />

          <Footer />
        </main>
      </div>
    </AppMain>
  );
};

export default About;
