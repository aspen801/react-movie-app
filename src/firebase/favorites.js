import { db } from "./index.js";
import { ref, update, get, set, onValue } from "firebase/database";

const getFavoriteMovies = async (userId) => {
  const favoritesRef = ref(db, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return [];
  }
};

const addFavoriteMovie = async (userId, mediaId, mediaType) => {
  const favoritesRef = ref(db, `users/${userId}/favorites`);
  onValue(
    favoritesRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (Array.isArray(data) && data.find((obj) => obj?.mediaId === mediaId) === undefined) {
          update(favoritesRef, { [data.length]: { mediaId, mediaType } });
        }
      } else {
        update(favoritesRef, { [0]: { mediaId, mediaType } });
      }
    },
    { onlyOnce: true }
  );
};

const removeFavoriteMovie = async (userId, movieId) => {
  const favoritesRef = ref(db, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);

  if (snapshot.exists()) {
    const data = snapshot.val();
    const updatedData = Array.isArray(data) ? data.filter((item) => item.mediaId !== movieId) : [];
    set(favoritesRef, updatedData);
  }
};

export { getFavoriteMovies, addFavoriteMovie, removeFavoriteMovie };
