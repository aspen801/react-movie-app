import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./app.scss";
import "./scss/themecolours.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SeriesPage from "./pages/SeriesPage/SeriesPage";
import MediaPage from "./pages/MediaPage/MediaPage";
import UpcomingPage from "./pages/UpcomingPage/UpcomingPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Footer from "./components/Footer/Footer";

function App() {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    const setTheme = () => {
      document.documentElement.setAttribute("theme-mode", theme);
    };
    setTheme();
  }, [theme]);

  return (
    <>
      <Header />
      <LoadingPage />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/upcoming"} element={<UpcomingPage />} />
        <Route path={"/movies"} element={<MoviesPage />} />
        <Route path={"/series"} element={<SeriesPage />} />
        <Route path={"/details/:mediaType/:mediaId"} element={<MediaPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
