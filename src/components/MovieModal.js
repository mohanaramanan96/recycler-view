
import React from "react";
import "../styles/modal.css";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;
  const trailer = movie.videos?.results?.find(v => v.type === "Trailer");

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal glass" onClick={e => e.stopPropagation()}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {trailer && (
          <iframe src={`https://www.youtube.com/embed/${trailer.key}`} allowFullScreen />
        )}
      </div>
    </div>
  );
}
