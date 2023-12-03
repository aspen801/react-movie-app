import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import RippleButton from "../UI/RippleButton/RippleButton";
import SearchInput from "../Search/SearchInput/SearchInput";
import { IconButton } from "@chakra-ui/react";
import { logOut } from "../../firebase/auth";

import "./header.scss";

import { themeActions } from "../../store/slices/themeSlice";
import { setAuthModalOpen, setAuthType } from "../../store/slices/authModalSlice";

import mLogo from "/assets/mlogo.svg";
import MoonIcon from "../../assets/moon.svg?react";
import SunIcon from "../../assets/sun.svg?react";
import SearchIcon from "../../assets/search.svg?react";
import LogoutIcon from "../../assets/logout.svg?react";
import CrossIcon from "../../assets/search-close.svg?react";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchVisible, setSearchVisible] = useState(false);

  let location = useLocation();

  useEffect(() => {
    console.log("User changed!");
  }, [user]);

  const handleThemeChange = () => {
    dispatch(themeActions.toggleTheme());
  };

  const handleOpen = (authType) => {
    dispatch(setAuthModalOpen(true));
    dispatch(setAuthType(authType));
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    logOut();
  };

  useEffect(() => {
    setSearchVisible(false);
  }, [location]);

  const handleSearchVisible = () => {
    setSearchVisible(!searchVisible);
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
          <RippleButton buttonType={"secondary"} to={"/upcoming"}>
            Upcoming
          </RippleButton>
          <RippleButton buttonType={"secondary"} to={"/movies"}>
            Movies
          </RippleButton>
          <RippleButton buttonType={"secondary"} to={"/series"}>
            Series
          </RippleButton>
        </div>
      </div>

      <div className="header__right-menu">
        <div className="header__right-menu-search">
          <button onClick={handleSearchVisible}>{searchVisible ? <CrossIcon className="icon" /> : <SearchIcon className="icon" />}</button>
        </div>
        <div className="header__right-menu-theme-toggle">
          <button onClick={handleThemeChange}>{theme === "dark" ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}</button>
        </div>
        <div className="header__right-menu-profile">
          <div className="sign-buttons">
            {user ? (
              <>
                <span className="profile-info">{user?.displayName}</span>
                <IconButton onClick={handleLogout} variant="outline" colorScheme="teal" fontSize="20px" icon={<LogoutIcon className="logout-icon" />} />
              </>
            ) : (
              <>
                <RippleButton buttonType={"secondary"} onClick={() => handleOpen("login")}>
                  Log In
                </RippleButton>
                <RippleButton buttonType={"primary"} onClick={() => handleOpen("signup")}>
                  Sign Up
                </RippleButton>
              </>
            )}
          </div>
        </div>
      </div>
      <SearchInput searchVisible={searchVisible} />
    </header>
  );
};

export default Header;
