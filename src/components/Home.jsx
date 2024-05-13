import Movies from "./Movies";

const Home = () => {
  return (
    <div style={homeStyle}>
      <h1 style={headerStyle}>Witaj w naszym kinie!</h1>
      <Movies />
    </div>
  );
};

const homeStyle = {
  maxWidth: "1200px",
  margin: "20px auto",
  padding: "20px",
  backgroundColor: "#f8bbd0",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};
const headerStyle = {
  textAlign: "center",
  color: "#4a148c",
};

export default Home;
