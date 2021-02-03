import React from "react";
import ReactDom from "react-dom";
import Dashboard from "./Dashboard";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <i className="em-man-facepalming"></i>
        <Dashboard />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
