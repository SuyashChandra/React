import React from "react";
import ReactDom from "react-dom";
import CardDeck from "./CardDeck";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Card Deck</h1>
        <CardDeck />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
