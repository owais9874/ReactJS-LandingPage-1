import React from "react";
import "./Blog.css";
import { blogsData } from "../../Data/blogsData";
import SingleBlog from "./SingleBlog/SingleBlog";

export default function Blog() {
  return (
    <>
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="section-heading">BLOG & HISTORY</div>
              <h2>
                Get The Latest Articles About The Different Aspects Photography
              </h2>
            </div>
          </div>
          <div className="blog-body">
            {blogsData.length > 0 && (
              <div className="blog--bodyContainer">
                {blogsData.slice(0, 3).reverse().map((blog) => (
                    <SingleBlog
                      title={blog.title}
                      type={blog.type}
                      image={blog.image}
                      url={blog.url}
                      key={blog.id}
                      id={blog.id}
                    />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
