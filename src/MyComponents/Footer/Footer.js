import React from "react";
import "./Footer.css";

import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { footerData } from "../../Data/footerData";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-col1">
          <div className="footer-title">{footerData.fooHead1}</div>
          <div className="footer-txt footer-link">
            <ul>
              <li>
                <a href={footerData.Url1}>{footerData.link1}</a>
              </li>
              <li>
                <a href={footerData.Url2}>{footerData.link2}</a>
              </li>
              <li>
                <a href={footerData.Url3}>{footerData.link3}</a>
              </li>
              <li>
                <a href={footerData.Url4}>{footerData.link4}</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href={footerData.Url5}>{footerData.link5}</a>
              </li>
              <li>
                <a href={footerData.Url6}>{footerData.link6}</a>
              </li>
              <li>
                <a href={footerData.Url7}>{footerData.link7}</a>
              </li>
              <li>
                <a href={footerData.Url8}>{footerData.link8}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col2">
          <div className="footer-title">{footerData.fooHead2}</div>
          <div className="footer-txt">{footerData.subHeading2}</div>
          <form className="d-flex footer-email">
            <input
              className="form-control email-form me-2"
              type="email"
              placeholder="Enter your Email"
              aria-label="Email"
            />
            <button className="footer-btn search-btn" type="send">
              {footerData.sendBtn}
            </button>
          </form>
        </div>
        <div className="footer-col3">
          <div className="footer-title">{footerData.fooHead3}</div>
          <div className="social-icon">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/owais9874" target="_page">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cadet_owais" target="_page">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/owais9874" target="_page">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/owais9874" target="_page">
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-txt">{footerData.subHeading3}</div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container">
          <p>
            Copyright &copy; {new Date().getFullYear()} <span> React </span> |
            Design By <span> Owais Ali. </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
