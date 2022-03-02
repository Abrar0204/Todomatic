import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Bake Cake", isCompleted: false },
  ]);

  return (
    <div id="todo-container">
      <h1 className="todo-heading">Welcome to Todomatic!!</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
