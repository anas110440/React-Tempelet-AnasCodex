import './Download.css'
import {GrAndroid} from 'react-icons/gr' 
import {IconContext} from 'react-icons' 
import {FaApple , FaWindows} from 'react-icons/fa' 
const Download = () => {
  return (
    <section id='download'>
      <div className="container download" data-aos="fade-up">

      <h2>BlackGem Application Download</h2>
      <p className='u-text-small u-text-light'>
      Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam
      </p>

      <div className="download-icons">
        <IconContext.Provider value={{size:"22"}}>

      <div className="download-icon">
          <FaApple /> &nbsp; <p>Ios</p>
        </div>
       
        <div className="download-icon">
          <GrAndroid /> &nbsp; <p>Android</p>
        </div>
       
        <div className="download-icon">
          <FaWindows /> &nbsp; <p>Windows</p>
        </div>
      
        </IconContext.Provider>
      
      </div>


      </div>
      </section>
  )
}

export default Download