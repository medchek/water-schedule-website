import { reverse } from "dns";
import Image from "next/image";
import Padding from "../common/Padding";

interface Props {
  number: number;
  title: string;
  text: string;
  img: StaticImageData;
  alt: string;
  reverse?: boolean;
}

const Showcase = ({ title, text, img, alt, number, reverse }: Props) => {
  return (
    <Padding
      className={`relative flex h-auto lg:h-[380px] 2xl:h-[486px] w-full bg-appPurpleGreys text-appDarkPurple pt-16 pb-5 lg:pt-0 lg:pb-0 space-y-5 lg:space-y-0 ${
        reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      }`}
    >
      {/* TEXT */}
      <div className="flex flex-col justify-center lg:w-1/2 space-y-3 text-center lg:text-left">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-medium text-appDarkPurple/80">
          {number} • {title}
        </h2>
        <p className="text-base md:text-lg 2xl:text-xl text-[#4859a7] 2xl:font-thin md:px-10 lg:px-0">
          {text}
        </p>
      </div>
      {/* IMAGE */}
      <div className="lg:w-1/2">
        <div className="w-full h-full  flex items-center justify-center">
          <Image src={img} alt={alt} />
        </div>
      </div>
      {/* BG */}
      <span className="right-0 left-0 top-0 absolute bg-[#F5F7FC] w-full h-full -z-10 lg:rounded-r-3xl lg:-translate-x-10 xl:-translate-x-20"></span>
    </Padding>
  );
};

export default Showcase;
