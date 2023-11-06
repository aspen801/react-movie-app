import React from "react";
import "./Footer.scss";
import logo from "/assets/textlogo.svg";

const Footer = () => {
  return (
    <footer className="footer__main-wrapper">
      <div className="footer__logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="footer__info">
        <p>
          Made by aspen801{" "}
          <a target="_blank" href="https://github.com/aspen801/react-shopping-cart">
            GitHub
          </a>
        </p>
      </div>
      <div className="footer__info">
        <p>
          Using{" "}
          <a target="_blank" href="https://www.themoviedb.org">
            TMDB API
          </a>
        </p>
      </div>
      <div className="footer__info">
        <p>© 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
