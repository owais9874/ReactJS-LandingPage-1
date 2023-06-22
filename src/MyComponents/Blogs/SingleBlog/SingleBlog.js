import React from "react";
import "../SingleBlog/SingleBlog.css"

function SingleBlog({ id, image, title, type, url }) {
  return (
    <a href={url} className="singleBlog" key={id}>
      <div className="blog-image">
        <img src={image} alt="" />
        <div className="publish-date">
          <span>jan</span>
          <h3>20</h3>
          <span>2023</span>
        </div>
      </div>
      <div className="blog-type">
        <p>{type}</p>
        <h3 className="blog-title">
          <a href={url}>{title}</a>
        </h3>
      </div>
    </a>
  );
}

export default SingleBlog;
