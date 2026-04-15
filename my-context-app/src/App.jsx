import { useState } from "react";
import Dashboard from "../Dashboard";
import Profile from "../Profile";
import ThemeContext from "../ThemeContext";
import "./App.css";

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <center className={theme}>
      <h1>Theme Context App</h1>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <Dashboard />
        <Profile />
      </ThemeContext.Provider>
    </center>
  );
}

export default App;