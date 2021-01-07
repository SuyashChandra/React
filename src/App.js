import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import BrokenClick from "./BrokenClick";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Click Me</h1>
        <Button />
        <BrokenClick />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
