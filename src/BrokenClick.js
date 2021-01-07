import React, { Component } from "react";

class BrokenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.click = this.click.bind(this);
  }

  click(e) {
    let newClick = !this.state.clicked;
    this.setState({ clicked: newClick });
  }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!" : "Click Me!"}</h1>
        <button onClick={this.click}>Click Me Too!</button>
      </div>
    );
  }
}

export default BrokenComponent;
