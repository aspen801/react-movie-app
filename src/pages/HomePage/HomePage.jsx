import React from "react";
import "./homepage.scss";
import tmbd from "../../api/configs/tmbd.config";

import HeroTrendingSlider from "../../components/HeroSection/HeroTrendingSlider";
import MediaSlider from "../../components/Media/MediaSlider";
import MediaContainer from "../../components/Media/MediaContainer";

//TODO: remove MediaContainer, its unnecessary

const HomePage = () => {
  return (
    <div className="homepage__main-wrapper">
      <HeroTrendingSlider mediaType={tmbd.mediaType.all} mediaTimeWindow={tmbd.mediaTimeWindow.week} />
      <MediaContainer name={"Now In Theaters"}>
        <MediaSlider mediaType={tmbd.mediaType.movie} mediaCategory={tmbd.mediaCategory.now_playing} />
      </MediaContainer>
      <MediaContainer name={"Popular Tv Series"}>
        <MediaSlider mediaType={tmbd.mediaType.tv} mediaCategory={tmbd.mediaCategory.popular} />
      </MediaContainer>
      <MediaContainer name={"Popular Movies"}>
        <MediaSlider mediaType={tmbd.mediaType.movie} mediaCategory={tmbd.mediaCategory.popular} />
      </MediaContainer>
    </div>
  );
};

export default HomePage;
