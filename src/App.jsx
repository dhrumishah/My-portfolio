import React from "react";
import { useRef } from "react";
import { Navbar } from "./components";
import { Home, Blog, Contact, Intro, Project } from "./pages";

export default function App() {
  const IntroRef = useRef(null);
  const ProjectsRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);
  const HomeRef = useRef(null);
  return (
    <div className="App">
      <Navbar refs={{ HomeRef, IntroRef, ProjectsRef, BlogRef, ContactRef }} />
      <div className="ref--div" ref={HomeRef} />
      <Home />
      <div className="ref--div" ref={IntroRef} />
      <Intro />
      <div className="ref--div" ref={ProjectsRef} />
      <Project />
      <div className="ref--div" ref={BlogRef} />
      <Blog />
      <div className="ref--div" ref={ContactRef} />
      <Contact />
    </div>
  );
}
