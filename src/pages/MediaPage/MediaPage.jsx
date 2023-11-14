import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle";
import MediaDetails from "../../components/Media/MediaDetails";
import SimilarSlider from "../../components/SimilarSlider/SimilarSlider";
import CastSlider from "../../components/People/CastSlider/CastSlider";
import { getAllDetails } from "../../api/media.api";

import { setLoading } from "../../store/slices/loadingSlice";

import "./mediapage.scss";

//TODO: rework: all data fetch inside components, loading set by redux

const MediaPage = () => {
  const dispatch = useDispatch();
  const [mediaDetails, setMediaDetails] = useState();
  const { mediaType, mediaId } = useParams();

  useEffect(() => {
    setMediaDetails(null);

    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const mediaDetails = await getAllDetails({ mediaType, mediaId });
        setMediaDetails(mediaDetails);
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching media details:", error);
      }
    };

    fetchData();
  }, [mediaId]);

  return mediaDetails ? (
    <div className="mediapage__main-wrapper">
      <MediaDetails details={mediaDetails?.details} />
      <div className="mediapage__rest-details">
        <BlockTitle name={"Cast"} />
        <CastSlider credits={mediaDetails?.credits.cast} />
        <BlockTitle name={"Similar"} />
        <SimilarSlider media={mediaDetails?.similar.results} mediaType={mediaType} />
      </div>
    </div>
  ) : (
    <div className="placeholder-div" />
  );
};

export default MediaPage;
