import React, { useState } from "react";
import InteractiveTask from '../questions/InteractiveTask'
import questions from '../questions/questions' 



function InteractiveMain() {

    let [slideId, setSlideId] = useState(1);
    let item = questions.filter((quest) => quest.id === slideId)
    
    return (
       <div>
            <InteractiveTask question={item[0]} slideId={slideId} setSlideId={setSlideId} />
       </div>
    )
}

export default InteractiveMain;