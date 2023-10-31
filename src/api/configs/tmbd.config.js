const tmbd = {
  baseUrl: "https://api.themoviedb.org/3",
  key: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk4YzRhYjBmNTU2YzI0ZGNjM2VhMDdmZWJhNWFlMyIsInN1YiI6IjY1M2I4Mjc4NTE5YmJiMDBhYjY3Y2QxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNUHh2C-p7b7eW-KPGukdg8XPAJqVqfFXvAFN3RKCPY",
  mediaType: {
    all: "all",
    movie: "movie",
    tv: "tv",
  },
  mediaCategory: {
    now_playing: "now_playing",
    popular: "popular",
    top_rated: "top_rated",
    upcoming: "upcoming",
  },
  mediaTimeWindow: {
    day: "day",
    week: "week",
  },
};

export default tmbd;
