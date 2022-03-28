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
  //console.log(questionData);
  return (
    <div className="questions-screen">
      <Questions data={questionData} />
      <button>Check answers</button>
    </div>
  );
}
