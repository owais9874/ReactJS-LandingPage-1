import React from 'react'
import './Footer.css'

import {BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'

function Footer(props) {

    return (

        <>
            <div className="footer">
                <div className="footer-col1">
                    <div className='footer-title'>USEFUL LINKS</div>
                    <div className="footer-txt footer-link">
                        <ul>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href='#history'>Our History</a></li>
                            <li><a href='#contact'>Contact Us</a></li>
                        </ul>
                        <ul>
                            <li><a href='#video'>Video</a></li>
                            <li><a href='#testimonial'>Our Achieve</a></li>
                            <li><a href='#service'>How We Work</a></li>
                            <li><a href='#contact'>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-col2">
                    <div className='footer-title'>NEWSLETTER</div>
                    <div className="footer-txt">Subscribe to our Newsletter to receive exclusive offers, latest news and updates.</div>
                    <form className="d-flex footer-email">
                        <input className="form-control email-form me-2" type="email" placeholder="Enter your Email" aria-label="Email"/>
                        <button className="footer-btn search-btn" type="send">{props.searchbtntxt}</button>
                    </form>
                </div>
                <div className="footer-col3">
                    <div className='footer-title'>FOLLOW US</div>
                    <div className="social-icon">
                        <ul>
                            <li><a href='https://www.linkedin.com/in/owais9874' target='_page'><BsLinkedin/></a></li>
                            <li><a href='https://www.instagram.com/cadet_owais' target='_page'><BsInstagram/></a></li>
                            <li><a href='https://www.facebook.com/owais9874' target='_page'><BsFacebook/></a></li>
                            <li><a href='https://twitter.com/owais9874' target='_page'><BsTwitter/></a></li>
                        </ul>
                    </div>
                    <div className="footer-txt">The perfect place for telling & sharing all the stories that truly matter.</div>
                </div>
            </div>

            <div className="footer-bar">
                <div className="container">
                    <p>Copyright &copy; {new Date().getFullYear()} <span> React </span> | Design By <span> Owais Ali. </span></p>
                </div>
            </div>
            
        </>


        // <>
        //     <div className="footer">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-md-4 col-12">
        //                     <div className="footer-col1">
        //                         <div className='footer-title'>USEFUL LINKS</div>
        //                         <div className="footer-txt footer-link">
        //                             <ul>
        //                                 <li><a href='#about'>About Xoon</a></li>
        //                                 <li><a href='#history'>Our History</a></li>
        //                                 <li><a href='#contact'>Contact Us</a></li>
        //                                 <li><a href='#portfolio'>Portfolio 01</a></li>
        //                             </ul>
        //                             <ul>
        //                                 <li><a href='#video'>Video</a></li>
        //                                 <li><a href='#testimonial'>Our Achieve</a></li>
        //                                 <li><a href='#service'>How We Work</a></li>
        //                                 <li><a href='#contact'>Privacy Policy</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-4 col-12">
        //                 <div className="footer-col2">
        //                         <div className='footer-title'>NEWSLETTER</div>
        //                         <div className="footer-txt">Subscribe to our Newsletter to receive exclusive offers, latest news and updates.</div>
        //                         <form className="d-flex footer-email">
        //                             <input className="form-control email-form me-2" type="email" placeholder="Enter your Email" aria-label="Email"/>
        //                             <button className="footer-btn search-btn" type="send">{props.searchbtntxt}</button>
        //                         </form>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-4 col-12">
        //                 <div className="footer-col3">
        //                         <div className='footer-title'>FOLLOW US</div>
        //                         <div className="social-icon">
        //                             <ul>  
        //                                 <li><a href='https://www.instagram.com/cadet_owais' target='_page'><i className="bi bi-instagram"></i></a></li>
        //                                 <li><a href='https://www.pinterest.com' target='_page'><i className="bi bi-pinterest"></i></a></li>
        //                                 <li><a href='https://www.facebook.com/owais9874' target='_page'><i className="bi bi-facebook"></i></a></li>
        //                                 <li><a href='https://twitter.com/owais9874' target='_page'><i className="bi bi-twitter"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <div className="footer-txt">The perfect place for telling & sharing all the stories that truly matter.</div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="footer-bar">
        //         <div className="container">
        //             <p>Copyright 2022 <button> React </button> | Design By <button> Owais Ali. </button></p>
        //         </div>
        //     </div>
            
        // </>
    )
}

export default Footer