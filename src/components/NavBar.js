import React from "react";
import "../style.css"

const NavBar = () => {

  return (
    <nav className="navStyle">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
