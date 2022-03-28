import React from "react";

export default function QuestionsScreen() {
  const [questionData, setQuestionData] = React.useState({});
  const [answer, setAnswers] = React.useState({});

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setQuestionData(data.results));
  }, []);
  console.log(questionData);

  return (
    <div className="questions-screen">
      <h3>{questionData[0].question}</h3>
      <p>{questionData[0].incorrect_answers}</p>
      <hr />
    </div>
  );
}
