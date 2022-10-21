import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import gif from "./svg_1.gif";

export default function Intro() {
  return (
    <div className="intro--div">
      <h1 className="intro--title">Readme.md</h1>
      <div className="intro--section">
        <div className="intro--gif">
          <img src={gif} />
        </div>
        <div className="intro--content">
          <p className="intro--para">
            I am a frontend developer who loves to play with JavaScript and
            React. I love playing with CSS, but, hate it when it starts jiggling
            my head. I enjoy writing technical blogs and also educate people on
            Twitter through my threads. I possess excellent skills in CSS and
            JavaScript.
          </p>
          <p className="intro--para">
            These days, I'm involved in building projects to sharpen up my
            frontend skills.
          </p>
          <p className="intro--para">
            I love contributing to open source projects.
          </p>
          <h3 className="intro--tech">Technologies I have worked with:</h3>
          <ul className="intro--techStack">
            <li className="intro--li">HTML</li>
            <li className="intro--li">CSS3</li>
            <li className="intro--li">JavaScript</li>
            <li className="intro--li">Tailwind CSS</li>
            <li className="intro--li">ReactJS</li>
            <li className="intro--li">Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
