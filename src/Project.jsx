import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Github from "./images/github.svg";

export default function Project() {
  function notesAppClick() {
    window.open("https://github.com/dhrumishah/NotesApp");
  }
  function notesDeployedClick() {
    window.open("https://notesapp-dhrumishah.netlify.app/");
  }
  return (
    <div className="project--div">
      <h1 className="project--title">Projects I have built</h1>
      <div className="project--container">
        <div className="project--img" onClick={notesDeployedClick}>
          <div className="project--overlay"></div>
        </div>
        <div className="project--desc">
          <h2 className="desc--title" onClick={notesAppClick}>
            Notes App
          </h2>
          <div className="desc--para">
            <p>
              A straightforward React-based Notes app that lets you edit
              existing notes or create new ones
            </p>
            <img
              className="project--links"
              src={Github}
              onClick={notesAppClick}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
