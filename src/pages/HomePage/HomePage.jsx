import React from "react";
import "./homepage.scss";
import tmbd from "../../api/configs/tmbd.config";

import HeroTrendingSlider from "../../components/HeroSection/HeroTrendingSlider";

const HomePage = () => {
  return (
    <div className="homepage__main-wrapper">
      <HeroTrendingSlider mediaType={tmbd.mediaType.all} mediaTimeWindow={tmbd.mediaTimeWindow.week} />
    </div>
  );
};

export default HomePage;
