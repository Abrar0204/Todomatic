import React from "react";

const TodoItem = ({ todo, todoIndex, setTodos }) => {
  const deleteTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => todoIndex !== index)
    );
  };

  const checkOrUncheckTodo = (event) => {
    const checked = event.target.checked;
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) => {
        if (todoIndex === index) {
          return { ...todo, isCompleted: !checked };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          deafultChecked={todo.isCompleted}
          onChange={checkOrUncheckTodo}
        />
        {todo.text}
      </label>
      <br />
      <button onClick={deleteTodo}>Delete Todo</button>
    </li>
  );
};

export default TodoItem;
