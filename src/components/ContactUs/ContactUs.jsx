import './ContactUs.css'
import {FaHeadphonesAlt} from 'react-icons/fa'
const ContactUs = () => {
  return (
    <section id='contact-us'>
      <div className="container contact-us">
        <FaHeadphonesAlt size={60} data-aos="fade-down" />
        <h2 data-aos="fade-down">Tell Us What You Feel</h2>
        <p className="u-text-small" data-aos="fade-up"> 
        Feel Free To Contact Us Anytime</p>

        <form action="" data-aos="fade-left">
          <input type="text" placeholder='User Name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Cell Phone' />

          <textarea placeholder='Your Message' cols="10" rows="5"></textarea>

          <button>Send</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs