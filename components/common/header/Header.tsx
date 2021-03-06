import {
  mdiBrightness4,
  mdiBrightness7,
  mdiMenu,
  mdiWeatherNight,
} from "@mdi/js";
import { useContext, useRef, useState } from "react";
import Icon from "../Icon";
import HeaderNavLink from "./HeaderNavLink";
import HeaderDropdownNav from "./HeaderDropdownNav";
import Link from "next/link";

import { Theme } from "../../../lib/enums";
import { ThemeContext } from "../../../context/theme-context";

const Header = () => {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const themeIcon = theme === Theme.Dark ? mdiWeatherNight : mdiBrightness7;

  return (
    <div className="w-full relative">
      <header className="flex items-center justify-between min-h-16 h-16 w-full">
        <Link href="/">
          <a className="flex space-x-2">
            <span className="header-logo h-8 w-12  xl:h-9 xl:w-14"></span>
            <span className="hidden lg:inline italic font-bold text-white text-3xl xl:text-4xl">
              SEAAL
            </span>
          </a>
        </Link>

        <nav className="hidden md:flex font-medium lg:text-lg xl:text-xl space-x-8 text-headerLink ">
          <HeaderNavLink href="/#features" label="Caractéristiques" />
          <HeaderNavLink href="/#download" label="Télécharger" />
          <HeaderNavLink href="/#faq" label="FAQ" />
          <HeaderNavLink href="/about" label="À propos" />
          <button
            onClick={handleToggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-appDarkPurple/20 dark:hover:bg-appDarkPurple"
          >
            <Icon icon={themeIcon} className="w-7 h-7 " />
          </button>
        </nav>

        {/* RESPONSIVE MENU BUTTON */}

        <button
          ref={menuButtonRef}
          id="open-menu"
          className="md:hidden relative z-30 flex justify-center items-center rounded-lg bg-transparent focus:bg-white/20 w-10 h-10"
          onClick={handleOpenMenu}
        >
          <Icon
            icon={mdiMenu}
            className="text-white w-10 h-10 pointer-events-none"
          />
        </button>
      </header>
      {isMenuOpen && <HeaderDropdownNav onClickOutside={handleCloseMenu} />}
    </div>
  );
};

export default Header;
