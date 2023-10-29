import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getTrendingMedia } from "../../api/media.api";
import MovieInfo from "./MovieInfo";
import "swiper/css";
import "./herosection.scss";

const HeroSection = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMedia();
        setInfos(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
