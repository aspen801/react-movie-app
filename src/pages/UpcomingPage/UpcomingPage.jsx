import React from "react";
import MediaGrid from "../../components/Media/MediaGrid";
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";
import MediaContainer from "../../components/Media/MediaContainer";
import tmbd from "../../api/configs/tmbd.config";

import "./upcomingpage.scss";

const UpcomingPage = () => {
  return (
    <div className="upcoming-page__main-wrapper">
      <MediaContainer name={"Upcoming"}>
        <MediaGrid mediaType={tmbd.mediaType.movie} mediaCategory={tmbd.mediaCategory.upcoming} />
      </MediaContainer>
      {/* <div className="upcoming-page__title-block">
        <BlockTitle name={"Upcoming & New"} />
      </div> */}
    </div>
  );
};

export default UpcomingPage;
