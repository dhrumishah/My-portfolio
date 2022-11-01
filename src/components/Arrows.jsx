import React from "react";
import { Link } from "react-router-dom";

const Arrows = ({ prev, next }) => {
  return (
    <div className="about--arrows">
      <Link to={prev}>
        <img className="left--arrows" src={"/images/left-arrow.svg"} />
      </Link>
      <Link to={next}>
        <img className="right--arrows" src={"/images/right-arrow.svg"} />
      </Link>
    </div>
  );
};

export default Arrows;
