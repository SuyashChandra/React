import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    console.log(this.props.face);
    return (
      <i
        className={` Die fas fa-dice-${this.props.face} ${
          this.props.rolling && "shaking"
        }`}
      ></i>
    );
  }
}

export default Die;
