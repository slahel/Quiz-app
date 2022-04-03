import React from "react";

export default function AnswersElement(props) {
  console.log(props.value);
  // const styles = {
  //   backgroundColor: props.isHeld ? " #4d5b9e" : "transparent",
  //   color: props.isHeld ? "white" : "black",
  // };
  return (
    // <div className="answers-items" style={styles} onClick={props.holdAnswers}>
    <div>{props}</div>
  );
}
