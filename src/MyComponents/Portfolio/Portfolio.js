import React from 'react'
import './Portfolio.css'

export default function Portfolio(props) {
    return (
        <>
            <div id='portfolio' className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="section-heading">PORTFOLIO</div>
                        <h2>Our Best Creation Where We Make The Photograph Alive.</h2>
                    </div>
                </div>
                <div className="all-folio-img">
                    <div className="row">
                        <div className="folio-img">
                            <div className="col-md-12  col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio1} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12  col-12">
                                <div className="portfolio-image center-img">
                                    <img src={props.imgportfolio4} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12  col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio7} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="folio-img column2-img">
                            <div className="col-md-12 col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio2} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio5} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio8} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="folio-img">
                            <div className="col-md-12 col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio3} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio6} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="portfolio-image">
                                    <img src={props.imgportfolio9} alt=''/>
                                    <div className='folio-txt-icon'>
                                        <div className="folio-icon">
                                            <button><i className='bi bi-plus'></i></button>
                                        </div>
                                        <div className='folio-txt'>
                                            <h2><button>Magic Moments Photo!</button></h2>
                                            <span>Date: 16 January 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="folio-btn">
                    <button className='btn search-btn'>{props.bannerbtn}</button>
                </div>
            </div>
        </>
    )
}