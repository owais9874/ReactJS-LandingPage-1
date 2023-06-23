import React from "react";
import "./Patner.css";
import { patnerData } from "../../Data/patnerData";

import Slider from "react-slick";

export default function Patner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (
    <section className="patners">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <Slider {...settings}>
              {patnerData.map((patner) => (
                <div className="single-patner" key={patner.id}>
                  <div className="patner-image">
                    <img src={patner.Brand} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
