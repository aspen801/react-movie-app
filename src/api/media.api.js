import tmdb from "./configs/tmbd.config";

const getTrendingMedia = async () => {
  const response = await fetch(
    `${tmdb.baseUrl}/trending/all/week?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${tmdb.key}`,
      },
    }
  );

  return await response.json();
};

const getMediaById = async () => {
  const response = await fetch(
    `${tmdb.baseUrl}/trending/all/week?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${tmdb.key}`,
      },
    }
  );

  return await response.json();
};

export { getTrendingMedia, getMedia };
