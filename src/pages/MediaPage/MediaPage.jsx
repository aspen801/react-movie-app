import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaContainer from "../../components/Media/MediaContainer";
import MediaDetails from "../../components/Media/MediaDetails";
import SimilarSlider from "../../components/SimilarSlider/SimilarSlider";
import CastSlider from "../../components/People/CastSlider/CastSlider";
import Loading from "../../components/Loading/Loading";
import { getAllDetails } from "../../api/media.api";

import "./mediapage.scss";

//TODO: rework: all data fetch inside components, loading set by redux

const MediaPage = () => {
  const [mediaDetails, setMediaDetails] = useState();
  const { mediaType, mediaId } = useParams();

  useEffect(() => {
    setMediaDetails(null);

    const fetchData = async () => {
      try {
        const mediaDetails = await getAllDetails({ mediaType, mediaId });
        setMediaDetails(mediaDetails);
      } catch (error) {
        console.error("Error fetching media details:", error);
      }
    };

    fetchData();
  }, [mediaId]);

  return mediaDetails ? (
    <div className="mediapage__main-wrapper">
      <MediaDetails details={mediaDetails.details} />
      <div className="mediapage__rest-details">
        <h1 className="title">Cast</h1>
        <CastSlider credits={mediaDetails?.credits.cast} />
        <h1 className="title">Similar</h1>
        <SimilarSlider media={mediaDetails.similar.results} mediaType={mediaType} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MediaPage;