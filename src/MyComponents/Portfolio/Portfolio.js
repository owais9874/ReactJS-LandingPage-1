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
              <div className="folio-img">
                <div className="col-md-12  col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio1} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12  col-12">
                  <div className="portfolio-image center-img">
                    <img src={portfolioData.folio2} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12  col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio3} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="folio-img column2-img">
                <div className="col-md-12 col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio4} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio5} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio6} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="folio-img">
                <div className="col-md-12 col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio7} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio8} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <div className="portfolio-image">
                    <img src={portfolioData.folio9} alt="" />
                    <div className="folio-txt-icon">
                      <div className="folio-icon">
                        <button>
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <div className="folio-txt">
                        <h2>
                          <button>Magic Moments Photo!</button>
                        </h2>
                        <span>Date: 16 January 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="folio-btn">
            <button className="btn search-btn">{portfolioData.folioBtn}</button>
          </div>
        </div>
      </section>
    </>
  );
}
