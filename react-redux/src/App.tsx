import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Todos from "./todos";

function App() {
  return (
    <div className="App">
      <Todos />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
