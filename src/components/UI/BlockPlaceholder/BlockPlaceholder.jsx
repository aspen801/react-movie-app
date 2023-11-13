import React from "react";

import "./blockplaceholder.scss";

const BlockPlacholder = ({ text }) => {
  return (
    <div className="block-placeholder__main-wrapper">
      <h1>{text}</h1>
    </div>
  );
};

export default BlockPlacholder;
