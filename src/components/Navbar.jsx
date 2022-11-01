import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="div--logo">
          <Link to="/">
            <img
              src={"/images/Logo.svg"}
              alt="My logo"
              className="logo animate__animated animate__flip animate__slow animate__infinite"
            />
          </Link>
        </div>
        <div className="div--content">
          <ul className="nav--ul">
            <li className="nav--li">
              <Link to="/Intro">Intro</Link>
            </li>
            <li className="nav--li">
              <Link to="/Project">Projects</Link>
            </li>
            <li className="nav--li">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="nav--li">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
