import React from "react";
import ReactDom from "react-dom";
import EmoteContainer from "./EmoteContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <EmoteContainer />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
