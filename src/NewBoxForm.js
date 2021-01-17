import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "", height: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.boxSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width: </label>
        <input id="width" name="width" onChange={this.handleChange}></input>

        <label htmlFor="height">Height: </label>
        <input id="height" name="height" onChange={this.handleChange}></input>

        <label htmlFor="color">color: </label>
        <input id="color" name="color" onChange={this.handleChange}></input>

        <button>Add Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
