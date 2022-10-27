import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Logo from "./Logo.svg";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate("/About");

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
            <li
              className="nav--li"
              onClick={() => {
                navigate("/Intro");
              }}
            >
              About
            </li>
            <li
              className="nav--li"
              onClick={() => {
                navigate("/Project");
              }}
            >
              Projects
            </li>
            <li
              className="nav--li"
              onClick={() => {
                navigate("/Blog");
              }}
            >
              Blog
            </li>
            <li
              className="nav--li"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
