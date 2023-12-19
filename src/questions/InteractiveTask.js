import React from "react";
import './InteractiveTask.css';
import background from '../img/background.png';
import TaskComponent from "./TaskComponent";

function InteractiveTask({
    question,
    slideId,
    setSlideId
}) {
    return (
        <div className="card">
            <img className="card__image" src={background}/>
            <div className="card__content">
                {/* {questions.map((q, id) => {
                    return <TaskComponent question={q} key={id} slideId={slideId} setSlideId={setSlideId} />
                })} */}
                <TaskComponent question={question} slideId={slideId} setSlideId={setSlideId} />
            </div>
        </div>
    )
}

export default InteractiveTask;