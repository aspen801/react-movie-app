import tmdb from "./configs/tmbd.config";

const getAllGenres = async () => {
  try {
    const movieGenresResponse = await fetch(`${tmdb.baseUrl}/genre/movie/list?language=en`, {
      headers: {
        Authorization: `Bearer ${tmdb.key}`,
      },
    });

    const tvGenresResponse = await fetch(`${tmdb.baseUrl}/genre/tv/list?language=en`, {
      headers: {
        Authorization: `Bearer ${tmdb.key}`,
      },
    });

    const movieGenres = await movieGenresResponse.json();
    const tvGenres = await tvGenresResponse.json();

    const combinedGenres = [...movieGenres.genres, ...tvGenres.genres];

    return { genres: combinedGenres };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getAllGenres };
