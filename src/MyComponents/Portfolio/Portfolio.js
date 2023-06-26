import React from "react";
import "./Portfolio.css";
import { portfolioData } from "../../Data/portfolioData";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="section-heading">PORTFOLIO</div>
              <h2>Our Best Creation Where We Make The Photograph Alive.</h2>
            </div>
          </div>
          <div className="all-folio-img">
            <div className="row">
              {portfolioData.map((folio) => (
                <div className="col-md-4  col-12">
                  <div className="portfolio-image" key={folio.id}>
                    <img src={folio.folioImg} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>{folio.hoverIcon}</button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>{folio.hoverTitle}</button>
                        </h2>
                        <span>{folio.hoverDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="folio-btn">
            <button className="btn search-btn">See More</button>
          </div>
        </div>
      </section>
    </>
  );
}
