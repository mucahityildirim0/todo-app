import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@mui/material";
import { FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState(["abc", "def"]);

  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection("todos").onSnapShot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // will stop the REFRESH
    setTodos([...todos, input]);
    setInput(""); // clear up the input after clicking add todo button
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>Hello Programmers!!</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="success"
        >
          Add ToDo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
