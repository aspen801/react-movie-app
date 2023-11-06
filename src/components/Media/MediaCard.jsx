import React, { useState, useEffect } from "react";
import { getMediaById } from "../../api/media.api";
import useTimeConvert from "./hooks/useTimeConvert";
import "./mediacard.scss";

import loadingCircle from "/assets/loadingcircle.svg";

const MediaCard = ({ media, mediaType }) => {
  const [mediaDetails, setMediaDetails] = useState();
  const posterImage = `https://image.tmdb.org/t/p/w500${media.poster_path}`;

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
    <div className="media-card__main-wrapper" /*style={{ backgroundImage: posterImage }}*/>
      <div className="media-card__img-container">
        <img src={posterImage} alt="" />
      </div>

      <div className="media-card_title-info-container">
        <div className="media-card__title">
          <h1>{media.title || media.name}</h1>
        </div>
        <div className="media-card__info">
          <p className="start">
            <span>★</span>
            {media.vote_average.toString().slice(0, 3)}
          </p>{" "}
          {/*(mediaDetails && mediaDetails.genres[0].name) || "No data"*/}
          <hr />
          <p className="center">{media.release_date ? media.release_date.split("-")[0] : media.first_air_date.split("-")[0]}</p>
          <hr />
          <p className="end">{mediaDetails && mediaDetails.runtime ? useTimeConvert(mediaDetails.runtime) : mediaDetails && `ep${mediaDetails.number_of_episodes}`}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="loading-spin">
      <img src={loadingCircle} alt="" />
    </div>
  );
};

export default MediaCard;
