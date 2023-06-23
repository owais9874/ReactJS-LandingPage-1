import React from 'react'
import './Testimonial.css'
import { testimonialData } from '../../Data/testimonialData'

export default function Testimonial() {
    return (
        <div id='testimonial' className="testmonial-sec">
            <div className="testimonial-heading">TESTIMONIAL</div>
            <div className="owl-carousel owl-carousel-testimonial">
                <div className="item">
                    <div className="testimonial-txt">
                        {testimonialData.text1}
                    </div>
                    <div className='testmonial-user'>
                        <div className="testi-user-img">
                            <img src={testimonialData.image1} alt=''/>
                        </div>
                        <div className="testi-user-name">
                            <h5>{testimonialData.name1}</h5>
                            <span>{testimonialData.work1}</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial-txt">
                        "I work with Abdullah on many projects, he always exceeds my expectations with his quality work and fast service, very smooth and simple communication. Keep up the great work."
                    </div>
                    <div className='testmonial-user'>
                        <div className="testi-user-img">
                            <img src={testimonialData.image2} alt=''/>
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
                            <img src={testimonialData.image3} alt=''/>
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