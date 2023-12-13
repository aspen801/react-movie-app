import React, { useState, useEffect } from "react";
import { getFavoriteMovies, removeFavoriteMovie } from "../../firebase/favorites";
import MediaContainer from "../../components/Media/MediaContainer";
import MediaCard from "../../components/Media/MediaCard";
import RippleButton from "../../components/UI/RippleButton/RippleButton";
import BlockPlacholder from "../../components/UI/BlockPlaceholder/BlockPlaceholder";
import { getMediaById } from "../../api/media.api";

import { useSelector } from "react-redux";
import { auth } from "../../firebase/index";

import deleteIcon from "/assets/broken-heart.svg";

import "./profilepage.scss";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);
  const [mediaData, setMediaData] = useState([]);

  const getData = async () => {
    if (user !== null) {
      const data = await getFavoriteMovies(auth.currentUser.uid);
      const mediaPromises = data.map((media) => getMediaById({ mediaType: media.mediaType, mediaId: media.mediaId }));
      try {
        const resolvedMediaData = await Promise.all(mediaPromises);
        setMediaData(
          resolvedMediaData.map((mediaData, index) => {
            return { mediaData, mediaType: data[index].mediaType };
          })
        );
      } catch (error) {
        console.error("Error fetching media data:", error);
      }
    }
  };

  useEffect(() => {
    if (user !== null) {
      getData();
    }
  }, [user]);

  const handleRemoveFromFavorites = async (mediaId) => {
    await removeFavoriteMovie(auth.currentUser.uid, mediaId);
    await getData();
  };

  return (
    <div className="profile-page__main-wrapper">
      {user ? (
        <MediaContainer name={"Favorites"}>
          <div className="profile-page__favorites-grid">
            {mediaData?.map(
              (media, index) =>
                media && (
                  <div className="profile-page__favorite-card-container" key={index}>
                    <MediaCard mediaType={media.mediaType} media={media.mediaData} />
                    <RippleButton onClick={() => handleRemoveFromFavorites(media.mediaData.id)} buttonType={"delete"} textColor={"white"} width={"100%"}>
                      <img src={deleteIcon} alt="" />
                      Remove from favorites
                    </RippleButton>
                  </div>
                )
            )}
          </div>
        </MediaContainer>
      ) : (
        <BlockPlacholder text={"No info :("} />
      )}
    </div>
  );
};

export default ProfilePage;
