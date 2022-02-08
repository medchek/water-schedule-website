import { Fragment } from "react";
import Header from "../common/header/Header";

import styles from "../../styles/home/Hero.module.css";

import heroImage from "../../public/imgs/hero-img.png";
import Image from "next/image";
import Icon from "../common/Icon";

import { mdiGooglePlay } from "@mdi/js";
import Padding from "../common/Padding";

const Hero = () => {
  return (
    <Fragment>
      {/* HERO TOP PART */}
      <Padding className="relative flex flex-col w-full h-[420px] lg:h-[528px] bg-appBlue">
        <Header />
        <section
          id="hero-content"
          className="flex justify-between w-full grow h-auto text-white"
        >
          <div
            id="hero-text"
            className="relative z-20 flex flex-col items-start w-[600px] 2xl:w-[700px] md:pt-20 lg:pt-32"
          >
            <h1 className="text-[50px] md:text[55px] lg:text-[62px] xl:text-[70px] 2xl:text-7xl-plus font-bold leading-tight">
              Restez infromés
            </h1>
            <p className="text-base xl:text-xl 2xl:text-2xl font-thin w-[380px] lg:w-[400px] xl:w-[600px] mt-2">
              Soyez toujours informé sur les temps de coupures et
              rétablissements d&apos;eau au niveau de votre commune.
            </p>
            <button className="flex items-center justify-center h-12 w-64 lg:w-80 bg-white text-appDarkBlue lg:text-lg font-medium rounded-lg mt-5 space-x-1 transition-transform hover:scale-[1.02]">
              <Icon icon={mdiGooglePlay} className="w-8 h-8 lg:w-10 lg:h-10" />
              <span>Disponible sur Google Play</span>
            </button>
          </div>

          <div
            id="hero-illustration"
            className="z-10 relative w-[550px] 2xl:w-160"
          >
            {/* IMG BASE SIZE H = 929, W = 528 
              80% => W = 422.4 x H = 743.2
              70% => W = 369.6 x H = 650.3
              60% => W = 316.8 x H = 557.4
            */}
            <div className="hidden md:block md:w-[370px] md:h-[650px]  lg:w-[422px] lg:h-[743.2px] xl:w-[475.2px] xl:h-[836.1px]  2xl:h-[929px] 2xl:w-[528px]">
              <Image
                src={heroImage}
                alt="app-illustration"
                className="relative z-20"
                priority
              />
            </div>
            <div className="flex flex-col items-end absolute bottom-0 md:bottom-1/4 right-0 h-130 w-72 space-y-4">
              {/* FIRST CIRCLE */}
              <span
                className={`w-36 h-36 lg:w-[279px] lg:h-[264px] bg-[#1350DD] rounded-full ${styles.levitation}`}
              ></span>
              {/* SECOND CIRCLE */}

              <div className="w-12 h-12 -translate-x-14">
                <span
                  className={`inline-block w-full h-full bg-white/25 rounded-full ${styles["pulse-levitation"]}`}
                ></span>
              </div>
              {/* THIRD CIRCLE */}

              <div className="w-24 h-24 translate-y-8 -translate-x-20">
                <div
                  className={`w-full h-full bg-white/20 lg:bg-white/70 rounded-full ${styles.navigate}`}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </Padding>
      {/* HERO BOTTOm lg + = 554px */}
      <div
        id="hero-bottom"
        className="hero-bottom -translate-y-1 h-[150px] md:h-[300px] xl:h-[400px] 2xl:h-155 w-full mb-12 lg:mb-0"
      ></div>
    </Fragment>
  );
};

export default Hero;
