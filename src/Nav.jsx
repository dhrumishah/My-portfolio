import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Logo from "./Logo.svg";

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <div className="div--logo">
          <img
            src={Logo}
            alt="My logo"
            className="logo animate__animated animate__flip animate__slow animate__infinite"
          />
        </div>
        <div className="div--content">
          <ul className="nav--ul">
            <li className="nav--li">About</li>
            <li className="nav--li">Projects</li>
            <li className="nav--li">Blog</li>
            <li className="nav--li">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
