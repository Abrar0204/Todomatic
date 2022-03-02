import React, { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (event) => {
    const { value } = event.target;
    setNewTodo(value);
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    if (!newTodo) {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: newTodo, isCompleted: false },
    ]);
    setNewTodo("");
  };

  return (
    <form onSubmit={addNewTodo} id="todo-form">
      <input name="addTodo" onChange={handleInput} value={newTodo} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
