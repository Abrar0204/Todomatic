import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Bake Cake", isCompleted: false },
  ]);

  return (
    <>
      <h1>Welcome to Todomatic!!</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
};

export default App;
