import React from "react";
import "./About.css";
import { aboutData } from "../../Data/aboutData";

export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="about-image">
                      <img src={aboutData.fade1} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="about-image">
                      <img src={aboutData.fade2} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="about-image">
                      <img src={aboutData.fade3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="about-txt">
                <h2>{aboutData.aboutTxt}</h2>
                <div className="about-details">
                  <p>{aboutData.aboutDetails}</p>
                  <a href="#about">
                    <button className="btn search-btn">
                      {aboutData.aboutBtn}
                    </button>
                  </a>
                  <img src={aboutData.fixImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
