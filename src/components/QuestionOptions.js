import React from 'react';

const QuestionOptions = (props) => (
    <div className="question">
        {
            !props.options ? props.message
                : props.options.map((option) => {
                    return <button key={option} value={option} disabled={props.type === "HOST" ? true : false} onClick={props.submitAnswer} className={"question__option"}>{option}</button>
                })
        }
    </div>
)

export default QuestionOptions;