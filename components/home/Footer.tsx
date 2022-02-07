import { mdiFacebook, mdiOpenInNew, mdiTwitter, mdiYoutube } from "@mdi/js";
import Image from "next/image";
import Icon from "../common/Icon";

import footerLogo from "../../public/imgs/footer-logo.svg";
import googlePlayBadge from "../../public/imgs/gp-badge.png";

import styles from "../../styles/Footer.module.css";
import Padding from "../common/Padding";

interface SocialLink {
  id: number;
  icon: string;
  href: string;
}
const socialLinks: SocialLink[] = [
  { id: 1, icon: mdiFacebook, href: "#" },
  { id: 2, icon: mdiTwitter, href: "#" },
  { id: 3, icon: mdiYoutube, href: "#" },
];

const Footer = () => {
  const currentYar = new Date().getFullYear();

  return (
    <Padding
      tag="footer"
      id="footer"
      className="flex flex-col w-full pt-20 bg-gradient-to-b from-appPurpleGrey to-white"
    >
      <section className="flex flex-col md:flex-row mb-10 lg:mb-80 space-y-20 md:space-y-0 md:space-x-20 lg:space-x-0">
        {/* LOGO */}
        <div className="relative flex items-start mr-10 lg:mr-10 xl:mr-36">
          <div className="relative z-10 w-28 md:w-36 xl:w-[190px] flex flex-col items-start text-appDarkPurple">
            <Image src={footerLogo} alt="footer-logo" />
            <p className="text-4xl md:text-5xl xl:text-6xl font-bold italic">
              SEAAL
            </p>
          </div>
          <div
            id="footer-filler-pattern"
            className={`absolute lg:hidden h-48 w-44 right-0  ${styles["lines-pattern"]}`}
          ></div>
        </div>

        <section className="flex grow flex-col lg:flex-row lg:justify-between lg:space-x-5 space-y-20 lg:space-y-0 ">
          {/* LINKS */}
          <div>
            <p className="font-bold text-xl xl:text-2xl text-appDarkPurple mb-10">
              Navigation
            </p>
            <div className="flex flex-col text-appDarkPurple text-lg xl:text-xl space-y-8">
              <a href="#features">Caractéristiques</a>
              <a href="#instructions">Instructions</a>
              <a href="#download">Téléchargement</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          {/* INFO */}
          <div id="">
            <p className="font-bold text-xl xl:text-2xl text-appDarkPurple mb-10">
              Information SEAAL
            </p>
            <div className="flex flex-col text-appDarkPurple text-lg xl:text-xl space-y-8 lg:w-[300px] xl:w-[450px] font-thin">
              <p>Numero de contact: 1594 disponible 24h/24 7j/7</p>
              <p>
                Les agences clientèle sont ouvertes du samedi au jeudi, de 8h à
                16h30.
              </p>
            </div>
          </div>
          {/* SOCIALS */}
          <div
            id="footer-socials"
            className="flex flex-col items-center md:items-start w-60"
          >
            <div className="flex flex-col">
              <div className="flex justify-center w-60 md:-translate-x-3 lg:translate-x-0 h-[85px]">
                <a href="#" className="inline-block w-60 md:w-52 lg:w-60">
                  <Image
                    src={googlePlayBadge}
                    alt="google-play-badge"
                    layout="responsive"
                  />
                </a>
              </div>
              <div className="lg:w-full flex items-center justify-between text-appDarkPurple mt-5 space-x-6 lg:space-x-0">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    rel="external"
                    className="hover:scale-105 transition-transform"
                  >
                    <Icon
                      icon={link.icon}
                      className="w-10 h-10 hover:text-appDarkBlue"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* COPYRIGHT */}

      <section className="flex justify-between items-center h-14 w-full text-appDarkPurple text-base lg:text-lg border-t-2 border-appBlue/10">
        <span className="flex items-center ">
          <span className="lg:text-xl mr-2 lg:mr-5">©</span> {currentYar} SEAAL
        </span>
        <span className="flex items-center">
          Site by Ch. Med
          <a
            href="https://github.com/medchek"
            rel="noreferrer"
            target="_blank"
            className="inline-block ml-2 hover:scale-105 transition-transform"
          >
            <Icon icon={mdiOpenInNew} className="h-5 w-5 lg:w-6 lg:h-6" />
          </a>
        </span>
      </section>
    </Padding>
  );
};

export default Footer;
