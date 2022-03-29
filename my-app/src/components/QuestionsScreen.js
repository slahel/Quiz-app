import React from "react";

export default function QuestionsScreen() {
  const [questionData, setQuestionData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setQuestionData(data.results));
  }, []);

  const questionElement = questionData.map((element, index) => (
    <div key={index}>
      <h3>{`${element.question}`}</h3>
      <hr />
    </div>
  ));

  return (
    <div className="questions-screen">
      {questionElement}
      <button>Check answers</button>
    </div>
  );
}
