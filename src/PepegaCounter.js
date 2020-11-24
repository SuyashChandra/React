import React, { Component } from "react";

class PepegaCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pepeScore: 0,
      gameOver: false,
    };
  }

  render() {
    return (
      <div>
        <h3>Pepega Meter: {this.state.pepeScore}</h3>
      </div>
    );
  }
}

export default PepegaCounter;
