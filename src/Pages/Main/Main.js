import React from "react";

// import Navbar from '../../MyComponents/Navbar/Navbar';
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
import logoMain from "../../assist/images/logo1.png";

// import Banner from '../../MyComponents/Banners/Banner';
import videoBg from "../../assist/video/banner.mp4";

// import Patner from '../../MyComponents/Patners/Patner';
import brand1img from "../../assist/images/brand1.jpg";
import brand2img from "../../assist/images/brand2.jpg";
import brand3img from "../../assist/images/brand3.jpg";
import brand4img from "../../assist/images/brand4.jpg";
import brand5img from "../../assist/images/brand5.png";
import brand6img from "../../assist/images/brand8.png";

// import About from '../../MyComponents/About/About';
import Aboutimg0 from "../../assist/images/about12.png";
import Aboutimg1 from "../../assist/images/about13.png";
import Aboutimg2 from "../../assist/images/about11.png";
import Aboutimg3 from "../../assist/images/about22.png";

// import Service from '../../MyComponents/Services/Service';

// import Portfolio from '../../MyComponents/Portfolio/Portfolio';
import Folioimg1 from "../../assist/images/portfolio1.png";
import Folioimg2 from "../../assist/images/portfolio2.png";
import Folioimg3 from "../../assist/images/portfolio3.png";
import Folioimg4 from "../../assist/images/portfolio4.png";
import Folioimg5 from "../../assist/images/portfolio5.png";
import Folioimg6 from "../../assist/images/portfolio6.png";
import Folioimg7 from "../../assist/images/portfolio7.png";
import Folioimg8 from "../../assist/images/portfolio8.png";
import Folioimg9 from "../../assist/images/portfolio9.png";

// import Blog from '../../MyComponents/Blogs/Blog';
import blogs1img from "../../assist/images/blog1.png";
import blogs2img from "../../assist/images/blog2.png";

// import Videos from '../../MyComponents/VideosSection/Videos';
import videoSec from "../../assist/video/video.mp4";

// import Contact from '../../MyComponents/ContactUs/Contact';
// import Testimonial from '../../MyComponents/Testimonial/Testimonial';
import testimonial1 from "../../assist/images/user1.png";
import testimonial2 from "../../assist/images/user2.png";
import testimonial3 from "../../assist/images/user3.png";

// import Footer from '../../MyComponents/Footer/Footer';

export default function Main() {
  return (
    <>
      <Navbar img2={logoMain} />

      <div className="Section-Banner">
        <Banner
          bannreVideo={videoBg}
          bannertxt1="HOME PHOTOGRAPHY"
          bannertxt2="We Love To Capture The Best Memory !"
          bannerbtn="View More"
        />
      </div>

      <div className="Section-Patners">
        <Patner
          patner1={brand1img}
          patner2={brand2img}
          patner3={brand3img}
          patner4={brand4img}
          patner5={brand5img}
          patner6={brand6img}
        />
      </div>

      <div className="Section-About">
        <About
          imgabout0={Aboutimg0}
          imgabout1={Aboutimg1}
          imgabout2={Aboutimg2}
          bannerbtn="View More"
          imgabout3={Aboutimg3}
        />
      </div>

      <div className="Section-Service">
        <Service />
      </div>

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

      <div className="Section-Blogs">
        <Blog blogs1={blogs1img} blogs2={blogs2img} />
      </div>

      <div className="Section-Footer">
        <Footer searchbtntxt="SEND" />
      </div>
    </>
  );
}

// export default  Main