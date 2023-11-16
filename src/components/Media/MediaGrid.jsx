import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import MediaCard from "./MediaCard";
import BlockTitle from "../UI/BlockTitle/BlockTitle";
import { getUpcomingMedia } from "../../api/media.api";
import "./mediagrid.scss";
import { setLoading } from "../../store/slices/loadingSlice";

const MediaGrid = ({ mediaType }) => {
  const [media, setMedia] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const data = await getUpcomingMedia({ mediaType });
        setMedia(data.results);
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="media-grid__main-wrapper">
      <div className="media-grid__card-grid">
        {media.map((mediaObject) => (
          <MediaCard media={mediaObject} mediaType={"movie"} />
        ))}
      </div>
    </div>
  );
};

export default MediaGrid;
