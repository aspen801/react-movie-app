import React from "react";
import RippleButton from "../../UI/RippleButton/RippleButton";

import "./navlinks.scss";

const NavLinks = ({ vertical }) => {
  return (
    <div className={`nav-links__main-wrapper ${vertical ? "vertical" : ""}`}>
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
  );
};

export default NavLinks;
