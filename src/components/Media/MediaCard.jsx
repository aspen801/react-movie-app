import React, { useState, useEffect } from "react";
// import RippleButton from "../UI/RippleButton/RippleButton";
import { getMediaById } from "../../api/media.api";
import useTimeConvert from "./hooks/useTimeConvert";
import "./mediacard.scss";

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

  return (
    <div className="media-card__main-wrapper" /*style={{ backgroundImage: posterImage }}*/>
      <div className="media-card__img-container">
        <img src={posterImage} alt="" />
      </div>

      <div className="media-card_title-info-container">
        <div className="media-card__title">
          <h1>{media.title || media.name}</h1>
        </div>
        <div className="media-card__info">
          <p className="start">★{media.vote_average.toString().slice(0, 3)}</p> {/*(mediaDetails && mediaDetails.genres[0].name) || "No data"*/}
          <hr />
          <p className="center">{media.release_date ? media.release_date.split("-")[0] : media.first_air_date.split("-")[0]}</p>
          <hr />
          <p className="end">
            {mediaDetails && mediaDetails.runtime ? useTimeConvert(mediaDetails.runtime) : (mediaDetails && `ep${mediaDetails.number_of_episodes}`) || "No data"}
          </p>
        </div>
      </div>

      {/* <RippleButton className="new_styles" styles={{ width: "100px", height: "50px" }}>
        Button
      </RippleButton> */}
    </div>
  );
};

export default MediaCard;
