import React from "react";
import ReactDom from "react-dom";
import Machine from "./Machine";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Krappa Machine!!!</h1>
        <Machine kamo1="(╯°□°）╯︵ ┻━┻" kamo2="༼ つ ◕_◕ ༽つ" kamo3="(⌐■_■)" />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
