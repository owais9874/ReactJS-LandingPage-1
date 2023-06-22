import React from "react";
import "./Patner.css";
import { patnerData } from "../../Data/patnerData";

export default function Patner() {
  return (
    <section className="patners">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <div className="owl-carousel owl-carousel-patner">
              <div className="item">
                <div className="patner-image">
                  <img src={patnerData.patnerBrand1} alt="" />
                </div>
              </div>
              <div className="item">
                <div className="patner-image">
                  <img src={patnerData.patnerBrand2} alt="" />
                </div>
              </div>
              <div className="item">
                <div className="patner-image">
                  <img src={patnerData.patnerBrand3} alt="" />
                </div>
              </div>
              <div className="item">
                <div className="patner-image">
                  <img src={patnerData.patnerBrand4} alt="" />
                </div>
              </div>
              <div className="item">
                <div className="patner-image">
                  <img src={patnerData.patnerBrand5} alt="" />
                </div>
              </div>
              <div className="item">
                <div className="patner-image">
                  <img src={patnerData.patnerBrand6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
