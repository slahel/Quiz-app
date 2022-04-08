import React from "react";
import "./Questions.css";
import AnswersElement from "./AnswersElement";
import { nanoid } from "nanoid";

export default function QuestionElements(props) {
  const wrongAnswers = props.data.incorrect_answers;
  const rightAnswer = props.data.correct_answer;
  const allAnswers = wrongAnswers.concat(rightAnswer);
  //const [joinedAnswers, setAllAnswer] = React.useState(AnswersOject());

  const [randomArray, setRandomArray] = React.useState([]);
  console.log(props);
  // function AnswersOject(allAnswers) {
  //   const setArray = [];
  //   for (const item of allAnswers) {
  //     return {
  //       ...item,
  //       [item.id]: nanoid(),
  //     };
  //   }
  //   console.log(item);
  // }
  // AnswersOject();

  React.useEffect(() => {
    var shuffle = require("shuffle-array");
    setRandomArray(shuffle(allAnswers));
  }, [props]);

  function ChoseAnswers(value) {
    // const [itemAnswers, setItemAnswers] = React.useState([]);
    // console.log(value);
    setRandomArray((oldItems) =>
      oldItems.map((item) => {
        return item.value === value
          ? { ...item, isChosen: !item.isChosen }
          : item;
      })
    );
    // displayedAnswers.map((item) => {
    //   return item.id === id ? { ...item, isChosen: !item.isChosen } : item;
    // });

    // () => {
    //   (odlItems) =>
    //     odlItems.map((item) => {
    //       return item.id === id ? { ...item, isChosen: !item.isChosen } : item;
    //     });
    // };
    // console.log(itemAnswers);
  }

  const displayedAnswers = randomArray.map((items) => {
    const id = nanoid();
    const isChosen = true;
    const value = items;
    return (
      <div key={id} className="displayed-answers">
        <AnswersElement
          value={value}
          id={id}
          isChosen={isChosen}
          ChoseAnswers={() => ChoseAnswers(value)}
        />
      </div>
    );
  });
  //console.log(displayedAnswers);

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
