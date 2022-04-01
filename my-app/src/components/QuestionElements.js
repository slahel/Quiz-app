import React from "react";
import "./Questions.css";
//import Answers from "./Answers";
import { nanoid } from "nanoid";

//import bootstrap from "bootstrap";

export default function QuestionElements(props) {
  //const [chosenAnswers, setChosenAnswers] = React.useState();
  console.log(props.data);

  const wrongAnswers = props.data.incorrect_answers;
  const rightAnswer = props.data.correct_answer;

  var shuffle = require("shuffle-array"),
    answers = wrongAnswers.concat(rightAnswer);
  shuffle(answers);

  const displayedAnswers = answers.map((item, index) => {
    return (
      <div key={index} id={nanoid()} className="displayed-answers">
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

  // function holdAnswers(id) {
  //   setChosenAnswers((oldItem) =>
  //     oldItem.map((item) => {
  //       return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
  //     })
  //   );
  // }

  return (
    <div className="container">
      <h3>{props.data.question}</h3>
      <div className="wrapper">{displayedAnswers}</div>
      <hr />
    </div>
  );
}
