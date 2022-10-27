import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import About from "./About";
import Intro from "./Intro";
import Project from "./Project";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}
