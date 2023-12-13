import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import RippleButton from "../UI/RippleButton/RippleButton";
import BlockTitle from "../UI/BlockTitle/BlockTitle";
import BlockPlacholder from "../UI/BlockPlaceholder/BlockPlaceholder";
import formaters from "../../utils/formaters";
import useStopVideos from "../../hooks/useStopVideos";

import { auth } from "../../firebase/index";
import { getFavoriteMovies, addFavoriteMovie, removeFavoriteMovie } from "../../firebase/favorites";

import "./mediadetails.scss";

import starIcon from "/assets/star.svg";
import heartIcon from "/assets/heart.svg";
import deleteIcon from "/assets/broken-heart.svg";
import playIcon from "/assets/play.svg";
import CrossIcon from "../../assets/close-cross.svg?react";

import posterAlt from "/assets/posterdefault.png";

const MediaDetails = ({ details, videos, mediaType }) => {
  const stopVideos = useStopVideos();

  const { user } = useSelector((state) => state.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const posterImage = `https://image.tmdb.org/t/p/w500${details?.poster_path}`;
  const backdropImage = `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})`;

  useEffect(() => {
    const getData = async () => {
      if (user !== null) {
        const data = await getFavoriteMovies(auth.currentUser.uid);
        setIsFavorite(data.find((obj) => obj?.mediaId == details.id) !== undefined);
      }
    };

    getData();
  }, [user]);

  const handleTrailerModalOpen = () => {
    setTrailerModalOpen(!trailerModalOpen);
    stopVideos();
  };

  const handleAddToFavorites = () => {
    addFavoriteMovie(auth.currentUser.uid, details.id, mediaType);
    setIsFavorite(true);
  };
  const handleRemoveFromFavorites = () => {
    removeFavoriteMovie(auth.currentUser.uid, details.id, mediaType);
    setIsFavorite(false);
  };

  return (
    <div className="media-details__main-wrapper">
      <div className={`media-details__trailer-modal ${trailerModalOpen ? "visible" : ""}`}>
        <div className="media-details__trailer-modal-container">
          <section>
            <button className="closing-cross" onClick={handleTrailerModalOpen}>
              <CrossIcon className="icon" />
            </button>
          </section>

          {videos.results.length > 0 ? (
            <iframe width="100%" height="100%" src={`//www.youtube-nocookie.com/embed/${videos.results[0].key}`} allowfullscreen />
          ) : (
            <h1>{"No trailer :("}</h1>
          )}
        </div>
      </div>
      <div className="media-details__bg" style={{ backgroundImage: backdropImage }}>
        <div className="media-details__info-container">
          <div className="media-details__poster-container">
            <div className="image-container">{details?.poster_path ? <img src={posterImage} alt="" /> : <img src={posterAlt} alt="" />}</div>

            {isFavorite && user ? (
              <RippleButton onClick={handleRemoveFromFavorites} buttonType={"delete"} textColor={"white"} width={"100%"}>
                <img src={deleteIcon} alt="" />
                Remove from favorites
              </RippleButton>
            ) : (
              <RippleButton onClick={handleAddToFavorites} buttonType={"secondary"} textColor={"white"} width={"100%"}>
                <img src={heartIcon} alt="" />
                Favorite
              </RippleButton>
            )}
          </div>
          <div className="media-details__details-container">
            <div className="title">
              <h1>{details.name || details.original_name || details.title || "Error fetching name"}</h1>
              <div className="genres">
                {details.genres.map((genre) => {
                  return (
                    <>
                      <p>{genre.name}</p>
                      <span>•</span>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="rating">
              <img src={starIcon} alt="" />
              <span>{formaters.formatRating(details.vote_average)}/10 • IMDb Rating</span>
            </div>
            <div className="buttons_trailer">
              <RippleButton onClick={handleTrailerModalOpen} width={"200px"} buttonType={"primary"}>
                <img src={playIcon} alt="" />
                Watch trailer
              </RippleButton>
            </div>
            <div className="info">
              <p>Release date:</p>
              <span>
                {(details.first_air_date && formaters.formatDate(details.first_air_date)) ||
                  (details.release_date && formaters.formatDate(details.release_date)) ||
                  "Error fetching date"}
              </span>
              <p>{mediaType === "movie" ? "Running time:" : "Number of episodes:"}</p>
              <span>{(details?.runtime && `${details?.runtime}m`) || details?.number_of_episodes || "No data"}</span>
              <p>Country: </p>
              <span>{details.origin_country || formaters.formatCountries(details?.production_countries)}</span>
              {details.budget ? (
                <>
                  <p>Budget:</p>
                  <span>${formaters.formatBudget(details?.budget) || "No data"}</span>
                </>
              ) : (
                <>
                  <p>Status:</p>
                  <span>{details?.status || "No data"}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="media-details__bottom-section">
        <div className="media-details__overwiev-container">
          <BlockTitle name={"Overview"} />
          <p>{details.overview ? details.overview : <BlockPlacholder text={"No overwiev yet :("} />}</p>
        </div>

        {/* <div className="media-details__trailer-container">
            <h1>Trailer</h1>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div> */}
      </div>
    </div>
  );
};

export default MediaDetails;
