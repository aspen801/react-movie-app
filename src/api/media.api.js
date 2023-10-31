import tmdb from "./configs/tmbd.config";

const mediaEndpoints = {
  trending: ({ mediaType, mediaTimeWindow }) => `trending/${mediaType}/${mediaTimeWindow}`,
  list: ({ mediaType, mediaCategory }) => `${mediaType}/${mediaCategory}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
  search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`,
};

const getTrendingMedia = async ({ mediaType, mediaTimeWindow }) => {
  const response = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.trending({ mediaType, mediaTimeWindow })}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  return await response.json();
};

const getMediaList = async ({ mediaType, mediaCategory }) => {
  const response = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.list({ mediaType, mediaCategory })}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  return await response.json();
};

const getMediaById = async ({ mediaType, mediaId }) => {
  const response = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.detail({ mediaType, mediaId })}`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  return await response.json();
};

export { getTrendingMedia, getMediaList, getMediaById };
