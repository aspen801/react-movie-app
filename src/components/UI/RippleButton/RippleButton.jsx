import React from "react";
import { Link } from "react-router-dom";
import { createRipples } from "react-ripples";
import "./ripplebutton.scss";

const MyRipples = createRipples({
  color: "rgba(255, 255, 255, 0.2)",
  during: 800,
});

function RippleButton({ children, width, buttonType, submit, textColor, onClick, to }) {
  const isSubmit = submit ? { type: "submit" } : {};

  return to ? (
    <div className="ripple-button__main-wrapper" style={{ width: `${width}` }}>
      <MyRipples className="ripplebutton-container">
        <Link to={to}>
          <button {...isSubmit} onClick={onClick} className={`button ${buttonType}`} style={{ color: `${textColor}` }}>
            {children}
          </button>
        </Link>
      </MyRipples>
    </div>
  ) : (
    <div className="ripple-button__main-wrapper" style={{ width: `${width}` }}>
      <MyRipples className="ripplebutton-container">
        <button {...isSubmit} onClick={onClick} className={`button ${buttonType}`} style={{ color: `${textColor}` }}>
          {children}
        </button>
      </MyRipples>
    </div>
  );
}

export default RippleButton;
