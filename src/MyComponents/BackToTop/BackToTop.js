import React, { useEffect, useState } from 'react'
import "./BackToTop.css"
import { BiUpArrowAlt } from "react-icons/bi";

export const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top:0, left:0, behavior:'smooth' })
    }

    const listenToScroll = () => {

        let heightToHidden = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHidden){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return() => window.removeEventListener('scroll', listenToScroll);
    }, []);

    return (
        <>
            {isVisible && ( 
                <div className='go-top-btn' onClick={goToBtn}>
                    <BiUpArrowAlt className="top-btn-icon" />
                </div>
            )}
        </>
    )
}