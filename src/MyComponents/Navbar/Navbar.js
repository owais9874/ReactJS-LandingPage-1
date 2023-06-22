import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { headerData } from "../../Data/headerData";

//===== Menu Icon
import { FaHome, FaUser, FaSlackHash, FaHistory, FaPhoneAlt } from "react-icons/fa";
import { GrMultiple } from "react-icons/gr";
import { FcServices } from "react-icons/fc";

//===== Social Icon
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

//===== Mobile Menu Bar Icon
import { BsList, BsX } from "react-icons/bs";


const Navbar = () => {

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav header-section">

        {/* Logo part */}
        <div className="logo">
          <a href="/">
            <img src={headerData.mainLogo} alt="" />
          </a>
        </div>

        {/* Menu part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
          // onClick={() => setShowMediaIcons(true)}
        >
          <ul className="navbar-menu">
            <li onClick={() => setShowMediaIcons(false)}>
              <a href="#home" className="active">
                <FaHome /> Home
              </a>
            </li>
            <li onClick={() => setShowMediaIcons(false)}>
              <a href="#about">
                <FaUser /> About
              </a>
            </li>
            <li className="dropdown" onClick={() => setShowMediaIcons(true)}>
              <a
                href="#service"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <FaSlackHash /> Services
              </a>
              <ul
                className="dropdown-menu menu-link"
                onClick={() => setShowMediaIcons(false)}
              >
                <li>
                  <a href="#service">
                    <FcServices /> Our Service
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <GrMultiple /> Portfolio
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a href="#blogs">
                    <FaHistory /> History
                  </a>
                </li>
              </ul>
            </li>
            <li onClick={() => setShowMediaIcons(false)}>
              <a href="#contact">
                <FaPhoneAlt /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Mobile menu bar */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/owais9874" target="_page">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/owais9874" target="_page">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/owais9874" target="_page">
                <BsTwitter />
              </a>
            </li>
          </ul>

          {/* Mobile menu bar part */}
          <div className="mobile-menu-bar">
            <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {showMediaIcons ? <BsX /> : <BsList />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
