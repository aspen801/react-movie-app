import React from "react";
import "./moviespage.scss";
import tmbd from "../../api/configs/tmbd.config";

import HeroTrendingSlider from "../../components/HeroSection/HeroTrendingSlider";
import MediaSlider from "../../components/Media/MediaSlider";
import MediaContainer from "../../components/Media/MediaContainer";

const MoviesPage = () => {
  return (
    <div className="moviespage__main-wrapper">
      <HeroTrendingSlider mediaType={tmbd.mediaType.movie} mediaTimeWindow={tmbd.mediaTimeWindow.week} />
      <MediaContainer name={"Now In Theaters"}>
        <MediaSlider mediaType={tmbd.mediaType.movie} mediaCategory={tmbd.mediaCategory.now_playing} />
      </MediaContainer>
      <MediaContainer name={"Popular Movies"}>
        <MediaSlider mediaType={tmbd.mediaType.movie} mediaCategory={tmbd.mediaCategory.popular} />
      </MediaContainer>
      <MediaContainer name={"Top Rated Movies"}>
        <MediaSlider mediaType={tmbd.mediaType.movie} mediaCategory={tmbd.mediaCategory.top_rated} />
      </MediaContainer>
    </div>
  );
};

export default MoviesPage;
