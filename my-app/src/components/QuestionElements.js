import React from "react";

export default function QuestionElements(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.question}
      <hr />
    </div>
  );
}
