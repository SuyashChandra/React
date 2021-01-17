import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTask = this.handleTask.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo(this.state);
  }

  handleTask(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Add Task</label>
        <input id="todo" name="todo" onChange={this.handleTask} />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
