import React from 'react'
import './Videos.css'

export default function Videos(props) {
  return (
    // <div className="row">
    //     <div className="col-md-12 col-12">
            <div id='video' className='videomp4'>
                <video autoPlay muted loop src={props.videoSection}
                />
            </div>
    //     </div>
    // </div>
  )
}