import React from "react";

import "./castcard.scss";

import personAlt from "/assets/persondefault.jpg";

const CastCard = ({ personality }) => {
  const profileImage = `https://image.tmdb.org/t/p/w500${personality.profile_path}`;

  return (
    <div className="cast-card_main-wrapper">
      <div className="cast-card_img-container">{personality.profile_path ? <img src={profileImage} alt="" /> : <img src={personAlt} alt="" />}</div>
      <div className="cast-card_personality-info">
        <h4>{personality.character}</h4>
        <p>{personality.name || personality.original_name}</p>
      </div>
    </div>
  );
};

export default CastCard;
