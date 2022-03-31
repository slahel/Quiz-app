import React from "react";
import "./Questions.css";
import Answers from "./Answers";

//import bootstrap from "bootstrap";

export default function QuestionElements(props) {
  const [chosenAnswers, setChosenAnswers] = React.useState();
  console.log(props.data);

  const wrongAnswers = props.data.incorrect_answers;
  const rightAnswer = props.data.correct_answer;
  wrongAnswers.id = nanoid();
  rightAnswer.id = nanoid();

  function holdAnswers(id) {
    setChosenAnswers((oldItem) =>
      oldItem.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  var shuffle = require("shuffle-array"),
    answers = wrongAnswers.concat(rightAnswer);
  shuffle(answers);

  const displayedAnswers = answers.map((item) => {
    <Answers
      key={item.id}
      value={item}
      isHeld={item.isHeld}
      holdAnswers={() => holdAnswers(item.id)}
    />;

    // return <div key={index}>{items}</div>;
  });

  //   const diceElements = dice.map((die) => (
  //     <Die
  //       key={die.id}
  //       value={die.value}
  //       isHeld={die.isHeld}
  //       holdDice={() => holdDice(die.id)}
  //     />
  //   ));

  return (
    <div className="container">
      <h3>{props.data.question}</h3>
      {displayedAnswers}
      <hr />
    </div>
  );
}
