import React from "react";
import "./Service.css";
import { serviceData } from "../../Data/serviceData";

export default function Service() {
  return (
    <>
      <section id="service" className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="service-heading">OUR SERVICES</div>
            </div>
          </div>
          <div className="all-service">
            <div className="row align-items-center">
              {serviceData.slice(0,8).reverse().map((servTxt) => (
                <div className="col-md-3 col-6">
                  <div className="service1" key={servTxt.id}>
                    <div className="icon">{servTxt.serIcon}</div>
                    <button>{servTxt.servBtn}</button>
                    <p>{servTxt.servText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
