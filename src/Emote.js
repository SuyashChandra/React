import React, { Component } from "react";

class Emote extends Component {
  render() {
    return <img src={this.props.src} />;
  }
}

export default Emote;
