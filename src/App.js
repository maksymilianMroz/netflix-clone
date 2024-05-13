// import bezpośrednio z react
import { useState } from "react";

// komponenty
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";

// style
import "./App.css";

// funkcje/zmienne/itp.

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
    } else {
      alert("Nieprawidłowe dane logowania");
    }
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} />
      <div style={{ padding: "20px" }}>
        {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Home />}
      </div>
    </div>
  );
}

export default App;
