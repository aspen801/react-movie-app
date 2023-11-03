import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getMediaList } from "../../api/media.api";
import "swiper/css";
import "swiper/css/pagination";

import "./mediaslider.scss";

import MediaCard from "./MediaCard";

const MediaSlider = ({ mediaType, mediaCategory }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMediaList({ mediaType, mediaCategory });
        setMedia(data.results);
        console.log("Media: " + media);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="media-slider__main-wrapper">
      <Swiper
        modules={[Navigation]}
        className="swiper"
        speed={500}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
          1600: {
            slidesPerView: 7,
          },
        }}
      >
        {media
          .sort(() => Math.random() - 0.5)
          .map((mediaObject) => (
            <SwiperSlide>
              <MediaCard info={mediaObject} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MediaSlider;
