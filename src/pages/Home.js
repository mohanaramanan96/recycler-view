
import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import MovieItem from "../components/MovieItem";
import MovieModal from "../components/MovieModal";
import SkeletonItem from "../components/SkeletonItem";
import { fetchMovies, fetchMovieDetails } from "../services/tmdb";
import "../styles/home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    loadMovies();
  }, [page, query]);

  const loadMovies = async () => {
    setLoading(true);
    const data = await fetchMovies(page, query);
    setMovies(prev => [...prev, ...(data.results || [])]);
    setLoading(false);
  };

  const openDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    setSelectedMovie(data);
  };

  const Row = ({ index, style }) => {
    if (loading && !movies[index]) return <SkeletonItem style={style} />;
    return <MovieItem movie={movies[index]} style={style} onSelect={openDetails} />;
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Netflix Movie Explorer</h1>
        <input
          placeholder="Search movies..."
          onChange={e => {
            setMovies([]);
            setPage(1);
            setQuery(e.target.value);
          }}
        />
      </header>

      {movies.length === 0 && !loading && (
        <div className="empty">🎬 No movies found</div>
      )}

      <List height={650} itemCount={loading ? 6 : movies.length} itemSize={190} width="100%">
        {Row}
      </List>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}
