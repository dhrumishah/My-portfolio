import React from "react";
import { Arrows } from "../components";

export default function Blog() {
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
      <div className="blog--section">
        <h1 className="blog--title">My writings</h1>
        <div className="blog-container">
          <div className="blog--image">
            <img
              src={"/images/blog/blog-1.jpg"}
              className="blog-1--image"
            ></img>
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
            <img
              src={"/images/blog/blog-2.jpg"}
              className="blog-1--image"
            ></img>
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
            <img
              src={"/images/blog/blog-3.jpg"}
              className="blog-1--image"
            ></img>
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
        <Arrows prev="/Project" next="/Contact" />
      </div>
    </>
  );
}
