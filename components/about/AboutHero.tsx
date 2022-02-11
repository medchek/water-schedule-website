import Image from "next/image";
import { Fragment } from "react";
import Padding from "../common/Padding";
import Header from "../common/header/Header";

import AboutHeroDropsIllustration from "../../public/imgs/drops.svg";
import AboutHeroButtomSvg from "../svg/AboutHeroBottomSvg";

const AboutHero = () => {
  return (
    <Fragment>
      <Padding className="flex flex-col w-full h-auto xl:h-[570px] bg-appBlue dark:bg-darkAppHero">
        <Header />
        <div
          id="about-hero-content"
          className="relative flex w-full h-full items-center"
        >
          {/* TEXT */}

          <section
            id="about-text"
            className="grow relative z-10 text-white pt-10 pb-16 xl:pb-0 lg:pt-0"
          >
            <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold pb-5">
              À propos
            </h1>
            <div className="text-base lg:text-lg 2xl:text-xl font-thin space-y-4 w-11/12">
              <p>
                Ceci est un projet de demonstration visant à exploiter une idée
                qui m&apos;est venu lors de la crise d&apos;eau qui touche la
                wilaya d&apos;Alger et ses environs. L&apos;idée consistait à
                créer un moyen simple et agréable pour recevoir les informations
                concernant les temps de coupures et rétablissement d&apos;eau.
              </p>

              <p>
                L&apos;ensemble du system est composé de trois projets. Une
                application Android pour les utlisateurs, un system
                d&apos;administation sous from d&apos;application web, qui
                permet la gestion du serveur public et des informations
                enregistrées dans la base de donées, et pour finir, un site web
                pour la présentation de l&apos;application utilsateur contenant
                divers informations concernant celle-ci.
              </p>

              <p>Les 3 projets susmentionnée sont complètement open-source.</p>
            </div>
          </section>
          {/* ILLUSTRATION */}
          <section
            id="about-illustration"
            className=" z-0 absolute left-0 right-0 md:relative flex justify-center items-center h-full w-full lg:min-w-[18rem] lg:w-72 lg xl:min-w-[28.9rem] xl:w-100 opacity-10 md:opacity-100 "
          >
            <div id="about-drops-container">
              <Image
                src={AboutHeroDropsIllustration}
                alt="about-illustration"
                priority
              />
            </div>
          </section>
        </div>
      </Padding>
      <div
        id="hero-bottom"
        className=" -translate-y-1 h-10 md:h-16 lg:h-[110px] w-full"
      >
        <AboutHeroButtomSvg />
      </div>
    </Fragment>
  );
};

export default AboutHero;
