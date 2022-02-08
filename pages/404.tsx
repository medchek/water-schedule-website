import Image from "next/image";
import logo from "../public/imgs/footer-logo.svg";

const NotFound = () => {
  return (
    <div className="antialiased overflow-hidden bg-gradient-to-br from-white to-appBlue/20 w-screen h-screen flex flex-col items-center justify-center space-y-2 xl:space-y-5">
      <p className="text-2xl md:text-4xl xl:text-5xl text-appDarkPurple font-medium">
        Cette page n&apos;existe pas
      </p>
      <div className="flex items-center opacity-20 space-x-2">
        <span className="flex items-center w-10 h-10 ">
          <Image src={logo} alt="logo" />
        </span>
        <span className="text-appDarkPurple font-bold text-lg italic">
          SEAAL
        </span>
      </div>
    </div>
  );
};

export default NotFound;
