import React from "react";
import Questions from "./Questions";

export default function QuestionsScreen() {
  const [questionData, setQuestionData] = React.useState({});

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setQuestionData(data.results));
  }, []);
  // export default function App() {
  //     const jokeElements = jokesData.map(joke => {
  //         return (
  //             <Joke
  //                 key={joke.id}
  //                 setup={joke.setup}
  //                 punchline={joke.punchline}
  //             />
  //         )
  //     })
  //     return (
  //         <div>
  //             {jokeElements}
  //         </div>
  //     )
  // }

  // const diceElements = dice.map((die) => (
  //   <Die
  //     key={die.id}
  //     value={die.value}
  //     isHeld={die.isHeld}
  //     holdDice={() => holdDice(die.id)}
  //   />
  // ));
  const questionsElements = questionData.map((question, index) => {
    return <Questions data={question.questionData} key={index} />;
  });

  return (
    <div className="questions-screen">
      {questionsElements}
      {/* <Questions data={questionData} /> */}
      <button>Check answers</button>
    </div>
  );
}
