import React from "react";

export class TodoList extends React.Component {
  constructor() {
    super();
    this.list = [{ title: "Todo 1" }, { title: "Todo 2" }];
  }

  render() {
    return (
      <div>
        Todo List
        <ul>
          {this.list.map((todo, i) => {
            return <li key={i}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
