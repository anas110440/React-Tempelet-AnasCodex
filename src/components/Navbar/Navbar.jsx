import './Nav.css'
import { useState } from 'react';
import { SiAnaconda } from 'react-icons/si';
import { AiOutlineBars } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';
import Button from './../UI/Button/Button';
import  './../UI/Button/Button.css';


const Navbar = () => {
  const [showMenu,setShowMenue] = useState(false);
  const toggleMenue = ()=>{
    setShowMenue(!showMenu); 
  }

  return (
    <nav className='container navbar'>
      <div className="logo">
<SiAnaconda color='#fff' size={33} />

<p className="logo-text">
  Anas<span>Codex</span>
</p>
      </div>
      <menu>
        <ul className="nav-links" id={showMenu ? "nav-links-mobile" :"nav-links-mobile-hide"  }>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li className='nav-btn'>
            
            <Button text={"Login"} link="#" btnClass="btn-dark" className="login-button" />
            </li>
        </ul> 
      </menu>
      <div className="menu-icons" onClick={()=>toggleMenue()}>
        {showMenu ? <RiCloseLine color='#fff' size={30} /> : <AiOutlineBars color='#fff' size={27} />
 }
      </div>
    </nav>
  )
}

export default Navbar