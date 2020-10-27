import React from "react";
import ReactDOM from "react-dom";

function getMood() {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSX extends React.Component {
  render() {
    return <h1>My Mood is: {getMood()}</h1>;
  }
}

ReactDOM.render(<JSX />, document.getElementById("root"));
