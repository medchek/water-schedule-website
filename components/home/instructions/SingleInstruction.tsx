import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  reverse?: boolean;
  imgSrc: string | StaticImageData;
  number: number;
}

const SingleInstruction = ({ children, reverse, imgSrc, number }: Props) => {
  return (
    <div
      className={`flex w-full flex-col-reverse ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* IMAGE */}
      <section className="flex items-center justify-center lg:min-w-[50%]">
        <Image src={imgSrc} alt="" />
      </section>
      {/* TEXT */}
      <section className="flex flex-col lg:flex-row items-center justify-center lg:min-w-[50%] text-appDarkPurple lg:space-x-8 space-y-4 lg:space-y-0 mb-10 lg:mb-0">
        <div className="flex items-center justify-center w-10 h-10 lg:min-w-[88px] lg:min-h-[88px] text-2xl lg:text-4xl font-medium bg-appGrey rounded-full">
          {number}
        </div>
        <div className="relative flex items-center text-2xl lg:text-4xl text-center lg:text-left">
          {children}
        </div>
      </section>
    </div>
  );
};

export default SingleInstruction;
