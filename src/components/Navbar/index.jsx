import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css'
const navLinks = ["Intro", "Projects", "Blog", "Contact"];

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="div--logo">
          <Link to="/">
            <img
              src={"/images/Logo.svg"}
              alt="My logo"
              className="animate__animated animate__flip animate__slow animate__infinite"
            />
          </Link>
        </div>
        <div className="nav-items">
          {navLinks.map((item) => (
            <NavLink key={item} className="nav-item" to={`/${item}`}>
              {({ isActive }) => (
                <span className={isActive ? "active" : undefined}>{item}</span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
