import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(img) {
    this.props.handleClick(img);
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-Links">
          <NavLink to="/bengal" onClick={() => this.handleClick(1)}>
            Bengal Tigers
          </NavLink>
          <NavLink to="/elephant" onClick={() => this.handleClick(2)}>
            Indian Elephants
          </NavLink>
          <NavLink to="/lion" onClick={() => this.handleClick(3)}>
            Asiatic Lions
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
