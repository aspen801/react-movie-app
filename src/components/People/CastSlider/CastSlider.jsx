import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import CastCard from "../CastCard/CastCard";
import BlockPlacholder from "../../UI/BlockPlaceholder/BlockPlaceholder";

import "./castslider.scss";

const CastSlider = ({ credits }) => {
  return (
    <div className="cast-slider__main-wrapper">
      <Swiper
        modules={[Navigation, Scrollbar]}
        className="swiper"
        speed={500}
        spaceBetween={30}
        slidesPerView={5}
        breakpointsBase={"container"}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          430: {
            slidesPerView: 3,
          },
          630: {
            slidesPerView: 4,
          },
          830: {
            slidesPerView: 5,
          },
        }}
      >
        {credits.length > 0 ? (
          credits.map((personality) => (
            <SwiperSlide style={{ minHeight: "100%" }}>
              <CastCard personality={personality} />
            </SwiperSlide>
          ))
        ) : (
          <BlockPlacholder text={"No cast information yet :( "} />
        )}
      </Swiper>
    </div>
  );
};

export default CastSlider;
