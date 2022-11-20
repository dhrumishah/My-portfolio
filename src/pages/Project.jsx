import React from "react";

export default function Project() {
  function notesAppClick() {
    window.open("https://github.com/dhrumishah/NotesApp");
  }
  function notesDeployedClick() {
    window.open("https://notesapp-dhrumishah.netlify.app/");
  }
  function memeGenClick() {
    window.open("https://github.com/dhrumishah/MemeGenerator");
  }
  function memeGenDeployedClick() {
    window.open("https://memegenerator-dhrumishah.netlify.app/");
  }
  function airBnbClick() {
    window.open("https://github.com/dhrumishah/AirBnb-clone-app");
  }
  function airBnbDeployedClick() {
    window.open("https://effulgent-gelato-31ff50.netlify.app/");
  }
  return (
    <>
      <div className="project--div">
        <h1 className="project--title">Projects I have built</h1>
        <div className="project--container">
          <div className="project--img" onClick={notesDeployedClick}>
            <div className="project--overlay"></div>
          </div>
          <div className="project--desc">
            <h2 className="desc--title" onClick={notesAppClick}>
              Notes App
            </h2>
            <div className="desc--para">
              <p>
                A straightforward React-based Notes app that lets you edit
                existing notes or create new ones
              </p>
              <img
                className="project--links"
                src={"/images/social/github.svg"}
                onClick={notesAppClick}
              />
            </div>
          </div>
        </div>
        <div className="project--container">
          <div className="project--desc">
            <h2 className="desc--title-2" onClick={memeGenClick}>
              Meme Generator
            </h2>
            <div className="desc--para-2">
              <p>
                A Meme Generator App made with ReactJS. It basically generates a
                random meme when you apply top and bottom text.
              </p>
              <img
                className="project--links-2"
                src={"/images/social/github.svg"}
                onClick={memeGenClick}
              />
            </div>
          </div>
          <div className="project--img-2" onClick={memeGenDeployedClick}>
            <div className="project--overlay"></div>
          </div>
        </div>
        <div className="project--container">
          <div className="project--img-3" onClick={airBnbDeployedClick}>
            <div className="project--overlay"></div>
          </div>
          <div className="project--desc">
            <h2 className="desc--title" onClick={airBnbClick}>
              AirBnB Clone
            </h2>
            <div className="desc--para-3">
              <p>A basic clone app of AirBnb website. It's made with React.</p>
              <img
                className="project--links"
                src={"/images/social/github.svg"}
                onClick={airBnbClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
