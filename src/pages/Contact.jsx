import React from "react";
import Reveal from 'react-reveal/Reveal';

export default function Contact() {
  function twtClick() {
    window.open("https://twitter.com/deetwts");
  }

  function hashClick() {
    window.open("https://dhrumishah.hashnode.dev/");
  }
  function gitClick() {
    window.open("https://github.com/dhrumishah");
  }
  function linkedClick() {
    window.open("https://www.linkedin.com/in/dhrumi-shah-a35b751b9/");
  }
  return (
    <>
      <div>
        <h1 className="contact--title">Looking to Collaborate? Let's Talk!</h1>
        <Reveal effect="animate__animated animate__zoomInLeft">
          <div className="contact--para">
            <p>
              I enjoy working on React projects, and I can create a beautiful
              React website for you. I'm eager to work on the frontend component
              of it in partnership with a business or individual. Additionally,
              I'm interested in freelancing. Let's discuss more!
            </p>
          </div>
        </Reveal>
        <div className="contact--links">
          <p>
            Shoot me an email on{" "}
            <a
              href="mailto:dhrumishah951@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="jsx-8b75a9ccf5c40d44 mr-1 inline-flex items-center space-x-1 text-gray-300 transition duration-200 gradient-underline no-underline text-blue-400 hover:text-blue-300 text-blue-400 hover:!text-blue-300"
            >
              <span className="jsx-8b75a9ccf5c40d44">
                dhrumishah951@gmail.com
              </span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </p>
          <div className="contact--socials">
            <Reveal effect="animate__animated animate__bounceInDown">
              <img
                src={"/images/social/twitter.svg"}
                onClick={twtClick}
              />
            </Reveal>
            <Reveal effect="animate__animated animate__bounceInUp">
              <img
                src={"/images/social/hashnode.svg"}
                onClick={hashClick}
              />
            </Reveal>
            <Reveal effect="animate__animated animate__bounceInDown">
              <img
                src={"/images/social/github.svg"}
                onClick={gitClick}
              />
            </Reveal>
            <Reveal effect="animate__animated animate__bounceInUp">
              <img
                src={"/images/social/linkedin.svg"}
                onClick={linkedClick}
              />
            </Reveal>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-social">
            <div className="animate__animated animate__flash animate__infinite animate__slow">
              <a href="http://twitter.com/deetwts">
                <img
                  src="https://img.shields.io/twitter/follow/deetwts?label=Twitter&amp;logo=twitter&amp;style=for-the-badge"
                  alt="Twitter badge"
                />
              </a>
            </div>
            <div className="animate__animated animate__flash animate__infinite animate__slow">
              <a href="https://github.com/dhrumishah?tab=followers">
                <img
                  src="https://img.shields.io/github/followers/dhrumishah?label=Followers&amp;logo=GitHub&amp;style=for-the-badge"
                  alt="GitHub badge"
                />
              </a>
            </div>
          </div>
          <p>Copyright © Dhrumi Shah 2022, All rights reserved</p>
        </div>
      </div>
    </>
  );
}
