import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRipples } from "react-ripples";
import { Link } from "react-router-dom";
import "./header.scss";

import { themeActions } from "../../store/slices/themeSlice";

import textLogo from "/assets/textlogo.svg";
import mLogo from "/assets/mlogo.svg";
import boxLogo from "/assets/boxlogo.svg";
import MoonIcon from "../../assets/moon.svg?react";
import SunIcon from "../../assets/sun.svg?react";
import SearchIcon from "../../assets/search.svg?react";

const MyRipples = createRipples({
  color: "rgba(255, 255, 255, 0.2)",
  during: 800,
});

{
  /* <div className='header__search-input'>
          <img className='search-icon' src={search} alt="" />
          <input type="text" placeholder="Search something..."/>
        </div> */
}

const Header = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  const handleThemeChange = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <header className="header__main-wrapper">
      <div className="header__left-section">
        <div className="header__logo-link-container">
          <Link to={"/"}>
            <div className="header__logo">
              <img src={mLogo} alt="" />
            </div>
          </Link>
        </div>

        <div className="header__nav-links">
          <MyRipples className="ripple-container">
            <Link to="/upcoming">
              <button className="nav-button">Upcoming</button>
            </Link>
          </MyRipples>
          <MyRipples className="ripple-container">
            <Link to={"/movies"}>
              <button className="nav-button">Movies</button>
            </Link>
          </MyRipples>
          <MyRipples className="ripple-container">
            <Link to={"/series"}>
              <button className="nav-button">Series</button>
            </Link>
          </MyRipples>
          <MyRipples className="ripple-container unactive">
            <button className="nav-button">Persons</button>
          </MyRipples>
        </div>
      </div>

      <div className="header__right-menu">
        <div className="header__right-menu-search">
          <button>
            <SearchIcon className="icon" />
          </button>
        </div>
        <div className="header__right-menu-theme-toggle">
          <button onClick={handleThemeChange}>{theme === "dark" ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}</button>
        </div>
        <div className="header__right-menu-profile">
          <div className="sign-buttons">
            <MyRipples className="ripple-container">
              <button className="sign-in-button">Sign In</button>
            </MyRipples>
            <MyRipples className="ripple-container">
              <button className="sign-up-button">Sign Up</button>
            </MyRipples>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
