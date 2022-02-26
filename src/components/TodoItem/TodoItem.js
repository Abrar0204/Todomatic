import React from "react";

const TodoItem = ({ todo, todoIndex, setTodos }) => {
  const deleteTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => todoIndex !== index)
    );
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} />
        {todo.text}
      </label>
      <br />
      <button onClick={deleteTodo}>Delete Todo</button>
    </li>
  );
};

export default TodoItem;
