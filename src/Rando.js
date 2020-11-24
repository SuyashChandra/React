import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.timer();
  }
  timer() {
    setInterval(() => {
      let newNum = Math.floor(Math.random() * this.props.max);
      this.setState({ num: newNum });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>
          Random upto {this.props.max}: {this.state.num}
        </h1>
      </div>
    );
  }
}
export default Rando;
