import React from "react";
import ReactDom from "react-dom";
import RollDice from "./RollDice";

class App extends React.Component {
  render() {
    return (
      <div>
        <RollDice />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
