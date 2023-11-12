import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import MediaCard from "../Media/MediaCard";

import "./similarslider.scss";

const SimilarSlider = ({ media, mediaType }) => {
  return (
    <div className="similar-slider__main-wrapper">
      <Swiper
        modules={[Navigation, Scrollbar]}
        className="swiper"
        speed={500}
        spaceBetween={30}
        slidesPerView={4}
        // updateOnWindowResize={false}
        breakpointsBase={"container"}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          430: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          830: {
            slidesPerView: 4,
          },
        }}
      >
        {media.map((mediaObject) => (
          <SwiperSlide style={{ minHeight: "100%" }}>
            <MediaCard media={mediaObject} mediaType={mediaType} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarSlider;
