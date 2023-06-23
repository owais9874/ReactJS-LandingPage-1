import React from "react";
import "./Banner.css";
import { bannerData } from "../../Data/bannerData";

export default function Banner() {
  return (
    <>
      <section id="home" className="banner">
        <video autoPlay muted loop src={bannerData.bannerVideo} />
        <div className="banner-txt">
          <h3>{bannerData.bannerText1}</h3>
          <h1>{bannerData.bannerText2}</h1>
          <a href={bannerData.btnUrl}>
            <button className="btn search-btn">{bannerData.bannerBtn}</button>
          </a>
        </div>
      </section>
    </>
  );
}
