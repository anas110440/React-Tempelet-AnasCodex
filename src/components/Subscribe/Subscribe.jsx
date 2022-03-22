import './Subscribe.css'
import {TiSocialGooglePlus} from 'react-icons/ti' 
import {FaFacebookF , FaTwitter , FaInstagram} from 'react-icons/fa' 


const Subscribe = () => {
  return (
    
   <section id='subscribe'>
     <div className="container subscribe">
      <h2 data-aos="fade-down">Subscribe Now!</h2>

        <p className="u-text-small">Sign Up For Newsletter Don't Worry About Spam We Hait It Too

</p>
        <form action="">
          <input type="text" placeholder='Enter Your Email...' data-aos="fade-right" />
          <button data-aos="fade-left">Subscribe</button>
        </form>

          <div className="social-icons">
            <div className="social-icon" data-aos="fade-right">
              <TiSocialGooglePlus />
              </div>

              <div className="social-icon" data-aos="fade-right">


              <FaFacebookF />
              </div>

              <div className="social-icon" data-aos="fade-right">

              <FaTwitter />
              </div>

              <div className="social-icon" data-aos="fade-right">

              <FaInstagram />
            </div>
          </div>


     </div>

   </section> 
  
  
    )
}

export default Subscribe