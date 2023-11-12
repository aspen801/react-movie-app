import React from "react";
import { createRipples } from "react-ripples";

import "./mediadetails.scss";

import starIcon from "/assets/star.svg";
import heartIcon from "/assets/heart.svg";
import playIcon from "/assets/play.svg";

import posterAlt from "/assets/posterdefault.png";

const MyRipples = createRipples({
  color: "rgba(255, 255, 255, 0.2)",
  during: 800,
});

//TODO: move all data transformation to API layer

const MediaDetails = ({ details }) => {
  const posterImage = `https://image.tmdb.org/t/p/w500${details?.poster_path}`;
  const backdropImage = `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})`;

  return (
    <div className="media-details__main-wrapper">
      <div className="media-details__bg" style={{ backgroundImage: backdropImage }}>
        <div className="media-details__info-container">
          <div className="media-details__poster-container">
            <div className="image-container">{details?.poster_path ? <img src={posterImage} alt="" /> : <img src={posterAlt} alt="" />}</div>
            <MyRipples className="ripples-container">
              <button>
                <img src={heartIcon} alt="" />
                Favourite
              </button>
            </MyRipples>
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
              <span>{details.vote_average.toString().slice(0, 3)}/10 • IMDb Rating</span>
            </div>
            <div className="buttons_trailer">
              <MyRipples className="ripples-container">
                <button>
                  <img src={playIcon} alt="" />
                  Watch trailer
                </button>
              </MyRipples>
            </div>
            <div className="info">
              <p>Release date:</p>
              <span>
                {details.release_date?.toString().slice(0, 4) ||
                  details.first_air_date?.toString().slice(0, 4) ||
                  details.seasons[0].air_date?.toString().slice(0, 4) ||
                  "Error fetching date"}
              </span>
              <p>{details.media_type === "movie" ? "Running time:" : "Number of episodes:"}</p>
              <span>{(details.runtime && `${details.runtime}m`) || details.number_of_episodes}</span>
              <p>Country: </p>
              <span>
                {details.origin_country || details.production_countries.map((country, i) => `${country.name}${i < details.production_countries.length - 1 ? " • " : ""}`)}
              </span>
              {details.budget ? (
                <>
                  <p>Budget:</p>
                  <span>${details.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                </>
              ) : (
                <>
                  <p>Status:</p>
                  <span>{details.status}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="media-details__bottom-section">
        <div className="media-details__overwiev-container">
          <h1>Overwiev</h1>
          <p>{details.overview || "No overview yet :("}</p>
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
