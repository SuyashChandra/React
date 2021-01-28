import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      loading: true,
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/zen").then((response) => {
      setTimeout(
        function () {
          this.setState({ quote: response.data, loading: false });
        }.bind(this),
        3000
      );
    });
  }

  render() {
    return (
      <div>
        <h2>This is a random quote</h2>
        <h4>
          {this.state.loading ? (
            <div className="loader" id="loader-1"></div>
          ) : (
            this.state.quote
          )}
        </h4>
      </div>
    );
  }
}

export default ZenQuote;
