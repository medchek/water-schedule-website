import { mdiGithub } from "@mdi/js";
import Image from "next/image";
import Icon from "../common/Icon";
import Padding from "../common/Padding";

import type { StaticImageData } from "next/image";

interface Props {
  number: number;
  title: string;
  text: string;
  img: StaticImageData;
  alt: string;
  link: string;
  reverse?: boolean;
}

const Showcase = ({ title, text, img, alt, number, reverse, link }: Props) => {
  return (
    <Padding
      className={`relative flex h-auto lg:h-[380px] 2xl:h-[486px] w-full bg-appPurpleGreys pt-16 pb-5 lg:pt-0 lg:pb-0 space-y-5 lg:space-y-0 ${
        reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      }`}
    >
      {/* TEXT */}
      <div className="relative z-10 flex flex-col justify-center lg:w-1/2 space-y-3 text-center lg:text-left">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-medium text-appDarkPurple dark:text-appPurpleGrey/90">
          {number} • {title}
        </h2>
        <p className="text-base md:text-lg  text-[#4859a7] dark:text-[#b7bedc]  md:px-10 lg:px-0">
          {text}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center lg:justify-start text-appDarkPurple dark:text-appPurpleGrey/70 font-medium space-x-1 opacity-50 transition-opacity hover:opacity-100 group"
          title="Lien du projet sur Github"
        >
          <Icon
            icon={mdiGithub}
            className="w-8 h-8 group-hover:scale-105 transition-transform "
          />
          <span className="text-base">Lien Github</span>
        </a>
      </div>
      {/* IMAGE */}
      <div className="lg:w-1/2 relative z-10 ">
        <div className="w-full h-full  flex items-center justify-center">
          <Image src={img} alt={alt} quality={100} />
        </div>
        {/* <div className="flex items-center justify-center absolute right-0 left-0 top-0 bottom-0 w-full h-full group">
          <a
            href="#"
            title="Lien du projet sur Github"
            className="flex items-center justify-center w-16 h-16 bg-appDarkPurple/70 hover:bg-applightBlue rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Icon icon={mdiGithub} className="w-10 h-10 text-white" />
          </a>
        </div> */}
      </div>
      {/* BG */}
      <span
        className={`right-0 left-0 top-0 absolute bg-[#F5F7FC] dark:bg-appDarkPurple/20 w-full h-full  ${
          reverse
            ? "lg:rounded-l-3xl lg:translate-x-10 xl:translate-x-20"
            : "lg:rounded-r-3xl lg:-translate-x-10 xl:-translate-x-20"
        }`}
      ></span>
    </Padding>
  );
};

export default Showcase;
