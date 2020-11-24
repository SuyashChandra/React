import React from "react";
import ReactDom from "react-dom";
import Rando from "./Rando";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pepega Couner</h1>
        <Rando max={5} />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
