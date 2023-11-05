import React from "react";
import "./seriespage.scss";
import tmbd from "../../api/configs/tmbd.config";

import HeroTrendingSlider from "../../components/HeroSection/HeroTrendingSlider";
import MediaSlider from "../../components/Media/MediaSlider";
import MediaContainer from "../../components/Media/MediaContainer";

const SeriesPage = () => {
  return (
    <div className="seriespage__main-wrapper">
      <HeroTrendingSlider mediaType={tmbd.mediaType.tv} mediaTimeWindow={tmbd.mediaTimeWindow.week} />
      <MediaContainer name={"Airing Today"}>
        <MediaSlider mediaType={tmbd.mediaType.tv} mediaCategory={tmbd.mediaCategory.airing_today} />
      </MediaContainer>
      <MediaContainer name={"Popular Series"}>
        <MediaSlider mediaType={tmbd.mediaType.tv} mediaCategory={tmbd.mediaCategory.popular} />
      </MediaContainer>
      <MediaContainer name={"Top Rated Series"}>
        <MediaSlider mediaType={tmbd.mediaType.tv} mediaCategory={tmbd.mediaCategory.top_rated} />
      </MediaContainer>
    </div>
  );
};

export default SeriesPage;
