import React, { useState } from "react";
import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Bake Cake", isCompleted: false },
  ]);

  return (
    <>
      <h1>Welcome to Todomatic!!</h1>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
