import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import useTheme from "./hooks/useTheme";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/index";
import { setUser } from "./store/slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useTheme();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const reduxObject = {
        accessToken: user.accessToken,
        displayName: user.displayName,
      };
      dispatch(setUser(reduxObject));
    });
  }, []);

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
