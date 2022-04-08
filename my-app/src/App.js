import "./App.css";
import React from "react";
import OpeningScreen from "./components/OpeningScreen";
import QuestionsScreen from "./components/QuestionsScreen";

function App() {
  const [game, setGame] = React.useState(false);

  function startGame(event) {
    event.preventDefault();
    setGame(true);
  }
  return (
    <div className="App">
      {!game && <OpeningScreen />}
      {game && <QuestionsScreen />}
      {!game ? (
        <button onClick={startGame}>Start quiz</button>
      ) : (
        <button>Check answers</button>
      )}
    </div>
  );
}

export default App;
