import React, { useEffect, useRef } from "react";
import HeaderDropDownNavLink from "./HeaderDropDownNavLink";
import HeaderThemeSelector from "./HeaderThemeSelector";

interface Props {
  onClickOutside: () => void;
}

const HeaderDropdownNav = ({ onClickOutside }: Props) => {
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;
      // if the clicekd element is the open-menu button, dont do anything so that the menu is togglable
      if (target.id === "open-menu") return;

      if (
        menuRef.current !== null &&
        menuRef.current !== event.target &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
      // setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClickOutside]);
  return (
    <nav
      ref={menuRef}
      id="responsive-nav"
      className="lg:hidden left-0 right-0 py-3 z-50 absolute w-full  bg-white shadow-xl shadow-slate-800/40 rounded-lg space-y-2"
    >
      <HeaderDropDownNavLink
        onClick={onClickOutside}
        href="/#features"
        label="Caractéristiques"
      />
      <HeaderDropDownNavLink
        onClick={onClickOutside}
        href="/#download"
        label="Télécharger"
      />
      <HeaderDropDownNavLink onClick={onClickOutside} href="#faq" label="FAQ" />
      <HeaderDropDownNavLink
        onClick={onClickOutside}
        href="/about"
        label="À propos"
      />
      <HeaderThemeSelector />
    </nav>
  );
};

export default HeaderDropdownNav;
