import "./DefaultQuestion.css"
import React from "react";

function AnswerButton() {
    return (
        <button>
            I'm answer
        </button>
    );
}

function DefaultQuestion({ question }) {
    return (
        <div className="white-box">
            <h1>{question}</h1>
            <AnswerButton />
            <AnswerButton />
            <AnswerButton />
        </div>
    )
}

export default DefaultQuestion;