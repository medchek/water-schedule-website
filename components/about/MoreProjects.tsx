import { mdiGithub } from "@mdi/js";
import Icon from "../common/Icon";

const MoreProjects = () => {
  return (
    <section
      id="about-github"
      className="relative flex flex-col items-center justify-center text-app w-full h-[450px] lg:h-[600px] bg-radial  text-appDarkPurple mb-36 px-5 lg:px-0"
    >
      <div className="mb-14 text-center space-y-5">
        <h1 className="text-4xl lg:text-6xl font-bold">Autres projets</h1>
        <p className="text-xl lg:text-2xl">
          Vous pouvez voir mes autres projets sur Github
        </p>
      </div>

      <a
        href="https://github.com/medchek"
        className="flex justify-center items-center h-16 lg:h-20 w-64 lg:w-[405px] rounded-xl bg-white text-appDarkPurple text-lg lg:text-xl font-medium space-x-3 hover:scale-[1.03] transition-all shadow-lg"
      >
        <Icon icon={mdiGithub} className="w-10 h-10 lg:w-12 lg:h-12" />
        <span>Voir sur Github</span>
      </a>
      <div className="absolute -z-10 bg-wave-lines bottom-0 lg:bottom-10 right-0 left-0  w-full h-20 lg:h-[152px] "></div>
    </section>
  );
};

export default MoreProjects;
