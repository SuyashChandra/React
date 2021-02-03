import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    // this.handleEmoji = this.handleEmoji.bind(this);
  }

  handleUp() {
    this.props.handleLike(this.props.jokeId);
  }
  handleDown() {
    this.props.handleDislike(this.props.jokeId);
  }

  getColor() {
    if (this.props.likes >= 15) {
      return "#4CAF50";
    } else if (this.props.likes >= 12) {
      return "#8BC34A";
    } else if (this.props.likes >= 9) {
      return "#CDDC39";
    } else if (this.props.likes >= 6) {
      return "#FFEB3B";
    } else if (this.props.likes >= 3) {
      return "#FFC107";
    } else if (this.props.likes >= 0) {
      return "#FF9800";
    } else {
      return "#F44336";
    }
  }

  handleEmoji() {
    if (this.props.likes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.likes >= 12) {
      return "em em-laughing";
    } else if (this.props.likes >= 9) {
      return "em em-smiley";
    } else if (this.props.likes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.likes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.likes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  render() {
    console.log(this.props.likes);

    // console.log(emoji);
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <FontAwesomeIcon
            icon={faArrowUp}
            onClick={this.handleUp}
            className="Font-Awesome up"
          />

          <span className="Joke-Like" style={{ borderColor: this.getColor() }}>
            {this.props.likes}
          </span>

          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={this.handleDown}
            className="Font-Awesome down"
          />
        </div>

        <div className="Joke-Joke">{this.props.joke}</div>

        <i className={this.handleEmoji() + " Joke-emoji"}></i>
      </div>
    );
  }
}

export default Joke;
