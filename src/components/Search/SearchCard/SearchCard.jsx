import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { getMediaById } from "../../../api/media.api";

import "./searchcard.scss";

import posterAlt from "/assets/posterdefault.png";

const SearchCard = ({ media, mediaType }) => {
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
    console.log(mediaDetails);
  }, []);

  return (
    <Link to={`/details/${mediaType}/${media.id}`}>
      <div className="search-card__main-wrapper">
        <div className="search-card__img-container">{media.poster_path ? <img src={posterImage} alt="" /> : <img src={posterAlt} alt="" />}</div>
        <div className="search-card_title-info-container">
          <div className="search-card__title">
            <h1>{media.title || media.name}</h1>
          </div>
          <div className="search-card__release-date">
            <p>{media.release_date ? media.release_date.split("-")[0] : media.first_air_date?.split("-")[0] || "TBA"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
