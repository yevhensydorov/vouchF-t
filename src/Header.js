import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="App-header">
      <a href="/" className="logo">
        Hatch
      </a>
      <Navbar />
      <button className="logout-button">Log Out</button>
    </header>
  );
};

export default Header;
