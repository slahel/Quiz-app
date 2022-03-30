import React from "react";
//import { nanoid } from "nanoid";
import QuestionElements from "./QuestionElements";

export default function QuestionsScreen() {
  const [questionData, setQuestionData] = React.useState([]);
  //const [questionElement, setQuestionElement = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setQuestionData(data.results));
  }, []);

  // const questionElement = questionData.map((element, index) => (
  //   <div key={index}>{element.question}</div>
  // ));
  const questionElement = questionData.map((items, index) => {
    return (
      <div key={index}>
        <QuestionElements data={items} />
      </div>
    );
  });

  return (
    <div className="questions-screen">
      {questionElement}

      <button>Check answers</button>
    </div>
  );
}
