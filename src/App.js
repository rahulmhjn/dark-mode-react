import React from "react";
import { Button } from "antd";
import "./App.css";
import { useDarkMode } from "./customHooks/ThemeHook";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <div
      style={{
        padding: "10px 60px 10px 60px",
        backgroundColor: darkMode && "#282c34",
      }}
    >
      <h1 style={{ color: darkMode && "white" }}>
        {darkMode ? "Dark Theme" : "Light Theme"}
      </h1>
      <p style={{ color: darkMode && "white" }}>Wow this is awesome!</p>
      <Button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          color: darkMode && "white",
          backgroundColor: darkMode && "#db7093",
        }}
      >
        {darkMode ? "Select Light Theme" : "Select Dark Theme"}
      </Button>
    </div>
  );
};

export default App;
