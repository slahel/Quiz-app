import React from "react";
import { nanoid } from "nanoid";
//import QuestionElements from "./QuestionElements";

export default function Question() {
  const [questionData, setQuestionData] = React.useState([]);
  //const [gameOver, setGameOver] = React.useState(false);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((data) =>
        setQuestionData(
          data.results.map((question) => ({
            id: nanoid(),
            ...question,
            answers: [
              ...question.incorrect_answers,
              question.correct_answer,
            ].sort(() => Math.random() - 0.5),
          }))
        )
      );
  }, []);

  console.log(questionData);

  // function ChoseAnswers(id) {
  //   // const [itemAnswers, setItemAnswers] = React.useState([]);
  //   console.log(id);
  //   displayedAnswers.map((item) => {
  //     return item.id === id ? { ...item, isChosen: !item.isChosen } : item;
  //   });
  // }

  return (
    <div>
      {questionData.map((question) => {
        return (
          <div key={question.id} className="question--container">
            <h3 className="question">{question.question}</h3>
            <div className="answer--container">
              {question.answers.map((answer) => (
                <p
                  key={answer}
                  id={answer}
                  // onClick={selectAnswer(question)}
                  // className={[
                  //   "question--answers",
                  //   question.answered === answer &&
                  //     (question.isCorrect ? "correct" : "incorrect"),
                  // ]
                  //   .filter(Boolean)
                  //   .join(" ")}
                >
                  {answer}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
