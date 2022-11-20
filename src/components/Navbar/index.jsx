import React from "react";
import './index.css'
const navLinks = ["Intro", "Projects", "Blog", "Contact"];

export default function Navbar(props) {
  function onClickRef(e) {
    e.preventDefault()
    let key = e.target.innerText+"Ref"
    props.refs[key].current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="nav">
      <div className="container">
        <div className="div--logo">
            <img
              src={"/images/Logo.svg"}
              alt="My logo"
              className="animate__animated animate__flip animate__slow animate__infinite"
            />
        </div>
        <nav className="nav-items">
          {navLinks.map((item) => (
            <a key={item} className="nav-item" onClick={onClickRef}>
              <span>{item}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
