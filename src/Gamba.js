import React, { Component } from "react";
import Face from "./Face.js";
import "./Gamba.css";

class Gamba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: "https://cdn.betterttv.net/emote/5630bc37f398067005cab6fd/3x",
      gambas: 0,
      catJAM: 0,
      PepePls: 0,
    };
    this.handleGamba = this.handleGamba.bind(this);
  }

  handleGamba(e) {
    let ran = Math.floor(Math.random() * 2);
    ran
      ? this.setState((curState) => {
          return {
            face: "https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/3x",
            gambas: curState.gambas + 1,
            catJAM: curState.catJAM + 1,
          };
        })
      : this.setState((curState) => {
          return {
            face: "https://cdn.betterttv.net/emote/55898e122612142e6aaa935b/3x",
            gambas: curState.gambas + 1,
            PepePls: curState.PepePls + 1,
          };
        });
  }
  render() {
    return (
      <div className="gamba">
        <h1>Lets Flip a coin!</h1>
        <Face face={this.state.face} />
        <button onClick={this.handleGamba}>Gamba!!</button>
        <p>
          Out of {this.state.gambas} Gambas, there have been {this.state.catJAM}{" "}
          catJAMs and {this.state.PepePls} PepePls.
        </p>
      </div>
    );
  }
}

export default Gamba;
