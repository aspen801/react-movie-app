import React from "react";
import RippleButton from "../UI/RippleButton/RippleButton";
import "./movieinfo.scss";

import infoIcon from "/assets/info.svg";
import heartIcon from "/assets/heart.svg";
import starIcon from "/assets/star.svg";

const MovieInfo = ({ info, genres }) => {
  const backdropImage = `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`;

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
              <p>{genres.find((e) => e?.id === genreId)?.name || "Error fetching genres"}</p>
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
          <RippleButton buttonType={"secondary"} textColor={"white"} onClick={false}>
            <img src={heartIcon} alt="" />
            Favourite
          </RippleButton>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
