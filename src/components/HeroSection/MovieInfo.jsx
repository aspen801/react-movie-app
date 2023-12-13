import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RippleButton from "../UI/RippleButton/RippleButton";
import { auth } from "../../firebase/index";
import { getFavoriteMovies, addFavoriteMovie, removeFavoriteMovie } from "../../firebase/favorites";

import "./movieinfo.scss";

import infoIcon from "/assets/info.svg";
import heartIcon from "/assets/heart.svg";
import deleteIcon from "/assets/broken-heart.svg";
import starIcon from "/assets/star.svg";

const MovieInfo = ({ info, genres }) => {
  const { user } = useSelector((state) => state.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const backdropImage = `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`;

  useEffect(() => {
    const getData = async () => {
      if (user !== null) {
        const data = await getFavoriteMovies(auth.currentUser.uid);

        setIsFavorite(data.find((obj) => obj?.mediaId == info.id) !== undefined);
      }
    };

    getData();
  }, [user]);

  const handleAddToFavorites = () => {
    addFavoriteMovie(auth.currentUser.uid, info.id, info.media_type);
    setIsFavorite(true);
  };
  const handleRemoveFromFavorites = () => {
    removeFavoriteMovie(auth.currentUser.uid, info.id, info.media_type);
    setIsFavorite(false);
  };

  return (
    <div className="movie-info__wrapper" style={{ backgroundImage: backdropImage }}>
      <div className="movie-info__description-block">
        <div className="movie-info__secondary-info">
          <div className="rating">
            <img src={starIcon} alt="" />
            <p>{info?.vote_average?.toString().slice(0, 3)}/10</p>
          </div>
          <div className="genres">
            {[...info.genre_ids].map((genreId) => (
              <p key={genreId}>{genres.find((e) => e?.id === genreId)?.name || "Error fetching genres"}</p>
            ))}
          </div>
        </div>
        <div className="movie-info__main-info">
          <div className="title">{info?.media_type === "movie" ? <h1>{info?.title}</h1> : <h1>{info?.name}</h1>}</div>
          <div className="overview">
            <p>{info?.overview}</p>
          </div>
        </div>
        <div className="movie-info__buttons">
          <RippleButton buttonType={"primary"} to={`/details/${info?.media_type}/${info?.id}`}>
            <img src={infoIcon} alt="" />
            Information
          </RippleButton>
          {isFavorite && user ? (
            <RippleButton onClick={handleRemoveFromFavorites} buttonType={"delete"} textColor={"white"}>
              <img src={deleteIcon} alt="" />
              Remove from favorites
            </RippleButton>
          ) : (
            <RippleButton onClick={handleAddToFavorites} buttonType={"secondary"} textColor={"white"}>
              <img src={heartIcon} alt="" />
              Favorite
            </RippleButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
