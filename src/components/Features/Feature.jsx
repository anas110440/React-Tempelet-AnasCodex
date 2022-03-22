import  './Feat.css'
import { BsHexagon  } from 'react-icons/bs'
import { FaAccessibleIcon ,FaGg } from 'react-icons/fa'
const Feature = ({icone ,heading , text}) => {
  return (
    <div className='feature'>
      
      <div className="feature-icone">
        <BsHexagon color='orangered' size={55} />
        <div className="inner-icone">
        {icone}

        </div>
      </div>

      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small u-text-dark">
          {text}
          </p>
      </div>

      
    </div>
  )
}

export default Feature