
const API_KEY = "e4b1efc35fd256c1d9c4b4780fe6ab60";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (page = 1, query = "") => {
  const url = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    : `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`;

  const res = await fetch(url);
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  );
  return res.json();
};
