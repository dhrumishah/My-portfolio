import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import About from "./About";
import Intro from "./Intro";
import Project from "./Project";
import Blog from "./Blog";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
