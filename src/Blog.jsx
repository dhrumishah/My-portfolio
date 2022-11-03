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
import BlogPost from "./components/BlogPost";

export default function Blog() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="blog--section">
        <h1 className="blog--title">My writings</h1>
        <BlogPost
        title="Javascript Functions"
        excerpt="Functions are one of the major pillars of JavaScript. Many programming languages support various paradigms, the most well-known of which being Object-Oriented and Functional Programming. Although JavaScript can be both. Today in this blog, we will un..."
        postLink="https://dhrumishah.hashnode.dev/javascript-functions"
        imgsrc={Blog_1}
        />

        <BlogPost
        title="Conditional Statements in JavaScript"
        excerpt="Have you ever wondered how a computer game or program makes decisions? Or does it allow the user to decide what occurs next? There are various ways that we, as programmers, can control the flow or execution of a program today, we'll go through the Co..."
        postLink="https://dhrumishah.hashnode.dev/conditional-statements-in-javascript"
        imgsrc={Blog_2}
        />

        <BlogPost
        title="Conditional Statements in JavaScript"
        excerpt="Hey readers! This is a blog on JavaScript Data Types. I have tried to cover all the possible points in this blog.."
        postLink="https://dhrumishah.hashnode.dev/javascript-data-types"
        imgsrc={Blog_3}
        />

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
