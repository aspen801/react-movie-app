import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { getMediaList } from "../../api/media.api";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        modules={[Navigation, Scrollbar]}
        className="swiper"
        speed={500}
        spaceBetween={20}
        slidesPerView={6}
        // updateOnWindowResize={false}
        breakpointsBase={"container"}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          830: {
            slidesPerView: 3,
          },
          1080: {
            slidesPerView: 4,
          },
          1480: {
            slidesPerView: 5,
          },
          1700: {
            slidesPerView: 6,
          },
        }}
      >
        {media
          .sort(() => Math.random() - 0.5)
          .map((mediaObject) => (
            <SwiperSlide>
              <MediaCard info={mediaObject} mediaType={mediaType} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MediaSlider;
