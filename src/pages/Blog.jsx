import React from "react";
import { Arrows, BlogPost } from "../components";

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
        <BlogPost
          title="Javascript Functions"
          excerpt="Functions are one of the major pillars of JavaScript. Many programming languages support various paradigms, the most well-known of which being Object-Oriented and Functional Programming. Although JavaScript can be both. Today in this blog, we will un..."
          postLink="https://dhrumishah.hashnode.dev/javascript-functions"
          imgsrc="blog-1.jpg"
        />
        <BlogPost
          title="Conditional Statements in JavaScript"
          excerpt="Have you ever wondered how a computer game or program makes decisions? Or does it allow the user to decide what occurs next? There are various ways that we, as programmers, can control the flow or execution of a program today, we'll go through the Co..."
          postLink="https://dhrumishah.hashnode.dev/conditional-statements-in-javascript"
          imgsrc="blog-2.jpg"
        />
        <BlogPost
          title="Conditional Statements in JavaScript"
          excerpt="Hey readers! This is a blog on JavaScript Data Types. I have tried to cover all the possible points in this blog.."
          postLink="https://dhrumishah.hashnode.dev/javascript-data-types"
          imgsrc="blog-3.jpg"
        />
        <Arrows prev="/Project" next="/Contact" />
      </div>
    </>
  );
}
