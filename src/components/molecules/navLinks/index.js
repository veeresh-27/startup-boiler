import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavLinks() {
  return (
    <div className="nav-link-continer">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default NavLinks;
