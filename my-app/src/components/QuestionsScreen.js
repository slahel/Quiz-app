import React from "react";
import { nanoid } from "nanoid";
import QuestionElements from "./QuestionElements";

export default function QuestionsScreen() {
  const [questionData, setQuestionData] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setQuestionData(data.results));
  }, [gameOver]);

  const questionElement = questionData.map((items, index) => {
    return (
      <div key={index} className="question-elements">
        <QuestionElements data={items} id={nanoid()} />
      </div>
    );
  });

  return <div className="questions-screen">{questionElement}</div>;
}
