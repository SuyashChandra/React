import React from "react";
import ReactDOM from "react-dom";

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class Number extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your number is...{num}</h1>
        <p>{num === 7 ? "Pog Pog Pog!!!!!" : "Kappa!!!"}</p>
      </div>
    );
  }
}

ReactDOM.render(<Number />, document.getElementById("root"));
