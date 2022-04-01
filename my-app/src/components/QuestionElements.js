import React from "react";
import "./Questions.css";
//import Answers from "./Answers";
import { nanoid } from "nanoid";

export default function QuestionElements(props) {
  const [chosenAnswers, setChosenAnswers] = React.useState(false);
  console.log(props.data);
  //Answers element
  const wrongAnswers = props.data.incorrect_answers;
  const rightAnswer = props.data.correct_answer;

  function ChosenAnswers(id) {
    setChosenAnswers(true);
  }

  var shuffle = require("shuffle-array"),
    answers = wrongAnswers.concat(rightAnswer);
  shuffle(answers);

  // const answerStyles = {
  //   backgroundColor: chosenAnswers ? " #4d5b9e" : "transparent",
  //   color: chosenAnswers ? "white" : "black",
  // };

  const displayedAnswers = answers.map((item, index) => {
    return (
      <div
        key={index}
        id={nanoid()}
        className="displayed-answers"
        //style={answerStyles}
        onClick={ChosenAnswers}
      >
        {item}
      </div>
    );
  });

  //   <Answers
  //     key={item.index}
  //     id={nanoid()}
  //     value={item.value}
  //     isHeld={item.isHeld}
  //     // holdAnswers={() => holdAnswers(item.id)}
  //   />;
  // });
  // console.log(displayedAnswers.value);
  // return <div key={index}>{items}</div>;

  //   const diceElements = dice.map((die) => (
  //     <Die
  //       key={die.id}
  //       value={die.value}
  //       isHeld={die.isHeld}
  //       holdDice={() => holdDice(die.id)}
  //     />
  //   ));

  //End of the Answer element
  return (
    <div className="container">
      <h3>{props.data.question}</h3>
      <div className="wrapper">{displayedAnswers}</div>
      <hr />
    </div>
  );
}
