import React from "react";
import ReactDom from "react-dom";
import Wildlife from "./Wildlife";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return <Wildlife />;
  }
}
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
