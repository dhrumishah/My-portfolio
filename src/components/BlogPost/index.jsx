import React from "react";

const BlogPost = ({ title, imgsrc, excerpt, postLink }) => {
  return (
    <div className="blog-container">
      <div className="blog--image">
        <img src={`/images/blog/${imgsrc}`} className="blog-1--image"></img>
      </div>
      <div className="blog--writing">
        <h2 className="blog--title">{title}</h2>
        <p>{excerpt}</p>
        <div className="blog--readmore">
          <a href={postLink} target="_blank">
            <p>Read more...</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
