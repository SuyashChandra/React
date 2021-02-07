import React, { Component } from "react";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import Bengal from "./Bengal";
import Elephant from "./Elephant";
import AsiaticLion from "./AsiaticLion";
import Home from "./Home";
import "./Wildlife.css";

class Wildlife extends Component {
  static defaultProps = {
    image: [
      "https://wildlifesos.org/wp-content/uploads/2020/03/videos-background.jpg",
      "https://www.naturalworldsafaris.com/media/5406/tiger7-andrew-james.jpg",
      "https://wallpapercave.com/wp/wp2306486.jpg",
      "https://i.ytimg.com/vi/oFabBH0Jf5M/maxresdefault.jpg",
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      image:
        "https://wildlifesos.org/wp-content/uploads/2020/03/videos-background.jpg",
    };
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(img) {
    console.log(this.props);
    this.setState({
      image: this.props.image[img],
    });
  }

  render() {
    let image = {
      backgroundImage: `url(${this.state.image})`,
      backgroundSize: "cover",
    };
    return (
      <div className="Wildlife" style={image}>
        <div className="Wildlife-nav">
          <NavLink
            className="link"
            activeClassName="active"
            to="/"
            onClick={() => this.handleImage(0)}
          >
            <i className="em em-rhinoceros icon"></i>
          </NavLink>

          <NavLink
            className="link"
            activeClassName="active"
            to="/bengal"
            onClick={() => this.handleImage(1)}
          >
            Bengal Tiger
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active"
            to="/elephant"
            onClick={() => this.handleImage(2)}
          >
            Elephants
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active"
            to="/lion"
            onClick={() => this.handleImage(3)}
          >
            Asiatic Lion
          </NavLink>
        </div>
        <Route
          exact
          path="/"
          render={() => <Home handleClick={this.handleImage} />}
        />
        <Route
          exact
          path="/bengal"
          render={() => <Bengal handleClick={this.handleImage} />}
        />
        <Route
          exact
          path="/elephant"
          render={() => <Elephant handleClick={this.handleImage} />}
        />
        <Route
          exact
          path="/lion"
          render={() => <AsiaticLion handleClick={this.handleImage} />}
        />
      </div>
    );
  }
}

export default Wildlife;
