import React from 'react';
import './Patner.css';


export default function Patner(props) {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-12">
                    <div className="owl-carousel owl-carousel-patner">
                        <div className="item">
                            <div className="patner-image">
                                <img src={props.patner1} alt=''/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="patner-image">
                                <img src={props.patner2} alt=''/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="patner-image">
                                <img src={props.patner3} alt=''/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="patner-image">
                                <img src={props.patner4} alt=''/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="patner-image">
                                <img src={props.patner5} alt=''/>
                            </div>
                        </div>
                        <div className="item">
                            <div className="patner-image">
                                <img src={props.patner6} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}