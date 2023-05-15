import React, {useState, useEffect} from 'react'
import './Navbar.css'
//===== Menu Icon
import {FaHome, FaUser, FaSlackHash, FaHistory, FaPhoneAlt} from 'react-icons/fa'
import {GrMultiple} from 'react-icons/gr'
import {FcServices} from 'react-icons/fc'

//===== Social Icon
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

//===== Mobile Menu Bar Icon
import { BsList, BsX } from "react-icons/bs";

const Navbar = (props) => {

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 200 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        <nav className='main-nav header-section'>

            {/* Logo part */}
            <div className="logo">
                <a href="/">
                    <img src={props.img2} alt=''/>
                </a>
            </div>

            {/* Menu part */}
            <div 
                className={ showMediaIcons  ? "menu-link mobile-menu-link" : "menu-link" }
                // onClick={() => setShowMediaIcons(true)}
            >
                <ul className="navbar-menu">
                    <li onClick={() => setShowMediaIcons(false)}>
                        <a href="#home" className="active"><FaHome/> Home</a>
                    </li>
                    <li onClick={() => setShowMediaIcons(false)}>
                        <a href="#about"><FaUser/> About</a>  
                    </li>
                    <li className='dropdown' onClick={() => setShowMediaIcons(true)}>
                        <a href="#service" className="dropdown-toggle" data-bs-toggle="dropdown"><FaSlackHash/> Services</a>
                        <ul className="dropdown-menu menu-link" onClick={() => setShowMediaIcons(false)}>
                            <li>
                                <a href="#service"><FcServices/> Our Service</a>
                            </li>
                            <li>
                                <a  href="#portfolio"><GrMultiple/> Portfolio</a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a  href="#history"><FaHistory/> History</a>
                            </li>
                        </ul>
                    </li>
                    <li onClick={() => setShowMediaIcons(false)}>
                        <a href="#contact"><FaPhoneAlt/> Contact</a>
                    </li>
                </ul>
            </div>

            {/* Social Media & Mobile menu bar */}
            <div className="social-media">
                <ul className='social-media-desktop'>
                    <li>
                        <a href='https://www.facebook.com/owais9874' target='_page'><BsFacebook/></a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/owais9874' target='_page'><BsInstagram/></a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/owais9874' target='_page'><BsTwitter/></a>
                    </li>
                </ul>

                {/* Mobile menu bar part */}
                <div className="mobile-menu-bar">
                    <button onClick={()=> setShowMediaIcons(!showMediaIcons)}>
                        {showMediaIcons ? ( <BsX/> ) : ( <BsList/> ) }
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar

// import React from "react";
// import './Navbar.css'
// import PropTypes from 'prop-types';


// export default function Navbar(props) {
//   return (
//     <>
//         <div className="main-header">
//             <div className="container">
//                 <div className="row align-items-center">
//                     <div className="col-md-2 col-sm-6 col-8">
//                         <div className="logoBg">
//                             <a className="navbar-brand header-logo title" href="/">
//                                 <img src={props.img2} alt=''/>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="col-4 mobile">
//                         <div className="header-icons">
//                             <div className="mobile-menu-bar">
//                                 <button><i className="bi bi-list"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 col-sm-6 col-12">
//                         <div className="main-menu mobile-menu">
//                             <div className="mobile">
//                                 <form className="d-flex mobile-search">
//                                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                                     <button className="header-btn search-btn" type="submit">{props.searchbtntxt}</button>
//                                 </form>
//                             </div>
//                             <ul className="navbar-menu">
//                                 <li className="menu-item">
//                                     <a className="menu-link active" aria-current="page" href="#home">{props.menu1}</a>
//                                 </li>
//                                 <li className="menu-item">
//                                     <a className="menu-link" href="#about">{props.menu2}</a>  
//                                 </li>
//                                 <li className="menu-item dropdown">
//                                     <button className="menu-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                                         {props.menu3}
//                                     </button>
//                                     <ul className="dropdown-menu menu-link">
//                                         <li><a className="dropdown-item" href="#service">{props.dropdown1}</a></li>
//                                         <li><a className="dropdown-item" href="#portfolio">{props.dropdown2}</a></li>
//                                         <li><hr className="dropdown-divider"/></li>
//                                         <li><a className="dropdown-item" href="#history">{props.dropdown3}</a></li>
//                                     </ul>
//                                 </li>
//                                 <li className="menu-item">
//                                     <a className="nav-link menu-link" href="#contact">{props.menu4}</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-md-4 col-sm-6 col-4 desktop">
//                         <form className="d-flex">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                             <button className="header-btn search-btn" type="submit">{props.searchbtntxt}</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// Navbar.propTypes = {
//     title: PropTypes.string,
//     menu1: PropTypes.string,
//     menu2: PropTypes.string,
//     menu3: PropTypes.string,
//     menu4: PropTypes.string,
// }
// Navbar.defaultProps = {
//     title: 'Set title here'
// }