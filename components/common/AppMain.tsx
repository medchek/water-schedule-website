import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme-context";
import { Theme } from "../../lib/enums";
import {
  getThemeFromLocaleStorage,
  setThemeInLocaleStorage,
} from "../../lib/utils";

interface Props {
  children: ReactNode;
}

const AppMain = ({ children }: Props) => {
  useEffect(() => {
    const theme: Theme = getThemeFromLocaleStorage();
    setTheme(theme);
  }, []);

  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    setThemeInLocaleStorage(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme === Theme.Dark && "dark"}  overflow-hidden`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default AppMain;
