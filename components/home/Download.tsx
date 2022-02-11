import { mdiGooglePlay } from "@mdi/js";
import Icon from "../common/Icon";

const Download = () => {
  return (
    <div
      id="download"
      className="px-5 flex flex-col items-center justify-center w-full bg-appDarkPurple dark:bg-darkAppDlBg py-24 lg:py-32 text-white"
    >
      <h1 className="text-center text-[30px] md:text-5xl lg:text-6xl font-bold lg:font-medium mb-5">
        Disponible sur Google Playstore
      </h1>
      <p className="w-[260px] md:w-[500px] lg:w-[816px] text-base md:text-lg lg:text-xl text-center font-thin">
        Vous pouvez chercher et télécharger l&apos;application directement
        depuis le Playstore de votre téléphone Android ou vous pouvez aussi
        utiliser le lien si dessou.
      </p>

      <a
        href="#"
        className="mt-16 lg:mt-28 flex items-center justify-center h-16 lg:h-[90px] w-60 md:w-72 lg:w-[450px]  font-medium  space-x-2 rounded-xl lg:rounded-2xl shadow-xl bg-appLightGray text-appDarkPurple hover:bg-white hover:scale-[1.03] transition-all"
      >
        <Icon
          icon={mdiGooglePlay}
          className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
        <span className="text-base md:text-lg lg:text-[22px]">
          Aller au Playstore
        </span>
      </a>
    </div>
  );
};

export default Download;
