import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../Search/SearchInput/SearchInput";
import NavLinks from "./NavLinks/NavLinks";
import AuthSection from "./AuthSection/AuthSection";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import useWindowSize from "../../hooks/useWindowsSize";

import "./header.scss";

import { toggleTheme } from "../../store/slices/themeSlice";

import mLogo from "/assets/mlogo.svg";
import MoonIcon from "../../assets/moon.svg?react";
import SunIcon from "../../assets/sun.svg?react";
import SearchIcon from "../../assets/search.svg?react";
import CrossIcon from "../../assets/search-close.svg?react";
import MenuIcon from "../../assets/menu-burger.svg?react";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const location = useLocation();
  const windowSize = useWindowSize();

  useEffect(() => {}, [user]);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    setSearchVisible(false);
    setIsMenuVisible(false);
  }, [location]);

  useEffect(() => {
    if (windowSize.width > 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize.width]);

  const handleSearchVisible = () => {
    setSearchVisible(!searchVisible);
  };

  const handleMenuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  //TODO: add IconButton component for round buttons
  // button {
  //   padding: 8px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   cursor: pointer;
  //   background: none;
  //   border: none;
  //   z-index: 5;
  //   &:hover {
  //     border-radius: 50%;
  //     background-color: $btn-hover-color;
  //   }
  // }

  return (
    <header>
      {isMobile ? (
        // Mobile Layout
        <div className="header__main-wrapper">
          <div className="header__left-section">
            <div className="header__logo-link-container">
              <Link to={"/"}>
                <div className="header__logo">
                  <img src={mLogo} alt="" />
                </div>
              </Link>
            </div>
            <NavLinks />
          </div>
          <div className="header__right-section">
            <div className="header__right-section-search">
              <button onClick={handleSearchVisible}>{searchVisible ? <CrossIcon className="icon" /> : <SearchIcon className="icon" />}</button>
            </div>
            <div className="header__right-section-theme-toggle">
              <button onClick={handleThemeChange}>{theme === "dark" ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}</button>
            </div>
            <AuthSection />
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="header__main-wrapper">
          <div className="header__left-section">
            <div className="header__burger-menu-icon">
              {isMenuVisible ? (
                <button onClick={handleMenuVisible}>
                  <CrossIcon className="icon icon-button" />
                </button>
              ) : (
                <button onClick={handleMenuVisible}>
                  <MenuIcon className="icon icon-button" />
                </button>
              )}
            </div>
          </div>
          {isMenuVisible && <BurgerMenu handleThemeChange={handleThemeChange} theme={theme} />}
          <div className="header__right-section-search">
            <button onClick={handleSearchVisible}>{searchVisible ? <CrossIcon className="icon" /> : <SearchIcon className="icon" />}</button>
          </div>
        </div>
      )}
      <SearchInput searchVisible={searchVisible} />
    </header>
  );
};

export default Header;
