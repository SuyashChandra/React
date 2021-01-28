import React from "react";
import ReactDom from "react-dom";
import ZenQuote from "./ZenQuote";

class App extends React.Component {
  render() {
    return (
      <div>
        <ZenQuote />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
