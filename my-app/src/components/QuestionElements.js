import React from "react";
import "./Questions.css";
import AnswersElement from "./AnswersElement";
import { nanoid } from "nanoid";

export default function QuestionElements(props) {
  //console.log(props.id);
  //
  const wrongAnswers = props.data.incorrect_answers;
  const rightAnswer = props.data.correct_answer;
  const [answers, setAnswers] = React.useState(
    wrongAnswers.concat(rightAnswer)
  );

  var shuffle = require("shuffle-array");
  shuffle(answers);

  //Choose an answer
  //
  function ChoseAnswers(id) {
    // const [itemAnswers, setItemAnswers] = React.useState([]);
    console.log(id);
    displayedAnswers.map((item) => {
      return item.id === id ? { ...item, isChosen: !item.isChosen } : item;
    });

    // () => {
    //   (odlItems) =>
    //     odlItems.map((item) => {
    //       return item.id === id ? { ...item, isChosen: !item.isChosen } : item;
    //     });
    // };
    // console.log(itemAnswers);
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

  //console.log(displayedAnswers);
  //displayedAnswers.forEach((element) => console.log(element.props.value));
  // displayedAnswers.forEach((element) => console.log(element.props.id));
  // displayedAnswers.forEach((element) => console.log(element.props.ischosen));

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
