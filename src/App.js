import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import $ from "jquery";
// import Popper from "popper.js";
// import bootstrap from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import DogApp from "./DogApp";

class App extends React.Component {
  render() {
    return <DogApp />;
  }
}
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
