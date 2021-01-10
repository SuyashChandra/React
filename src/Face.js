import React, { Component } from "react";

class Face extends Component {
  render() {
    return <img src={this.props.face}></img>;
  }
}

export default Face;
