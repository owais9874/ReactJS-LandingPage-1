import React from 'react'
import './Service.css'

export default function Service() {
    return (
        <>
            <section className='service'>
                <div id='service' className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="service-heading">OUR SERVICES</div>
                        </div>
                    </div>
                    <div className="all-service">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-camera2"></i></div>
                                    <button>Photography</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-camera-video"></i></div>
                                    <button>Videography</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-person-rolodex"></i></div>
                                    <button>Fashion Photo</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-balloon-heart"></i></div>
                                    <button>Wedding Photo</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-row">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-camera-reels"></i></div>
                                    <button>Filming</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-badge-ad"></i></div>
                                    <button>Advertising</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-collection-play"></i></div>
                                    <button>Sports Videography</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="service1">
                                    <div className='icon'><i className="bi bi-airplane"></i></div>
                                    <button>Travel Photo</button>
                                    <p>Your company needs more photography than you might think. We photograph your products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}