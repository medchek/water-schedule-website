import { mdiBrightness7, mdiWeatherNight } from "@mdi/js";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme-context";
import { Theme } from "../../../lib/enums";
import Icon from "../Icon";

const HeaderThemeSelector = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === Theme.Dark;

  return (
    <div className="flex items-center justify-between text-appDarkPurple border-t-2 mx-3 pt-2 h-14">
      <Icon icon={mdiBrightness7} className="h-8 w-8 " />
      <div className="w-16 h-8 bg-slate-200 rounded-full">
        <button
          onClick={toggleTheme}
          className={`${
            isDark ? "translate-x-7" : "translate-x-0"
          } h-8 w-8 bg-appBlue dark:bg-appDarkPurple rounded-full shadow-md shadow-slate-400 translate-x-7 transition-transform`}
        ></button>
      </div>
      <Icon icon={mdiWeatherNight} className="h-8 w-8" />
    </div>
  );
};

export default HeaderThemeSelector;
