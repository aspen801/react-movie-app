import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SeriesPage from "./pages/SeriesPage/SeriesPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movies"} element={<MoviesPage />} />
        <Route path={"/series"} element={<SeriesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
