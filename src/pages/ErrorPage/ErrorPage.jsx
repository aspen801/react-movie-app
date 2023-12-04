import React from "react";
import BlockPlacholder from "../../components/UI/BlockPlaceholder/BlockPlaceholder";

import "./errorpage.scss";

const ErrorPage = () => {
  return (
    <div className="errorpage__main-wrapper">
      <div className="errorpage__error-message">
        <BlockPlacholder text={"Page not found :("} />
      </div>
    </div>
  );
};

export default ErrorPage;
