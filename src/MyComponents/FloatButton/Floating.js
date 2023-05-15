import React from 'react'
import './Floating.css'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function Floating() {
  return (
    <div className='floating'>
        {/* <div className='float-close-btn'><a href='/' target='_page' className='phone-btn'><i class="fa-solid fa-plus"></i></a></div> */}
        <div className='float-btn'>
            {/* https://wa.me/923132940874?text=owais? */}
            <div className='float-btn1'><a href='/' target='_page' className='whatsapp-btn'> <i> <FaPhone/> </i> </a></div>
            <div className='float-btn2'><a href='/' target='_page' className='phone-btn'> <i> <FaWhatsapp/> </i> </a></div>
        </div>
    </div>
  )
}
