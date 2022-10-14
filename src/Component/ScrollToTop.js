import React, { useEffect, useState } from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const[goToTop, setGoToTop] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setGoToTop(true)
            } else{
                setGoToTop(false)
            }
        })
    },[])

    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        { goToTop && <FaAngleDoubleUp className='top-btn-position top-btn-style' onClick={ScrollTop} /> }
    </div>
  )
}

export default ScrollToTop