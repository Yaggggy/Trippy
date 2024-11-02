import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Trippy</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat-room">Social</Link>
      </nav>
      <Link to="/trips" className="cta-button">
        Explore Now
      </Link>
    </header>
  );
}

export default Header;
