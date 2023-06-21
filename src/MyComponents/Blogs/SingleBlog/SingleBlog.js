import React from "react";

function SingleBlog({ id, image, title, type, url }) {
  return (
    <div className="singleBlog" key={id}>
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
    </div>
  );
}

export default SingleBlog;
