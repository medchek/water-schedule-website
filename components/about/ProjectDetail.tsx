import Showcase from "./Showcase";
import adminShowcase from "../../public/imgs/admin-showcase.png";
import appShowcase from "../../public/imgs/app-showcase.png";
import siteShowcase from "../../public/imgs/app-site-showcase.png";

interface ProjectDetail {
  id: number;
  title: string;
  text: string;
  img: StaticImageData;
  alt: string;
  reverse: boolean;
}

const projects: ProjectDetail[] = [
  {
    id: 1,
    title: "Administration",
    text: "L'administration permet de gérer et ajouter les temps de coupures et rétablissements pour l'ensemble des 58 wilayas et leurs communes. Concernant les details techniques, l'administration est écrite en php avec le framework Laravel. L'interface de cette dernière est une SPA basée sur le framework javascript Vuejs aisi que Tailwindcss pour générer tout le CSS. Le serveur de l'administration comprend ausi une API publique pour permettre l'interaction avec l'application utilisateur Android.",
    img: adminShowcase,
    alt: "admin-showcase",
    reverse: false,
  },
  {
    id: 2,
    title: "Application Android",
    text: "L'application mobile est conçu pour le grand publique et leur permet de consulter les programmes d'eau des communes. Elle donne accès au informations centenu dans la base de données précédement entrées par le biais de d'administration. L'application est écrite en Dart ultilisant le framework Flutter. Flutter a était préféré à React-Native pour sa performance accru.",
    img: appShowcase,
    alt: "app-showcase",
    reverse: true,
  },
  {
    id: 3,
    title: "Site de Présentation",
    text: "Le site de présentation de l'application rassemble differents informations concerant celle ci. Le site est ecrit en Typescript utilisant le framework Nextjs qui est lui même basé sur React. Nextjs offre l'aventage du SSR/SSG à la place du tradionnel SPA de React, ce qui offre un meilleur SEO ou en d'autres termes, une exposition optimale au moteurs de recherches.",
    img: siteShowcase,
    alt: "app-site-showcase",
    reverse: false,
  },
];

const ProjectDetail = () => {
  const projectList = projects.map((project) => (
    <Showcase
      key={project.id}
      number={project.id}
      title={project.title}
      text={project.text}
      img={project.img}
      alt={project.alt}
      reverse={project.reverse}
    />
  ));
  return (
    <div className="mt-24" id="project-details">
      <h1 className="w-full text-center text-3xl md:text-4xl lg:text-[40px] 2xl:text-[50px] font-bold text-appBlue dark:text-appPurpleGrey">
        Les projets en details
      </h1>

      <div
        id="wave-lines"
        className="bg-wave-lines w-full h-20 lg:h-[135px] 2xl:h-[152px]"
      ></div>

      <section
        id="projects-showcase"
        className="flex flex-col w-full py-20 space-y-28"
      >
        {projectList}
      </section>
    </div>
  );
};

export default ProjectDetail;
