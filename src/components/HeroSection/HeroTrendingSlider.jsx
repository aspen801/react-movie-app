import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getTrendingMedia } from "../../api/media.api";
import { getAllGenres } from "../../api/genres.api";
import MovieInfo from "./MovieInfo";

import { setLoading } from "../../store/slices/loadingSlice";

import "swiper/css";
import "swiper/css/pagination";

import "./herotrendingslider.scss";

const HeroTrendingSlider = ({ mediaType, mediaTimeWindow }) => {
  const dispatch = useDispatch();
  const [infos, setInfos] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getTrendingMedia({ mediaType, mediaTimeWindow });
        setInfos(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInfo();

    const fetchGenres = async () => {
      try {
        const allGenres = await getAllGenres();
        setAllGenres(allGenres.genres);
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="hero__main-wrapper ${">
      <Swiper modules={[Autoplay, Pagination]} className="swiper" speed={1000} autoplay={{ delay: 2500, disableOnInteraction: true }} pagination={{ clickable: true }}>
        {infos.map((infoData) => (
          <SwiperSlide>
            <MovieInfo info={infoData} genres={allGenres} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HeroTrendingSlider;

//TODO: add trending week/day switch button
