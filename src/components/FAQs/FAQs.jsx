import './Faqs.css'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import Question from './Question';
import { question } from './data';

const FAQs = () => {
  
  
    return (
    <section id='faq'>
      <div className="container faq">

    
    <div className="u-title" data-aos="fade">
          <MdOutlineLibraryBooks color='orangered' size={30} />
          <h2>Frequently Asked Questions
</h2>
          <p className="u-text-small u-text-dark">
          Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum ne periculis molestiae pri

          </p>
        </div>

      <div className="questions" data-aos="fade-down">
      {question.map((questions)=>(

        <Question title={questions.title} key={questions.id} answer={questions.answer} />
      ))
      }
     
      </div>



      </div>
   
    </section>
    

  )
}

export default FAQs