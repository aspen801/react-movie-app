import React from "react";

import "./blocktitle.scss";

const BlockTitle = ({ name }) => {
  return (
    <div className="block-title__main-wrapper">
      <h1>{name}</h1>
    </div>
  );
};

export default BlockTitle;
