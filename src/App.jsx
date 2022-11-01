import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import { Navbar } from "./components";
import { About, Blog, Contact, Intro, Project } from "./pages";

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
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
