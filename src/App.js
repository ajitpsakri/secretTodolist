import React from "react";

import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container">
      <div className="mx-auto" style={{ width: 200 }}>
        <h1 className="font-weight-bolder">To-do List</h1>

        <Todo />
      </div>
    </div>
  );
}

export default App;
