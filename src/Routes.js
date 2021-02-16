import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import Dog from "./Dog";

class Routes extends Component {
  render() {
    const DogDetail = (props) => {
      const dog = this.props.dogs.find(
        (dog) =>
          dog.name.toLowerCase() === props.match.params.name.toLowerCase()
      );

      return <DogList dog={dog} />;
    };

    return (
      <Switch>
        <Route
          exact
          path="/dog"
          render={() => <Dog dogs={this.props.dogs} />}
        />
        <Route exact path="/dog/:name" render={DogDetail} />
        <Redirect exact to="/dog" />
      </Switch>
    );
  }
}

export default Routes;
