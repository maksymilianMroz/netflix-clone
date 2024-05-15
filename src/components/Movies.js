import { useEffect, useState } from "react";
import { getMovies } from "../services/tmdb";

import Movie from "./Movie";
import MovieDetailsModal from "./MovieDetailsModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const endpoint = "/movie/popular";
      const data = await getMovies(endpoint);
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={moviesGridStyle}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onMovieSelect={handleMovieSelect} />
      ))}
      {selectedMovie && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

const moviesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "15px",
  padding: "20px",
};

export default Movies;
