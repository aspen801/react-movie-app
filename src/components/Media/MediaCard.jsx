import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMediaById } from "../../api/media.api";
import useTimeConvert from "../../hooks/useTimeConvert";
import "./mediacard.scss";

import loadingCircle from "/assets/loadingcircle.svg";
import posterAlt from "/assets/posterdefault.png";

const MediaCard = ({ media, mediaType }) => {
  const [mediaDetails, setMediaDetails] = useState();
  const posterImage = `https://image.tmdb.org/t/p/w500${media?.poster_path}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaDetails = await getMediaById({ mediaType, mediaId: media.id });
        setMediaDetails(mediaDetails);
      } catch (error) {
        console.error("Error fetching media details:", error);
      }
    };

    fetchData();
  }, []);

  return mediaDetails ? (
    <Link to={`/details/${mediaType}/${media.id}`}>
      <div className="media-card__main-wrapper">
        <div className="media-card__img-container">{media.poster_path ? <img src={posterImage} alt="" /> : <img src={posterAlt} alt="" />}</div>
        <div className="media-card_title-info-container">
          <div className="media-card__title">
            <h1>{media.title || media.name}</h1>
          </div>
          <div className="media-card__info">
            <p className="start">
              <span>★</span>
              {media.vote_average?.toString().slice(0, 3)}
            </p>
            <hr />
            <p className="center">{media.release_date ? media.release_date.split("-")[0] : media.first_air_date?.split("-")[0] || "TBA"}</p>
            <hr />
            <p className="end">
              {mediaDetails?.runtime ? useTimeConvert(mediaDetails?.runtime) : (mediaDetails?.number_of_episodes && `ep${mediaDetails?.number_of_episodes}`) || "TBA"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="loading-spin">
      <img src={loadingCircle} alt="" />
    </div>
  );
};

export default MediaCard;
