const Movie = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div style={movieStyle}>
      <img src={imgURL} alt={movie.title} style={imageStyle} />
      <div style={titleStyle}>{movie.title}</div>
    </div>
  );
};

const movieStyle = {
  cursor: "pointer",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "5px",
};

const titleStyle = {
  marginTop: "5px",
  fontWeight: "bold",
  fontSize: "0.9rem",
  textAlign: "center",
  color: "#333",
};

export default Movie;
