import { useEffect } from "react";
import { uppercaseString } from "../utils/uppercaseString";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav style={navStyles}>
      <div style={logoStyles}>{uppercaseString("Logo")}</div>
      {isLoggedIn && (
        <div style={{ display: "flex" }}>
          <button style={buttonStyles}>{uppercaseString("Filmy")}</button>
          <button style={buttonStyles}>{uppercaseString("Seriale")}</button>
          <button style={buttonStyles}>{uppercaseString("Wyloguj")}</button>
        </div>
      )}
    </nav>
  );
};

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#282c34",
  padding: "10px 20px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.7)",
};

const logoStyles = {
  fontWeight: "bold",
  fontSize: "24px",
  color: "#fff",
};

const buttonStyles = {
  margin: "0 10px",
  padding: "5px 15px",
  backgroundColor: "#7fb5c3",
  border: "none",
  borderRadius: "7px",
  cursor: "pointer",
  color: "#282c34",
  fontWeight: "bold",
};

export default Navbar;
