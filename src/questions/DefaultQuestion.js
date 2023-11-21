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
        <div className="question whitebox">
            <h1>{question}</h1>
            <AnswerButton />
            <AnswerButton />
            <AnswerButton />
        </div>
    )
}

export default DefaultQuestion;