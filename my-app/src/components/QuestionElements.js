import React from "react";
import "./Questions.css";
import bootstrap from "bootstrap";

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
      <li key={index} className="grid">
        {items}
      </li>
    );
  });

  return (
    <div className="container">
      <h3>{props.data.question}</h3>
      {displayedAnswers}
      <hr />
    </div>
  );
}
