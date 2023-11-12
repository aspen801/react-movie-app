import React from "react";
import { Progress } from "@chakra-ui/react";

import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading-page__main-wrapper">
      <Progress size="sm" isIndeterminate className="progress-bar" />
    </div>
  );
};

export default Loading;
