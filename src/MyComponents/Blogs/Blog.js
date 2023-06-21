import React from "react";
import "./Blog.css";
import { blogsData } from "../../Data/blogsData";


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
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="blog-image">
                <img src={blogsData.blog1} alt="" />
                <div className="publish-date">
                  <span>jan</span>
                  <h3>20</h3>
                  <span>2023</span>
                </div>
              </div>
              <div className="blog-type">
                <p>{blogsData.blogType1}</p>
                <h3 className="blog-title">
                  <a href="#blog">{blogsData.blogTitle1}</a>
                </h3>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="blog-image">
                <img src={blogsData.blog2} alt="" />
                <div className="publish-date">
                  <span>jan</span>
                  <h3>20</h3>
                  <span>2023</span>
                </div>
              </div>
              <div className="blog-type">
                <p>{blogsData.blogType2}</p>
                <h3 className="blog-title">
                  <a href="#blog">{blogsData.blogTitle2}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
