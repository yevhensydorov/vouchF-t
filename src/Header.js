import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="App-header">
      <a href="/" className="logo">
        <img
          src="//static1.squarespace.com/static/5937ac091b10e34a80c37c1f/t/5939c43503596e11e434e66b/1544520492504/?format=15w"
          alt=""
        />
      </a>
      <Navbar />
      <button className="button">Log Out</button>
    </header>
  );
};

export default Header;
