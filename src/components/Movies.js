import { useEffect, useState } from "react";
import { getMovies } from "../services/tmdb";

import Movie from "./Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const endpoint = "/movie/popular";
      const data = await getMovies(endpoint);
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div style={moviesGridStyle}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
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
