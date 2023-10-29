import React, { useEffect, useState } from "react";
import { getAllGenres } from "../../api/genres.api";
import "./movieinfo.scss";

const MovieInfo = (infoObject) => {
  const [allGenres, setAllGenres] = useState([]);
  const info = infoObject.info;
  const backdropImage = `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allGenres = await getAllGenres();
        setAllGenres(allGenres.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="movie-info__wrapper"
      style={{ backgroundImage: backdropImage }}
    >
      <div className="movie-info__description-block">
        <div className="movie-info__secondary-info">
          <div className="rating">
            <p>{info.vote_average.toString().slice(0, 3)}/10</p>
          </div>
          <div className="duration"></div>
          <div className="genres">
            {[...info.genre_ids].map((genreId, index) => (
              <p>
                {allGenres.find((e) => e.id === genreId) &&
                  allGenres.find((e) => e.id === genreId).name}
              </p>
            ))}
          </div>
        </div>
        <div className="movie-info__main-info">
          <div className="title">
            {info.media_type === "movie" ? (
              <h1>{info.title}</h1>
            ) : (
              <h1>{info.name}</h1>
            )}
          </div>
          <div className="overview">
            <p>{info.overview}</p>
          </div>
        </div>
        <div className="movie-info__buttons"></div>
      </div>
    </div>
  );
};

export default MovieInfo;
