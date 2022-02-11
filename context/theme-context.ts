import { createContext } from "react";
import { Theme } from "../lib/enums";

interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: Theme.Light,
  toggleTheme: () => null,
});
