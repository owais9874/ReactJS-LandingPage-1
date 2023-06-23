import React from "react";
import "./About.css";
import { aboutData } from "../../Data/aboutData";

import Slider from "react-slick";

export default function About() {
  const settings = {
    fade: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <Slider {...settings}>
                <div className="about-image">
                  <img src={aboutData.fade1} alt="" />
                </div>
                <div className="about-image">
                  <img src={aboutData.fade2} alt="" />
                </div>
                <div className="about-image">
                  <img src={aboutData.fade3} alt="" />
                </div>
              </Slider>
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
