import React from "react";
import { BlogPost } from "../components";

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
          imgsrc="https://dhrumishah.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1652698703528%2FKZI074Zfh.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
        <BlogPost
          title="Conditional Statements in JavaScript"
          excerpt="Have you ever wondered how a computer game or program makes decisions? Or does it allow the user to decide what occurs next? There are various ways that we, as programmers, can control the flow or execution of a program today, we'll go through the Co..."
          postLink="https://dhrumishah.hashnode.dev/conditional-statements-in-javascript"
          imgsrc="https://dhrumishah.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1652076608202%2FHpO-JfNDM.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
        <BlogPost
          title="JavaScript Data Types"
          excerpt="Hey readers! This is a blog on JavaScript Data Types. I have tried to cover all the possible points in this blog.."
          postLink="https://dhrumishah.hashnode.dev/javascript-data-types"
          imgsrc="https://dhrumishah.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1651805673512%2F6hR5N6Okn.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
      </div>
    </>
  );
}
