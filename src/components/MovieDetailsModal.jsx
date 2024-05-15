import ReactDOM from "react-dom";

const MovieDetailsModal = ({ movie, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  const imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return ReactDOM.createPortal(
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={headerStyle}>{movie.title}</h2>
        <div style={contentStyle}>
          <div>
            <img src={imgURL} alt={movie.title} style={imageStyle} />
            <p>{movie.overview}</p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <button style={buttonStyle} onClick={onClose}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "5px",
  maxWidth: "600px",
  maxHeight: "80vh",
  overflowY: "auto",
};

const headerStyle = {
  marginTop: 0,
};

const contentStyle = {
  display: "flex",
  gap: "20px",
};

const imageStyle = {
  width: "200px",
  height: "300px",
  borderRadius: "5px",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default MovieDetailsModal;
