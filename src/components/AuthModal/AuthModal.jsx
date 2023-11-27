import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../../store/slices/authModalSlice";
import SignupForm from "../Forms/SignupForm/SignupForm";
import LoginForm from "../Forms/LoginForm/LoginForm";
import { signUp } from "../../firebase/auth";

import "./authmodal.scss";

import CrossIcon from "../../assets/close-cross.svg?react";

const AuthModal = () => {
  const { authModalOpen, authType } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setAuthModalOpen(false));
  };

  return (
    <div onClick={handleClose} className={`auth-modal__main-wrapper ${authModalOpen ? "visible" : ""}`}>
      <div className="auth-modal__form-container" onClick={(e) => e.stopPropagation()}>
        <section>
          <button className="closing-cross" onClick={handleClose}>
            <CrossIcon className="icon" />
          </button>
        </section>
        <div className="auth-modal__heading">
          <h1>{authType === "signup" ? "Sign Up" : "Log In"}</h1>
        </div>
        {authType === "signup" && <SignupForm authModalOpen={authModalOpen} />}

        {authType === "login" && <LoginForm authModalOpen={authModalOpen} />}
      </div>
    </div>
  );
};

export default AuthModal;
