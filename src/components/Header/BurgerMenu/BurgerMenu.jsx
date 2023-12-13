import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import AuthSection from "../AuthSection/AuthSection";

import textLogo from "/assets/textlogo.svg";
import MoonIcon from "../../../assets/moon.svg?react";
import SunIcon from "../../../assets/sun.svg?react";

import "./burgermenu.scss";

const BurgerMenu = ({ handleThemeChange, theme }) => {
  return (
    <div className="burger-menu__main-wrapper">
      <Link to={"/"}>
        <div className="burger-menu__logo">
          <img src={textLogo} alt="" />
        </div>
      </Link>
      <hr className="burger-menu__divider" />
      <NavLinks vertical={true} />
      <hr className="burger-menu__divider" />
      <div className="burger-menu__controls">
        <div className="burger-menu__theme-toggle">
          <button onClick={handleThemeChange}>{theme === "dark" ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}</button>
        </div>
        <AuthSection />
      </div>
    </div>
  );
};

export default BurgerMenu;
