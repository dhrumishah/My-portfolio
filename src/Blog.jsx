import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Nav from "./Nav";
import Blog_1 from "./images/blog-1.jpg";
import Blog_2 from "./images/blog-2.jpg";
import Blog_3 from "./images/blog-3.jpg";
import RightArrows from "./images/right-arrow.svg";
import LeftArrows from "./images/left-arrow.svg";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  function readMore() {
    window.open("https://dhrumishah.hashnode.dev/javascript-functions");
  }
  function readMoreBlog2() {
    window.open(
      "https://dhrumishah.hashnode.dev/conditional-statements-in-javascript"
    );
  }
  function readMoreBlog3() {
    window.open("https://dhrumishah.hashnode.dev/javascript-data-types");
  }
  return (
    <>
      <Nav />
      <div>
        <h1 className="blog--title">My writings</h1>
        <div className="blog-container">
          <div className="blog--image">
            <img src={Blog_1} className="blog-1--image"></img>
          </div>
          <div className="blog--writing">
            <h2 className="blog--title">JavaScript Functions</h2>
            <p>
              Functions are one of the major pillars of JavaScript. Many
              programming languages support various paradigms, the most
              well-known of which being Object-Oriented and Functional
              Programming. Although JavaScript can be both. Today in this blog,
              we will un...
            </p>
            <div className="blog--readmore">
              <p onClick={readMore}>Read more...</p>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog--image">
            <img src={Blog_2} className="blog-1--image"></img>
          </div>
          <div className="blog--writing">
            <h2 className="blog--title">
              Conditional Statements in JavaScript
            </h2>
            <p>
              Have you ever wondered how a computer game or program makes
              decisions? Or does it allow the user to decide what occurs next?
              There are various ways that we, as programmers, can control the
              flow or execution of a program today, we'll go through the Co...
            </p>
            <div className="blog--readmore">
              <p onClick={readMoreBlog2}>Read more...</p>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog--image">
            <img src={Blog_3} className="blog-1--image"></img>
          </div>
          <div className="blog--writing">
            <h2 className="blog--title">JavaScript Data Types</h2>
            <p>
              Hey readers! This is a blog on JavaScript Data Types. I have tried
              to cover all the possible points in this blog...
            </p>
            <div className="blog--readmore">
              <p onClick={readMoreBlog3}>Read more...</p>
            </div>
          </div>
        </div>
        <div className="about--arrows">
          <img
            className="left--arrows"
            onClick={() => {
              navigate("/Project");
            }}
            src={LeftArrows}
          ></img>
          <img
            className="right--arrows"
            onClick={() => {
              navigate("/Contact");
            }}
            src={RightArrows}
          ></img>
        </div>
      </div>
    </>
  );
}
