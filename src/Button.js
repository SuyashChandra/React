import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={function () {
            alert("You Clicked Me!");
          }}
        >
          Alert
        </button>
      </div>
    );
  }
}

export default Button;
