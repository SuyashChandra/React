import React, { Component } from "react";

class Box extends Component {
  render() {
    let styles = {
      height: `${this.props.height}em`,
      width: `${this.props.width}em`,
      backgroundColor: `${this.props.color}`,
    };
    console.log(this.props);
    return <div style={styles}></div>;
  }
}

export default Box;
