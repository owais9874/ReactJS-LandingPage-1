import React from "react";

import {
  Navbar,
  Banner,
  Patner,
  About,
  Service,
  Portfolio,
  Blog,
  Videos,
  Contact,
  Testimonial,
  Footer,
} from "../../MyComponents";

import Aboutimg0 from "../../assist/images/about12.png";
import Aboutimg1 from "../../assist/images/about13.png";
import Aboutimg2 from "../../assist/images/about11.png";
import Aboutimg3 from "../../assist/images/about22.png";

import Folioimg1 from "../../assist/images/portfolio1.png";
import Folioimg2 from "../../assist/images/portfolio2.png";
import Folioimg3 from "../../assist/images/portfolio3.png";
import Folioimg4 from "../../assist/images/portfolio4.png";
import Folioimg5 from "../../assist/images/portfolio5.png";
import Folioimg6 from "../../assist/images/portfolio6.png";
import Folioimg7 from "../../assist/images/portfolio7.png";
import Folioimg8 from "../../assist/images/portfolio8.png";
import Folioimg9 from "../../assist/images/portfolio9.png";

import videoSec from "../../assist/video/video.mp4";

import testimonial1 from "../../assist/images/user1.png";
import testimonial2 from "../../assist/images/user2.png";
import testimonial3 from "../../assist/images/user3.png";

export default function Main() {
  return (
    <>
      <Navbar />
      <Banner />
      <Patner />

      <div className="Section-About">
        <About
          imgabout0={Aboutimg0}
          imgabout1={Aboutimg1}
          imgabout2={Aboutimg2}
          bannerbtn="View More"
          imgabout3={Aboutimg3}
        />
      </div>

      <Service />

      <div className="Section-Portfolio">
        <Portfolio
          imgportfolio1={Folioimg1}
          imgportfolio2={Folioimg2}
          imgportfolio3={Folioimg3}
          imgportfolio4={Folioimg4}
          imgportfolio5={Folioimg5}
          imgportfolio6={Folioimg6}
          imgportfolio7={Folioimg7}
          imgportfolio8={Folioimg8}
          imgportfolio9={Folioimg9}
          bannerbtn="See More"
        />
      </div>

      <div className="Section-vid-cont-testi">
        <Videos videoSection={videoSec} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-12">
              <Contact />
            </div>
            <div className="col-md-7 col-12">
              <Testimonial
                testiUser1={testimonial1}
                testiUser2={testimonial2}
                testiUser3={testimonial3}
              />
            </div>
          </div>
        </div>
      </div>

      <Blog />
      <Footer />
    </>
  );
}
