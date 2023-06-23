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
              <Testimonial />
            </div>
          </div>
        </div>
      </div>

      <Blog />
      <Footer />
    </>
  );
}
