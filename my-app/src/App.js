import "./App.css";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [game, setGame] = React.useState(false);

  function startGame(event) {
    event.preventDefault();
    setGame(true);
  }
  function OpeningScreen() {
    return (
      <div className="opening-screen">
        <h1>Quizzical</h1>
        <h3>Test your general knowledge in 5 questions</h3>
        <button onClick={startGame}>Start quiz</button>
      </div>
    );
  }

  function Question() {
    //const [gameOver, setGameOver] = React.useState(false);
    const [questionData, setQuestionData] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [results, setResults] = React.useState(false);

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

    const selectAnswer = (question) => (event) => {
      event.target.id === question.correct_answer
        ? setCount(count + 1)
        : setCount(count);

      setQuestionData((questions) =>
        questions.map((i) =>
          i.id === question.id
            ? {
                ...i,
                answered: event.target.id,
                ischosen: event.target.id,
              }
            : i
        )
      );
    };

    function checkAnwers() {
      const allAnswered = questionData.every((i) => i.answered);
      if (allAnswered) {
        console.log("answers checked");
        console.log(count);
        setResults(true);
      } else {
        console.log("not all questions answered");
      }
    }

    return (
      <div>
        {questionData.map((question) => {
          return (
            <div key={question.id} className="question--container">
              <h3 className="question">{question.question}</h3>
              <div className="answer--container">
                {question.answers.map((answer) => (
                  <div
                    key={answer}
                    id={answer}
                    onClick={selectAnswer(question)}
                    ischosen={"not-chosen"}
                    className={[
                      "question--answers",
                      question.answered === answer &&
                        (question.ischosen ? "chosen" : "not-chosen"),
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {answer}
                  </div>
                ))}
              </div>
              <hr />
            </div>
          );
        })}
        <div className="results">
          {results ? `You have scored ${count}/5` : `Select your answers...`}
        </div>
        <button onClick={checkAnwers}>Check answers</button>
      </div>
    );
  }

  return (
    <div className="App">
      {!game && <OpeningScreen />}
      {game && <Question />}
    </div>
  );
}

export default App;
