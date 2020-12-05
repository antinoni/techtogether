import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="top-nav">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Notifications</li>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
