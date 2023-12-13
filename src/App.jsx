import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./app.scss";
import "./scss/themecolors.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SeriesPage from "./pages/SeriesPage/SeriesPage";
import MediaPage from "./pages/MediaPage/MediaPage";
import UpcomingPage from "./pages/UpcomingPage/UpcomingPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthModal from "./components/AuthModal/AuthModal";
import Footer from "./components/Footer/Footer";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/index";
import { setUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      const reduxObject = {
        accessToken: user.accessToken,
        displayName: user.displayName,
      };
      dispatch(setUser(reduxObject));
    });
  }, []);

  //TODO: make in separate hook, add theme memorization and user system theme check
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
      <AuthModal />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/upcoming"} element={<UpcomingPage />} />
        <Route path={"/movies"} element={<MoviesPage />} />
        <Route path={"/series"} element={<SeriesPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/details/:mediaType/:mediaId"} element={<MediaPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
