import React from 'react'
import './Banner.css'

export default function Banner(props) {
  return (
    <>
      <div id='home' className="banner-section">
        <div className="banner">
          <video autoPlay muted loop src={props.bannreVideo}/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="banner-txt">
                <h3>{props.bannertxt1}</h3>
                <h1>{props.bannertxt2}</h1>
                <a href='#service'><button className='btn search-btn'>{props.bannerbtn}</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}