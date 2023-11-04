import React, { useState, useEffect } from "react";
// import RippleButton from "../UI/RippleButton/RippleButton";
import { getMediaById } from "../../api/media.api";
import useTimeConvert from "./hooks/useTimeConvert";
import "./mediacard.scss";

const MediaCard = ({ info, mediaType }) => {
  const [mediaDetails, setMediaDetails] = useState();
  const media = info;
  const posterImage = `https://image.tmdb.org/t/p/original${media.poster_path}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaDetails = await getMediaById({ mediaType, mediaId: media.id });
        console.log(mediaDetails.genres[0].name);
        setMediaDetails(mediaDetails);
      } catch (error) {
        console.error("Error fetching media details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="media-card__main-wrapper" /*style={{ backgroundImage: posterImage }}*/>
      <img src={posterImage} alt="" />
      <div className="media-card__title">
        <h1>{media.title || media.name}</h1>
      </div>
      <div className="media-card__info">
        <p>{(mediaDetails && mediaDetails.genres[0].name) || "No data"}</p>
        <hr />
        <p>{media.release_date ? media.release_date.split("-")[0] : media.first_air_date.split("-")[0]}</p>
        <hr />
        <p>
          {mediaDetails && mediaDetails.runtime
            ? useTimeConvert(mediaDetails.runtime)
            : (mediaDetails && `s${mediaDetails.number_of_seasons} ep${mediaDetails.number_of_episodes}`) || "No data"}
        </p>
      </div>

      {/* <RippleButton className="new_styles" styles={{ width: "100px", height: "50px" }}>
        Button
      </RippleButton> */}
    </div>
  );
};

export default MediaCard;
