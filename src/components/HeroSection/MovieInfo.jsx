import React, { useEffect, useState } from "react";
import "./movieinfo.scss";

const urlMovieGenres =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";
const urlTvGenres = "https://api.themoviedb.org/3/genre/tv/list?language=en";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk4YzRhYjBmNTU2YzI0ZGNjM2VhMDdmZWJhNWFlMyIsInN1YiI6IjY1M2I4Mjc4NTE5YmJiMDBhYjY3Y2QxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNUHh2C-p7b7eW-KPGukdg8XPAJqVqfFXvAFN3RKCPY",
  },
};

const MovieInfo = (infoObject) => {
  const [allGenres, setAllGenres] = useState([]);
  const info = infoObject.info;
  const backdropImage = `url(https://image.tmdb.org/t/p/original${info.backdrop_path})`;

  useEffect(() => {
    let genresArray = [];
    const setGenres = async () => {
      await fetch(urlMovieGenres, options)
        .then((res) => res.json())
        .then((json) => {
          genresArray.push(...json.genres);
        })
        .catch((err) => console.error("error:" + err));
      await fetch(urlTvGenres, options)
        .then((res) => res.json())
        .then((json) => {
          genresArray.push(...json.genres);
        })
        .catch((err) => console.error("error:" + err));

      setAllGenres(genresArray);
    };
    setGenres();
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
