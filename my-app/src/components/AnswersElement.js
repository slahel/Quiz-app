import React from "react";

export default function AnswersElement(props) {
  //console.log(props);
  const styles = {
    backgroundColor: props.isChosen ? "#d6dbf5" : "transparent ",
    border: "solid 1px #4d5b9e",
    borderRadius: "20px",
    padding: "0px 15px 20px 15px",
    height: "30px",
  };
  return (
    <div style={styles} onClick={props.ChoseAnswers}>
      <p>{props.value}</p>
    </div>
  );
}
