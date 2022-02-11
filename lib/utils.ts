import { Theme } from "./enums";

export const getThemeFromLocaleStorage = (): Theme => {
  const mode = localStorage.getItem("theme");
  return mode === "dark" ? Theme.Dark : Theme.Light;
};

export const setThemeInLocaleStorage = (theme: Theme): void => {
  const themeMode = theme === Theme.Dark ? "dark" : "light";
  localStorage.setItem("theme", themeMode);
};
