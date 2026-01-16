
import React from "react";
import "../styles/item.css";

export default function MovieItem({ movie, onSelect, style }) {
  return (
    <div className="item glass" style={style} onClick={() => onSelect(movie.id)}>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <div className="info">
        <h3>{movie.title}</h3>
        <span className="rating">⭐ {movie.vote_average}</span>
        <p className="overview">{movie.overview}</p>
      </div>
    </div>
  );
}
