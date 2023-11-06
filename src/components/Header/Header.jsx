import React from "react";
import { createRipples } from "react-ripples";
import { Link } from "react-router-dom";
import "./header.scss";

import textLogo from "/assets/textlogo.svg";
import mLogo from "/assets/mlogo.svg";
import boxLogo from "/assets/boxlogo.svg";
import moonLogo from "/assets/moon.svg";
import search from "/assets/search.svg";

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
            <a href="#">
              <button className="nav-button">Upcoming</button>
            </a>
          </MyRipples>
          <MyRipples className="ripple-container">
            <Link to={"/movies"}>
              <a href="#">
                <button className="nav-button">Movies</button>
              </a>
            </Link>
          </MyRipples>
          <MyRipples className="ripple-container">
            <Link to={"/series"}>
              <a href="#">
                <button className="nav-button">Series</button>
              </a>
            </Link>
          </MyRipples>
          <MyRipples className="ripple-container">
            <a href="#">
              <button className="nav-button">Persons</button>
            </a>
          </MyRipples>
        </div>
      </div>

      <div className="header__right-menu">
        <div className="header__right-menu-search">
          <button>
            <img className="search-icon" src={search} alt="" />
          </button>
        </div>
        <div className="header__right-menu-theme-toggle">
          <button>
            <img className="search-icon" src={moonLogo} alt="" />
          </button>
        </div>
        <div className="header__right-menu-profile">
          <div className="sign-buttons">
            <MyRipples className="ripple-container">
              <a href="#">
                <button className="sign-in-button">Sign In</button>
              </a>
            </MyRipples>
            <MyRipples className="ripple-container">
              <a href="#">
                <button className="sign-up-button">Sign Up</button>
              </a>
            </MyRipples>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
