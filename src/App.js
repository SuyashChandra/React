import React from "react";
import ReactDom from "react-dom";
import Gamba from "./Gamba";

class App extends React.Component {
  render() {
    return (
      <div>
        <Gamba />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
