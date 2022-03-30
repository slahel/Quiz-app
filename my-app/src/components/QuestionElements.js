import React from "react";
import "./Questions.css";

export default function QuestionElements(props) {
  //const [answers,setAnswers]=React.useState([])
  console.log(props.data);

  const wrongAnswers = props.data.incorrect_answers;
  const rightAnswer = props.data.correct_answer;

  var shuffle = require("shuffle-array"),
    answers = wrongAnswers.concat(rightAnswer);
  shuffle(answers);

  //   function ArrayAnswers(props) {
  //     return props;
  //   }

  const displayedAnswers = answers.map((items, index) => {
    return (
      <div className="answers">
        <span key={index} className="answer-items">
          {items}
        </span>
      </div>
    );
  });

  return (
    <div>
      <h3>{props.data.question}</h3>
      {displayedAnswers}
      <hr />
    </div>
  );
}
