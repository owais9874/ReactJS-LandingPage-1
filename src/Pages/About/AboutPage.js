import React from "react";
import Navbar from "../../MyComponents/Navbar/Navbar";
import Footer from "../../MyComponents/Footer/Footer";
import Videos from "../../MyComponents/VideosSection/Videos";
import Contact from "../../MyComponents/ContactUs/Contact";
import Testimonial from "../../MyComponents/Testimonial/Testimonial";
import About from "../../MyComponents/About/About";

export default function AboutPage() {
  return (
    <>
      <div className="aboutpage">
        <Navbar />
        <About />
        <Videos />
        <Contact />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
