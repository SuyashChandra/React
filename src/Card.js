import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    const deg = Math.random() * 90 - 45;
    const xheight = Math.random() * 40 - 20;
    const zheight = Math.random() * (40 - 20);
    this._transform = `translate(${xheight}px, ${zheight}px) rotate(${deg}deg)`;
  }
  render() {
    return (
      <div>
        <img
          style={{ transform: this._transform }}
          className="Card"
          src={this.props.src}
        />
      </div>
    );
  }
}

export default Card;
