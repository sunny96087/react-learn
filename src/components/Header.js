import React from "react";
import { Component } from "react";

class Header extends Component {
  render() {
    const mystyle = {
      padding: "24px 12px",
      backgroundColor: "#bac",
    };
    return (
      <header style={mystyle}>
        <h1>Wlcome to React App</h1>
      </header>
    );
  }
}

export default Header;
