import { syncBuiltinESMExports } from "module";
import React, { Component } from "react";
import Palette from "./Palette";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List goes here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual Palette list goes here</h1>}
        />
      </Switch>
      // <div>
      //     <Palette palette={generatePalette(seedColors[4])}></Palette>
      // </div>
    );
  }
}

export default App;
