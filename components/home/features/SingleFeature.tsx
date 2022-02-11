import { ReactNode } from "react";
import Icon from "../../common/Icon";

type Props = {
  title: string;
  icon: string;
  children: ReactNode;
};

function SingleFeature({ title, icon, children }: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0">
      <section className="h-full lg:mr-10">
        <div className="flex items-center justify-center w-16 h-16 bg-appLightGray dark:bg-appDarkPurple rounded-full">
          <Icon
            icon={icon}
            className="w-9 h-9 text-appBlue dark:text-appPurpleGrey"
          />
        </div>
      </section>

      <section className="w-full">
        <div className="relative inline-block">
          <p className="text-2xl font-medium text-appDarkPurple dark:text-appPurpleGrey">
            • {title}
          </p>
          <div className=" absolute right-0 bottom-0 hidden lg:inline-block h-1 w-9 bg-[#B5CCFF] dark:bg-[#8193ba]"></div>
        </div>

        <p className="text-lg lg:text-[20px] text-[#5B6388] dark:text-[#99a0c2] mt-4">
          {children}
        </p>
      </section>
    </div>
  );
}

export default SingleFeature;
