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

import testimonial1 from "../../assist/images/user1.png";
import testimonial2 from "../../assist/images/user2.png";
import testimonial3 from "../../assist/images/user3.png";

export default function Main() {
  return (
    <>
      <Navbar />
      <Banner />
      <Patner />
      <About />
      <Service />
      <Portfolio />

      <div className="Section-vid-cont-testi">
        <Videos />
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
