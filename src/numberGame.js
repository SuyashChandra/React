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
        {num === 7 ? (
          <img src="https://media.tenor.com/images/03b867efbe3f723cf2653a196ca6e571/tenor.gif" />
        ) : (
          <img src="https://media1.tenor.com/images/e6dbfa8422743bac826cea8d304c0322/tenor.gif?itemid=15954478" />
        )}
      </div>
    );
  }
}

ReactDOM.render(<Number />, document.getElementById("root"));
