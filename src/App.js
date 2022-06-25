import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "take dogs for a walk",
    "take the rubbish out",
    "livestream today",
  ]);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault(); // will stop the REFRESH
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello Programmers!!</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={addTodo}>Add todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
