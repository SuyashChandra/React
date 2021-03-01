import { syncBuiltinESMExports } from "module";
import React, {Component} from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers"

class App extends Component {
    render() {
        console.log(generatePalette(seedColors[3]))
        return(
            <Palette {...seedColors[4]}></Palette>
        )
    }
}

export default App