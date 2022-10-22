import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Project_1 from "./Project-1.jpg";

export default function Project() {
  return (
    <div className="project--div">
      <h1 className="project--title">Projects I have built</h1>
      <div className="project--container">
        <div className="project--img">
          <div className="project--overlay"></div>
        </div>
        <div className="project--desc">
          <h2 className="desc--title">Notes App</h2>
          <div className="desc--para">
            <p>
              A straightforward React-based Notes app that lets you edit
              existing notes or create new ones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
