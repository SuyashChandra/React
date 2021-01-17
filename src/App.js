import React from "react";
import ReactDom from "react-dom";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
