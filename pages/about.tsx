import { NextPage } from "next";
import AboutHero from "../components/about/AboutHero";
import MoreProjects from "../components/about/MoreProjects";
import ProjectDetail from "../components/about/ProjectDetail";
import Footer from "../components/common/Footer";

const About: NextPage = () => {
  return (
    <div className="antialiased overflow-hidden">
      <AboutHero />
      <main>
        <ProjectDetail />
        {/* from-appDarkPurple to-[#0E1741]  */}
        <MoreProjects />

        <Footer />
      </main>
    </div>
  );
};

export default About;
