import Image from "next/image";
import featuresImage from "../../../public/imgs/features.png";
import featuresBg from "../../../public/imgs/features-bg.svg";
import SingleFeature from "./SingleFeature";

import {
  mdiFormatListNumbered,
  mdiCellphoneCheck,
  mdiClockFast,
  mdiThemeLightDark,
} from "@mdi/js";
import Padding from "../../common/Padding";

interface Feature {
  id: number;
  title: string;
  text: string;
  icon: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Planifiez à l'avence",
    text: "En raison de manque de pluit qui touche notre pays, l'eau n'est pas toujours disponible. Avec l'application seaal, vous pouvez être informé sur les temps de coupures et rétablissments, et plannifer vos taches implicants l'ulilisation d'eau.",
    icon: mdiFormatListNumbered,
  },
  {
    id: 2,
    title: "Facile à utiliser",
    text: "L'application est conçu pour vous offrire un experience utlisateur simple et agréable. Choisissez votre wilaya, puis choisissez la commune, et recevez toutes information liées au porgramme d'eau de la semaine courante ainsi que la semaine prochaine.",
    icon: mdiCellphoneCheck,
  },
  {
    id: 3,
    title: "Disponible à tout moment",
    text: "Ayez accès au programmes d'eau à n'importe quel moment de la journée, ou que vous soyez, gratuitement.",
    icon: mdiClockFast,
  },
  {
    id: 4,
    title: "Différents thèmes et langues",
    text: "L'application est disponible en Arabe, Francais, ou Angalis. De plus, vous pouvez aussi choisir entre le thème sombre ou clair selon vos préférences.",
    icon: mdiThemeLightDark,
  },
];

const Features = () => {
  const featuresList = featuresData.map((feature) => (
    <SingleFeature key={feature.id} title={feature.title} icon={feature.icon}>
      {feature.text}
    </SingleFeature>
  ));

  return (
    <Padding tag="section" id="features">
      <div className="w-full h-20 text-center">
        <div className="relative inline-block w-auto h-12 lg:h-16 text-center font-medium">
          <h2 className="inline-block text-[30px] lg:text-[40px] text-appDarkBlue">
            Caractéristiques
          </h2>
          <span className="absolute right-0 bottom-0 h-1 w-3/12 bg-applightBlue rounded-full"></span>
        </div>
      </div>
      {/* CONTENT */}

      <div
        id="features-showcase"
        className="flex flex-col-reverse lg:flex-row w-full md:space-x-10 2xl:space-x-0"
      >
        {/* FEATURES ILLUSTRATIONS */}
        <section
          id="features-illustration"
          className="flex items-center justify-center relative lg:w-1/2 h-full"
        >
          <div className="relative image-wrapper z-10">
            <Image src={featuresImage} alt="image-caractéristiques" />
          </div>
          <div className="image-wrapper flex items-center absolute top-0 bottom-0">
            <Image
              src={featuresBg}
              className="absolute top-0"
              alt="caractéristiques-bg"
            />
          </div>
        </section>
        {/* FEATURES TEXT */}
        <section
          id="features-list"
          className="flex items-center justify-start lg:w-1/2"
        >
          <div
            id="featres-list-container"
            className="space-y-14 lg:space-y-20 text-center lg:text-left"
          >
            {featuresList}
          </div>
        </section>
      </div>
    </Padding>
  );
};

export default Features;
