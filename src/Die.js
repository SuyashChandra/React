import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    let { val, locked, disabled, isRolling } = this.props;
    const die = ["one", "two", "three", "four", "five", "six"][val - 1];
    let classes = `Die fas fa-dice-${die} fa-5x`;
    if (locked) classes += ` Die-locked`;
    if (isRolling) classes += ` Die-rolling`;
    return (
      <i className={classes} onClick={this.toggle} disabled={disabled}></i>
    );
  }
}

export default Die;
