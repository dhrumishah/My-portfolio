import React from 'react'

const BlogPost = (props) => {
  return (
    <div className="blog-container">
    <div className="blog--image">
      <img src={props.imgsrc} className="blog-1--image"></img>
    </div>
    <div className="blog--writing">
      <h2 className="blog--title">{props.title}</h2>
      <p>
        {props.excerpt}
      </p>
      <div className="blog--readmore">
        <a href={props.postLink} target="_blank">
        <p>Read more...</p>
        </a>
      </div>
    </div>
  </div>
  )
}

export default BlogPost
