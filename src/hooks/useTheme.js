import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const useTheme = () => {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    const updateTheme = () => {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("theme-mode", theme);
    };

    updateTheme();
  }, [theme]);
};

export default useTheme;
