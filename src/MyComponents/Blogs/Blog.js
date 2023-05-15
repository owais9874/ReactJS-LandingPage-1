import React from 'react'
import './Blog.css'
// import blogs1 from './images/blog1.png'

export default function Blog(props) {
    return (
        <>
            <div id='history' className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="section-heading">BLOG & HISTORY</div>
                        <h2>Get The Latest Articles About The Different Aspects Photography</h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-12">
                    <div className="blog-image">
                    <img src={props.blogs1} alt=''/>
                    <div className='publish-date'>
                        <span>jan</span>
                        <h3>20</h3>
                        <span>2023</span>
                    </div>
                    </div>
                    <div className='blog-type'>
                    <p>Photography, Fashion</p>
                    <h3 className='blog-title'><a href='#blog'>Best Fujifilm Camera 21: Mirrorless, Instax and Compact.</a></h3>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="blog-image">
                    <img src={props.blogs2} alt=''/>
                    <div className='publish-date'>
                        <span>jan</span>
                        <h3>20</h3>
                        <span>2023</span>
                    </div>
                    </div>
                    <div className='blog-type'>
                    <p>Photography, Fashion</p>
                    <h3 className='blog-title'><a href='#blog'>Best Fujifilm Camera 21: Mirrorless, Instax and Compact.</a></h3>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}