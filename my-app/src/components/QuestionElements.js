import React from "react";
import "./Questions.css";
import AnswersElement from "./AnswersElement";
import { nanoid } from "nanoid";

export default function QuestionElements(props) {
  const [answers, setAnswers] = React.useState(
    props.data.incorrect_answers.concat(props.data.correct_answer)
  );
  //const [answersObj, setAnswersObj] = React.useState([]);

  var shuffle = require("shuffle-array");
  shuffle(answers);

  function GetObject() {
    answers.map((i) => {
      console.log({ value: i, id: nanoid(), isChosen: false });
    });
  }
  GetObject();

  function ChoseAnswers(id) {
    // const [itemAnswers, setItemAnswers] = React.useState([]);
    console.log(id);
    displayedAnswers.map((item) => {
      return item.id === id ? { ...item, isChosen: !item.isChosen } : item;
    });
  }

  const displayedAnswers = answers.map((items) => {
    const id = nanoid();
    const isChosen = false;
    return (
      <div key={id} className="displayed-answers">
        <AnswersElement
          value={items}
          id={id}
          isChosen={isChosen}
          ChoseAnswers={() => ChoseAnswers(id)}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <h3>{props.data.question}</h3>
      <div className="wrapper">{displayedAnswers}</div>
      <hr />
    </div>
  );
}
