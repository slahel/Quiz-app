import "./App.css";
import React from "react";
import { nanoid } from "nanoid";
import background from "./img/img2.png";

function App() {
  const [game, setGame] = React.useState(false);

  function startGame(event) {
    event.preventDefault();
    setGame(!game);
  }
  function OpeningScreen() {
    return (
      <div className="opening-screen">
        <h1>Quizzical</h1>
        <h3>Test your science knowledge in 5 questions</h3>
        <button onClick={startGame}>Start quiz</button>
      </div>
    );
  }

  function Question() {
    const [questionData, setQuestionData] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [results, setResults] = React.useState(false);
    //const [isCorrect, setIsCorrect] = React.useState(null);

    React.useEffect(() => {
      fetch(
        "https://opentdb.com/api.php?amount=5&category=17&difficulty=medium&type=multiple"
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

    //console.log(questionData);

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
                iscorrect: question.correct_answer,
                // isCorrect: event.target.id === question.correct_answer,
              }
            : i
        )
      );
    };
    //const selectAnswer = (question) => (event) =>{
    function checkAnwers(question) {
      // const checkAnwers = (question) => (event) => {
      const allAnswered = questionData.every((i) => i.answered);
      // const iscorrect = question.answered === question.correct_answer;

      //
      if (allAnswered) {
        setResults(true);

        // React.useEffect(
        //   () =>
        //     setQuestionData(
        //       questionData.map((question) => {
        //         question.answered === question.correct_answer
        //           ? // ? setIsCorrect(true)
        //             // : setIsCorrect(false);
        //             console.log("correct")
        //           : console.log("wrong");
        //       })
        //     ),
        //   [results]
        // );

        const isCorrect = () =>
          questionData.map((question) => {
            question.answered === question.correct_answer
              ? // : setCount(count);
                console.log("right")
              : // : // : setIsCorrect(false);
                //   // console.log("correct")
                console.log("wrong");
          });

        // // setQuestionData((questions) =>
        //   questions.map((i) =>
        //     i.id === question.id
        //       ? {
        //           ...i,
        //           iscorrect:
        //             question.answered === question.correct_answer
        //               ? console.log("correct")
        //               : console.log("wrong"),
        //           // isCorrect: event.target.id === question.correct_answer,
        //         }
        //       : i
        //   )
        // );

        isCorrect();
        console.log("answers checked");
        console.log(question);
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
                    // iscorrect={isCorrect}
                    className={[
                      "question--answers",
                      results && `faded`,
                      question.answered === answer &&
                        (question.ischosen ? "chosen" : "not-chosen"),
                      question.answered === answer &&
                        (results
                          ? question.answered === question.correct_answer
                            ? "correct"
                            : "incorrect"
                          : null),
                      results && question.iscorrect === answer
                        ? "correct"
                        : null,
                      //results && (question.iscorrect ? "correct" : null),
                      // results && (question.correct_answer ? "correct" : null),
                      // (results
                      //   ? question.answered === !question.correct_answer
                      //     ? question.correct_answer? ()
                      //     : "incorrect"
                      //   : null),

                      // results && question.answered === !question.correct_answer
                      //   ? question.correct_answer && `correct`
                      //   : null,

                      // results
                      //   ? question.correct_answer === !question.answered
                      //     ? question.correct_answer
                      //       ? "correct_answer"
                      //       : null
                      //     : null
                      //   : null,
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
        {!results && (
          <button onClick={() => checkAnwers(questionData)}>
            Check answers
          </button>
        )}
        {results && <button onClick={startGame}>Start a new game</button>}
      </div>
    );
  }

  return (
    <div className="App">
      <img src={background} className="img-background" alt="backgroung-img" />
      {!game && <OpeningScreen />}
      {game && <Question />}
    </div>
  );
}

export default App;
