const key = '9c99b3b19eb8118ba4e2adf7438f56ab';

const request = {
  // requestLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&languange-en-US&page=1`,
  requestComedy: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=drama&page=1&include_adult=false,`,
  requestTvTrending: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestRecomendations: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${key}&language=en-US&page=1`,
};

export default request;
