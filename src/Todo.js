import React, { Component } from "react";
// import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, todo: "" };
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.update = this.update.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  edit() {
    this.setState((state) => {
      return {
        editing: !state.editing,
      };
    });
    // this.props.edit(this.props.todo.id);
  }

  update() {
    // console.log(this.props.todo.id);
    this.props.update(this.state.todo, this.props.todo.id);
    this.setState({
      editing: false,
    });
  }

  updateInput(evt) {
    this.setState({
      todo: evt.target.value,
    });
  }

  remove() {
    this.props.remove(this.props.todo.id);
  }
  render() {
    // console.log(this.props.todo);
    return (
      <li>
        <div style={{ display: "flex" }}>
          <div>
            {this.state.editing ? (
              <input onChange={this.updateInput} />
            ) : (
              this.props.todo.todo
            )}
          </div>
          {this.state.editing ? (
            <button onClick={this.update}>Done</button>
          ) : (
            <button onClick={this.edit}>Edit</button>
          )}

          <button onClick={this.remove}>X</button>
        </div>
      </li>
    );
  }
}

export default Todo;
