import React from 'react'
import "./TaskComponent.css"
import violet from '../img/violet.png';

function TaskComponent({
    question,
    slideId, 
    setSlideId
}) {
    // console.log('Slideid: ', slideId);
    return (
        <div className="cardd">
            {question.main ?  
                <div className='card__main-text-wrapper' onClick={() => setSlideId(question.text[0].id)}>
                    <img src={violet} className='violet' />
                    <div className='card__content'>
                        {question.image ? <img src={question.image} alt='...'/> : ''}
                        <p>{question.text[0].text}</p>
                        {question.button ? <button>{question.button}</button> : ''}
                    </div>
                </div>
            : 
            <div className='card__dialog'>
                {question.person === 'Анастасия' ? 
                    <div className='card__dialog-anastasia' onClick={() => setSlideId(question.text[0].id)}>
                        <span>Анастасия</span>
                        <p>{question.text[0].text}</p>
                    </div>
                :
                   <div>
                        {question.text.map((q, id) => {
                            console.log(q.text)
                            return <div key={id} onClick={() => setSlideId(q.id)} className='card__dialog-simple'>{q.text}</div>
                        })}                    
                   </div>
                }
            </div>
            
            }
        </div>
    )
}

export default TaskComponent;