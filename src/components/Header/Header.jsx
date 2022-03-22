import { useEffect } from 'react';
import './Header.css'
import Button from './../UI/Button/Button';
import  './../UI/Button/Button.css';

import Blue from '../../image/blue.png' 
import Pink from '../../image/pink.png' 
import { BsMouse } from 'react-icons/bs';

import AOS from 'aos';

import 'aos/dist/aos.css'


const Header = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[])
  
  return (
    <section id='header'>
      <div className="container header">

        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Better Future For Your Kids</span>
            <span>Let The Child Be the Director,</span>
            <span> And The Actor In His Own Play</span>
            </h1>

            <p className='u-text-small u-text-light' > 
            Completely Create Client-focused Growth Strategies Rather Than B2C Manufactured Products. Energistically Aggregate Inexpensive Imperatives For Long-Trem High-Impact Users. Proactively Recptiualize
</p>

<div className="btsm">
  
  
              <Button text={"Get Started"} link="#" btnClass="btn-dark" />
           
            <Button text={"About Us"} link="#" btnClass="btn-orange" />

  </div>

        </div>

        <div className="header-right" >
          <img src={Blue} alt="" data-aos="fade-down" />
          <img src={Pink} alt="" data-aos="fade-up" />
        </div>

      </div>

      <div className="floating-icon">
        <a href="#about">
        <BsMouse color='#fff' size={25} className='mouse' />
        </a>
      </div>
    </section>
  )
}

export default Header