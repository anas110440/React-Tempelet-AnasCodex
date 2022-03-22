import  './Features.css'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import Feat  from '../../image/feat.jpg';
import Feature  from './Feature';

import { featureList } from './data';


const Features = () => {
  return (
    <section id='features'>
      <div className="container features ">
        <div className="u-title" data-aos="fade-down">
          <BsFillBookmarkStarFill color='orangered' size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
          Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri

          </p>
        </div>

        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={Feat} alt="Feat" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {featureList.map((feature)=>(

          <Feature key={feature.id} icone={feature.icone} heading={feature.heading} text={feature.text}  />
            ))}
          </div>
        </div>


      </div>

    </section>
  )
}

export default Features