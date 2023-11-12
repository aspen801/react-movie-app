import tmdb from "./configs/tmbd.config";

const mediaEndpoints = {
  trending: ({ mediaType, mediaTimeWindow }) => `trending/${mediaType}/${mediaTimeWindow}`,
  list: ({ mediaType, mediaCategory }) => `${mediaType}/${mediaCategory}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}`,
  search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`,
  videos: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}/videos`,
  credits: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}/credits`,
  similar: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}/similar`,
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

const getAllDetails = async ({ mediaType, mediaId }) => {
  const movieDetailsresponse = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.detail({ mediaType, mediaId })}`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  const movieVideosResponse = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.videos({ mediaType, mediaId })}?language=en`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  const movieCreditsResponse = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.credits({ mediaType, mediaId })}?language=en`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  const movieSimilarResponse = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.similar({ mediaType, mediaId })}?language=en`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  const movieDetails = await movieDetailsresponse.json();
  const movieVideos = await movieVideosResponse.json();
  const movieCredits = await movieCreditsResponse.json();
  const movieSimilar = await movieSimilarResponse.json();

  return {
    details: movieDetails,
    videos: movieVideos,
    credits: movieCredits,
    similar: movieSimilar,
  };
};

export { getTrendingMedia, getMediaList, getMediaById, getAllDetails };
