import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../../molecules/navLinks";
import "./style.css";

export function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <h2>Template</h2>
      </Link>
      <div className="desktop-link">
        <NavLinks />
      </div>
    </div>
  );
}
