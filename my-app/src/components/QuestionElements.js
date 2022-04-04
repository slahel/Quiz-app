import React from "react";
import "./Questions.css";
//import Answers from "./Answers";
import { nanoid } from "nanoid";

export default function QuestionElements(props) {
  const [chosenAnswers, setChosenAnswers] = React.useState(false);
  //console.log(props.data);
  //Answers element

  //test
  function ChosenAnswers(index) {
    setChosenAnswers(true);
  }

  // const handleSelectAnswer = (questionId, answer) => {
  // 		if (!isGameOver) {
  // 			setQuestionsArray(prevQuestionsArray => (
  // 				prevQuestionsArray.map(question => (
  // 					question.id === questionId
  // 						? {...question, selectedAnswer: answer }
  // 						: question
  // 				))
  // 			));
  // 		}
  // 	}
  // end test

  // function holdDice(id) {
  //   setDice((oldDice) =>
  //     oldDice.map((die) => {
  //       return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
  //     })
  //   );
  // }
  const wrongAnswers = props.data.incorrect_answers;
  const rightAnswer = props.data.correct_answer;

  var shuffle = require("shuffle-array"),
    answers = wrongAnswers.concat(rightAnswer);
  shuffle(answers);

  console.log(answers);
  const answerStyles = {
    backgroundColor: chosenAnswers ? " #4d5b9e" : "transparent",
    color: chosenAnswers ? "white" : "black",
  };

  const displayedAnswers = answers.map((item, index) => {
    return (
      <div
        key={index}
        id={nanoid()}
        className="displayed-answers"
        style={answerStyles}
        onClick={ChosenAnswers}
        value={item}
      >
        {item}
      </div>
    );
  });
  //console.log(displayedAnswers);
  displayedAnswers.forEach((element) => console.log(element.props.value));
  displayedAnswers.forEach((element) => console.log(element.props.id));
  //console.log(displayedAnswers[1].props.value);
  //console.log(displayedAnswers.map(props.id));
  //console.log(displayedAnswers.[{key}]);
  // console.log(displayedAnswers[{ index }].props.id);

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
