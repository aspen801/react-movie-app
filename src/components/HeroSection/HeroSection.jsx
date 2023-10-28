import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MovieInfo from "./MovieInfo";
import "swiper/css";
import "./herosection.scss";

const url = "https://api.themoviedb.org/3/trending/all/week?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk4YzRhYjBmNTU2YzI0ZGNjM2VhMDdmZWJhNWFlMyIsInN1YiI6IjY1M2I4Mjc4NTE5YmJiMDBhYjY3Y2QxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNUHh2C-p7b7eW-KPGukdg8XPAJqVqfFXvAFN3RKCPY",
  },
};

const HeroSection = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setInfos(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  console.log(typeof infos);
  return (
    <div className="hero__main-wrapper">
      <Swiper
        modules={[Autoplay]}
        className="swiper"
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {infos.map((infoObject) => (
          <SwiperSlide>
            <MovieInfo info={infoObject} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HeroSection;
