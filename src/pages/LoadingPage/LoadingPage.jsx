import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Progress } from "@chakra-ui/react";

import "./loadingpage.scss";

const LoadingPage = () => {
  const { loading } = useSelector((state) => state.loading);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [loading]);

  return (
    <div className={`loading-page__main-wrapper ${isLoading ? "visible" : ""}`}>
      <Progress size="sm" isIndeterminate className="progress-bar" />
    </div>
  );
};

export default LoadingPage;
