import React from 'react'
import './About.css'

export default function About(props) {
    return (
        <>
            <div id='about' className="brand-img">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-12">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="about-image">
                                <img src={props.imgabout0} alt=""/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="about-image">
                                <img src={props.imgabout1} alt=""/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="about-image">
                                <img src={props.imgabout2} alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-7 col-12">
                        <div className="about-txt">
                            <h2>We're Gleam a small and enthusiastic photography studio based in New York. We play with light.</h2>
                            <div className="about-details">
                            <p>The long story short is that I'm just a guy lucky enough to pick up a camera. How that went down is quite a tale, and the fact that I get to do what I love every day is something that I'll always cherish and be forever grateful for. Lorem Ipsum decided to leave for the far World of Grammar.</p>
                            <a href='#about'><button className='btn search-btn'>{props.bannerbtn}</button></a>
                            <img src={props.imgabout3} alt=""/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}