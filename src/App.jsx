import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SeriesPage from "./pages/SeriesPage/SeriesPage";
import MediaPage from "./pages/MediaPage/MediaPage";
import UpcomingPage from "./pages/UpcomingPage/UpcomingPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Footer from "./components/Footer/Footer";

function App() {
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
