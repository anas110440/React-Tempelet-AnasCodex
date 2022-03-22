import React ,{useState} from 'react'
import './Question.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'


const Question = ({title , answer}) => {

    const[showAnswer , setshowAnswer] = useState(false)
  return (
    <div className='container question'>
        
        
        <div className="question-title">
            <h4>{title}</h4>
            <button className='question-icon' onClick={()=>setshowAnswer(!showAnswer)}>
                {!showAnswer ? <AiOutlinePlus color='#1f93ff' /> : <AiOutlineMinus color='red' />}
            </button>
        </div>
        
        
        <div className="question-answer">

            {showAnswer &&
            <p className="u-text-small u-text-dark">
                {answer}
            </p>
            }
        
        
        </div>
    </div>
  )
}

export default Question