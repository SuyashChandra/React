import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";

import GoldenPup from "./images/GoldenPup.jpg";
import ShibaPup from "./images/ShibaPup.jpg";
import SpitzPup from "./images/SpitzPup.jpg";

class DogApp extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Tubby",
        age: 1,
        src: GoldenPup,
        facts: [
          "Tubby loves eating popcorn",
          "Tubby is a terrible guard dog",
          "Tubby wants to cuddle with you",
        ],
      },
      {
        name: "Hazel",
        age: 1,
        src: ShibaPup,
        facts: [
          "Hazel loves to growl",
          "Hazel is highly energetic",
          "Hazel loves tries to be a guard dog",
        ],
      },
      {
        name: "Whiskey",
        age: 1,
        src: SpitzPup,
        facts: [
          "Whiskey loves to play",
          "Whiskey loves to go on a walk",
          "Whiskey has a small paw",
        ],
      },
    ],
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default DogApp;
