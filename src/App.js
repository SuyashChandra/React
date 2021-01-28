import React from "react";
import ReactDom from "react-dom";
import GithubUser from "./GithubUser";

class App extends React.Component {
  render() {
    return (
      <div>
        <GithubUser username="SuyashChandra" />
        <GithubUser username="twitchtv" />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
