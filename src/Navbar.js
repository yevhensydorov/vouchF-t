import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu-container">
        <li className="menu-item">
          <a href="/">Your Financial Plan</a>
        </li>
        <li className="menu-item">
          <a href="/">Tips & Blogs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
