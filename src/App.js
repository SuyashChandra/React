import React from "react";
import ReactDom from "react-dom";
import BoxList from "./BoxList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Color Boxes</h1>
        <BoxList />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
