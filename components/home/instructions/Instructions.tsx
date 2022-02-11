import { mdiHandOkay } from "@mdi/js";
import Icon from "../../common/Icon";
import SingleInstruction from "./SingleInstruction";

import wilayasImage from "../../../public/imgs/ins-wl.png";
import townsImage from "../../../public/imgs/ins-tw.png";
import scheduleImage from "../../../public/imgs/ins-sch.png";

import styles from "../../../styles/home/Instructions.module.css";
import Padding from "../../common/Padding";

const Instructions = () => {
  return (
    <section id="instructions" className="mt-20">
      {/* dark:bg-[#010C39]  */}
      <div className="flex items-center justify-center h-[210px] w-full bg-appGrey dark:bg-[#0B1748]">
        <div className="px-5 lg:px-0 flex flex-col lg:flex-row space-x-2">
          {/* TEXT */}
          <div className="w-[450px] xl:w-[680px] flex flex-col">
            <p className="text-center lg:text-left text-3xl md:text-4xl xl:text-5xl text-appDarkPurple dark:text-appLightGray/90">
              Comment ça marche?
            </p>
            <p className="text-center lg:text-right text-4xl md:text-5xl xl:text-6xl text-appDarkPurple font-medium dark:text-appPurpleGrey">
              C&apos;est facile!
            </p>
          </div>
          {/* ICON */}
          <div
            id="instruction-icon"
            className="h-full  w-full lg:w-auto flex lg:block items-center justify-center"
          >
            <Icon
              icon={mdiHandOkay}
              className="w-20 h-20 lg:w-36 lg:h-36 text-appBlue/10 dark:text-[#122161]"
            />
          </div>
        </div>
      </div>

      <Padding
        id="instructions-content"
        className="pt-16 pb-20 lg:pt-32 lg:pb-44 space-y-20"
      >
        <SingleInstruction imgSrc={wilayasImage} number={1}>
          <p className="relative z-10 md:w-100 lg:w-auto 2xl:w-100">
            Commancez par selectioner votre wilya.
          </p>
          {/* Pattern */}

          <span
            className={`${styles["rounded-pattern"]} absolute  right-0 w-28 h-36 lg:w-52 lg:h-64 dark:opacity-10`}
          ></span>
        </SingleInstruction>

        <SingleInstruction imgSrc={townsImage} reverse number={2}>
          <p className="relative z-10 md:w-100 lg:w-auto 2xl:w-[620px]">
            Selectionez une des communes de la wilaya choisie, puis appuiyez sur
            <span className="font-bold"> Trouver</span>.
          </p>
          {/* Pattern */}
          <span
            className={`${styles["linear-pattern"]} absolute  right-0 w-40 h-44 lg:w-52 lg:h-64 dark:opacity-10`}
          ></span>
        </SingleInstruction>

        <SingleInstruction imgSrc={scheduleImage} number={3}>
          <p className="relative z-10 md:w-100 lg:w-auto 2xl:w-[660px]">
            Recevez le programme d&apos;eau de cette semaine ainsi que la
            semaine prochaine.
          </p>

          <span
            className={`${styles["star-pattern"]} ${styles["dark-star-pattern"]} dark:hidden absolute right-0 w-40 h-44 lg:w-52 lg:h-64`}
          ></span>
        </SingleInstruction>
      </Padding>
    </section>
  );
};

export default Instructions;
