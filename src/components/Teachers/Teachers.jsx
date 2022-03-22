import './Teachers.css'
import {BsGoogle} from 'react-icons/bs' 
import {FaFacebookF , FaTwitter , FaInstagram} from 'react-icons/fa' 

const Teachers = () => {
  return (
    <section id='teachers'>
        
        <div className="container teachers">
        <h2 data-aos="fade-down">Our Wonderful Teachers</h2>


<div className="all-box" data-aos="fade">
        

<div className="t-box">
            <img src="https://livedemo00.template-help.com/wt_prod-22895/images/team-1-270x270.jpg" alt="" />
            <h4>Samuel Chapman</h4>
            <span>Founder, Center Director
</span>
            <p className="u-text-small u-text-dark" >Samuel Chapman is the founder and director of Kinderex who has spent his entire career working in a preschool setting.</p>



            
          <div className="t-social-icons">
              <BsGoogle />


              <FaFacebookF />

              <FaTwitter />

              <FaInstagram />
          </div>  
        </div>

        <div className="t-box">
            <img src="https://livedemo00.template-help.com/wt_prod-22895/images/team-2-270x270.jpg" alt="" />
            <h4>Stephen Rose</h4>
            <span>Lead Teacher</span>
            <p className="u-text-small u-text-dark" >
            Stephen began teaching at Kinderex in 2009. His greatest source of professional fulfillment is to see children thrive socially.
</p>

            


            
          <div className="t-social-icons">
              <BsGoogle />


              <FaFacebookF />

              <FaTwitter />

              <FaInstagram />
          </div>  
        </div><div className="t-box">
            <img src="https://livedemo00.template-help.com/wt_prod-22895/images/team-4-270x270.jpg" alt="" />
            <h4>Danielle Gray</h4>
            <span>Family Support Specialist
</span>
            <p className="u-text-small u-text-dark" >Danielle Gray provides services and programs to enhance the self-sufficiency of families and improves children’s safety.
</p>

            


            
          <div className="t-social-icons">
              <BsGoogle />


              <FaFacebookF />

              <FaTwitter />

              <FaInstagram />
          </div>  
        </div><div className="t-box">
            <img src="https://livedemo00.template-help.com/wt_prod-22895/images/team-3-270x270.jpg" alt="" />
            <h4>Catherine White</h4>
            <span>Assistant Teacher
</span>
            <p className="u-text-small u-text-dark" >She is our Assistant Teacher wo joined us a few years ago and received a certificate in Early Childhood Education.</p>


            


            
          <div className="t-social-icons">
              <BsGoogle />


              <FaFacebookF />

              <FaTwitter />

              <FaInstagram />
          </div>  
        </div>

        

</div>
        </div>
        </section>
  )
}

export default Teachers