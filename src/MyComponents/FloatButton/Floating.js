import React from 'react'
import './Floating.css'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function Floating() {
  return (
    <div className='floating'>
      <div className='float-btn'>
        <div className='float-btn1'><a href='/' className='whatsapp-btn'> <i> <FaPhone/> </i> </a></div>
        <div className='float-btn2'><a href='/' className='phone-btn'> <i> <FaWhatsapp/> </i> </a></div>
      </div>
    </div>
  )
}
