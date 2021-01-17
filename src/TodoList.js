import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(newTodo) {
    console.log(newTodo);
    this.setState(
      (state) => ({
        todos: [...state.todos, newTodo],
      }),
      console.log(this.state)
    );
  }

  render() {
    return (
      <div>
        <NewTodoForm createTodo={this.createTodo} />
        {this.state.todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
      </div>
    );
  }
}

export default TodoList;
