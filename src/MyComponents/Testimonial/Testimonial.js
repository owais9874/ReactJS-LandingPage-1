import React from 'react'
import './Testimonial.css'

export default function Testimonial(props) {
    return (
        <div id='testimonial' className="testmonial-sec">
            <div className="testimonial-heading">TESTIMONIAL</div>
            <div className="owl-carousel owl-carousel-testimonial">
                <div className="item">
                    <div className="testimonial-txt">
                        "I work with Abdullah on many projects, he always exceeds my expectations with his quality work and fast service, very smooth and simple communication. Keep up the great work."
                    </div>
                    <div className='testmonial-user'>
                        <div className="testi-user-img">
                            <img src={props.testiUser1} alt=''/>
                        </div>
                        <div className="testi-user-name">
                            <h5>Leslie Alexander</h5>
                            <span>Photographer</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-txt">
                        "I work with Abdullah on many projects, he always exceeds my expectations with his quality work and fast service, very smooth and simple communication. Keep up the great work."
                    </div>
                    <div className='testmonial-user'>
                        <div className="testi-user-img">
                            <img src={props.testiUser2} alt=''/>
                        </div>
                        <div className="testi-user-name">
                            <h5>Leslie Alexander</h5>
                            <span>Photographer</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-txt">
                        "I work with Abdullah on many projects, he always exceeds my expectations with his quality work and fast service, very smooth and simple communication. Keep up the great work."
                    </div>
                    <div className='testmonial-user'>
                        <div className="testi-user-img">
                            <img src={props.testiUser3} alt=''/>
                        </div>
                        <div className="testi-user-name">
                            <h5>Leslie Alexander</h5>
                            <span>Photographer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}