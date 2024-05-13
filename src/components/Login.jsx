import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div style={loginStyles}>
      <h2 style={headerStyles}>Logowanie</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <label style={labelStyles}>
          Użytkownik:
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            style={inputStyles}
          />
        </label>
        <label>
          Hasło:
          <input
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            style={inputStyles}
          />
        </label>
        <button style={buttonStyles}>Zaloguj</button>
      </form>
    </div>
  );
};

const loginStyles = {
  maxWidth: "300px",
  margin: "50px auto",
  padding: "5px 20px",
  backgroundColor: "#c8e6c9",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
};
const headerStyles = { textAlign: "center" };
const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const labelStyles = { marginBottom: "10px" };
const inputStyles = { padding: "10px", width: "95%", margin: "0 10px" };
const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;
