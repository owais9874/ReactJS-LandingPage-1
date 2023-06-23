import React from "react";
import "./Testimonial.css";
import { testimonialData } from "../../Data/testimonialData";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
    
  const settings = {
    dots: true,
    infinite: true,
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
    <div id="testimonial" className="testmonial-sec">
      <div className="testimonial-heading">TESTIMONIAL</div>

      <Slider {...settings}>
        {testimonialData.map((test) => (
          <div className="single--testimony" key={test.id}>
            <div className="testimonial-txt">{test.text}</div>
            <div className="testmonial-user">
              <div className="testi-user-img">
                <img src={test.image} alt="" />
              </div>
              <div className="testi-user-name">
                <h5>{test.name}</h5>
                <span>{test.title}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
