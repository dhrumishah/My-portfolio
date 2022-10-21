import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import About from "./About";
import Intro from "./Intro";
import Project from "./Project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <About />
    <Intro />
    <Project />
  </React.StrictMode>
);
