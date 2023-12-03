import tmdb from "./configs/tmbd.config";

const mediaEndpoints = {
  trending: ({ mediaType, mediaTimeWindow }) => `trending/${mediaType}/${mediaTimeWindow}`,
  list: ({ mediaType, mediaCategory }) => `${mediaType}/${mediaCategory}`,
  upcoming: ({ mediaType }) => `discover/${mediaType}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}`,
  search: ({ mediaType, query, page }) => `search/${mediaType}?query=${query}&page=${page}`,
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

const getUpcomingMedia = async ({ mediaType }) => {
  const response = await fetch(
    `${tmdb.baseUrl}/${mediaEndpoints.upcoming({ mediaType })}?&language=en-US&page=1&primary_release_date.gte=${new Date().toJSON().slice(0, 10).replace(/-/g, "-")}`,
    {
      headers: {
        Authorization: `Bearer ${tmdb.key}`,
      },
    }
  );

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
  const movieDetailsResponse = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.detail({ mediaType, mediaId })}`, {
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

  const movieDetails = await movieDetailsResponse.json();
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

const searchMedia = async ({ query, page }) => {
  const multiSearchResponse = await fetch(`${tmdb.baseUrl}/${mediaEndpoints.search({ mediaType: "multi", query, page })}`, {
    headers: {
      Authorization: `Bearer ${tmdb.key}`,
    },
  });

  const multiSearch = await multiSearchResponse.json();

  const sortedResults = await multiSearch.results.filter((result) => result.media_type !== "person");

  return { searchResults: sortedResults };
};

export { getTrendingMedia, getUpcomingMedia, getMediaList, getMediaById, getAllDetails, searchMedia };
