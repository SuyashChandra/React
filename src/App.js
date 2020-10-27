import React from "react";
import ReactDom from "react-dom";
import Number from "./Number";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Standard React Layout. POG!</h1>
        <Number />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
