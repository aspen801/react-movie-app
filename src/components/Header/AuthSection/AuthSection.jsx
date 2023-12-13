import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen, setAuthType } from "../../../store/slices/authModalSlice";
import { setUser } from "../../../store/slices/userSlice";
import { logOut } from "../../../firebase/auth";
import { Link } from "react-router-dom";
import RippleButton from "../../UI/RippleButton/RippleButton";
import { IconButton } from "@chakra-ui/react";

import LogoutIcon from "../../../assets/logout.svg?react";

import "./authsection.scss";

const AuthSection = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOpen = (authType) => {
    dispatch(setAuthModalOpen(true));
    dispatch(setAuthType(authType));
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    logOut();
  };

  return (
    <div className="auth-section__main-wrapper">
      <div className="auth-section__sign-buttons">
        {user ? (
          <div className="auth-section__profile-info">
            <span>
              <Link to="/profile">{user?.displayName}</Link>
            </span>
            <IconButton onClick={handleLogout} variant="outline" colorScheme="teal" fontSize="20px" icon={<LogoutIcon className="logout-icon" />} />
          </div>
        ) : (
          <div className="auth-section__sign-buttons">
            <RippleButton buttonType={"secondary"} onClick={() => handleOpen("login")}>
              Log In
            </RippleButton>
            <RippleButton buttonType={"primary"} onClick={() => handleOpen("signup")}>
              Sign Up
            </RippleButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthSection;
