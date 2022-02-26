import React, { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (event) => {
    const { value } = event.target;
    setNewTodo(value);
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: newTodo, isCompleted: false },
    ]);
  };

  return (
    <form onSubmit={addNewTodo}>
      <input name="addTodo" onChange={handleInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
