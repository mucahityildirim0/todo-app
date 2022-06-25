import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "take dogs for a walk",
    "take the rubbish out",
    "livestream today",
  ]);

  return (
    <div className="App">
      <h1>Hello Programmers!!</h1>
      <input type="text" />
      <button>Add todo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
