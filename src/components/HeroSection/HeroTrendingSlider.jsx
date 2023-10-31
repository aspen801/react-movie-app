import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getTrendingMedia } from "../../api/media.api";
import MovieInfo from "./MovieInfo";
import "swiper/css";
import "swiper/css/pagination";

import "./herotrendingslider.scss";

const HeroTrendingSlider = ({ mediaType, mediaTimeWindow }) => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMedia({ mediaType, mediaTimeWindow });
        setInfos(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hero__main-wrapper">
      <Swiper modules={[Autoplay, Pagination]} className="swiper" speed={1000} autoplay={{ delay: 2500, disableOnInteraction: true }} pagination={{ clickable: true }}>
        {infos.map((infoObject) => (
          <SwiperSlide>
            <MovieInfo info={infoObject} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HeroTrendingSlider;

//TODO: add trending week/day switch button
