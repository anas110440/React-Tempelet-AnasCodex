import './Footer.css'
import Logo from '../../image/sssssss.png'

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container footer"> 
      


      <div className="footer-box" data-aos="fade-right">
      <h4>Useful Links</h4>
      <div className="footer-links">
        <a href="#">&bull; Support</a>
        <a href="#">&bull; About</a>
        <a href="#">&bull; Learn</a>
        <a href="#">&bull; Hosting</a>
        <a href="#">&bull; Messenger</a>
      </div>
      </div>



      <div className="footer-box" data-aos="fade-up">
      <h4>Support</h4>
      <div className="footer-links">
        <a href="#">&bull; Support</a>
        <a href="#">&bull; About</a>
        <a href="#">&bull; Learn</a>
        <a href="#">&bull; Hosting</a>
        <a href="#">&bull; Messenger</a>
      </div>
      </div>


      <div className="footer-box" data-aos="fade-down">
      <h4>Contact Us</h4>
        <div className="footer-contact u-text-small">
          <p>
            <FaMapMarkerAlt /> &nbsp;  Address: Yemen 
          </p>
          <p>
            <FaPhoneAlt /> &nbsp;  Phone: 777333777 
          </p>
          <p>
            <FaFax /> &nbsp;  Fax: +132132132 
          </p>
          <p>
            <FaEnvelope /> &nbsp;  Email: info@Blackgem.com 
          </p>
          <p>
            <FaGlobe /> &nbsp;  Website: www.blackgem.com 
          </p>
        </div>
      </div>

      <div className="footer-box logo-p" data-aos="fade-left">
 
        <img src={Logo} alt="" />
        <p className="u-text-small">
          &copy; Copyright 2022. AnasCodex
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer