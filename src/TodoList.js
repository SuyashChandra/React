import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.createTodo = this.createTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  createTodo(todo) {
    // console.log(todo);
    this.setState({ todos: [...this.state.todos, todo] });
  }

  remove(evt) {
    console.log("remove", evt);
    this.setState({
      todos: this.state.todos.filter((entry) => entry.id !== evt),
    });
  }

  update(ntodo, id) {
    console.log(ntodo);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) return { id: id, todo: ntodo };
        else return todo;
      }),
    });
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div>
        <NewTodoForm createTodo={this.createTodo} />
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                remove={this.remove}
                update={this.update}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
