import React, { useState } from "react";

const TodoItem = ({ todo, todoIndex, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoInput, setEditTodoInput] = useState("");

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

  const toggleEdit = () => {
    setEditTodoInput(todo.text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) => {
        if (todoIndex === index) {
          return { ...todo, text: editTodoInput };
        } else {
          return todo;
        }
      })
    );
    setIsEditing(false);
  };

  const handleInput = (event) => {
    const { value } = event.target;
    setEditTodoInput(value);
  };

  return (
    <li>
      {isEditing ? (
        <input value={editTodoInput} onChange={handleInput} type="text" />
      ) : (
        <label>
          <input
            type="checkbox"
            deafultChecked={todo.isCompleted}
            onChange={checkOrUncheckTodo}
          />
          {todo.text}
        </label>
      )}
      <div className="button-group">
        {isEditing ? (
          <button onClick={saveEdit}>Save Edit</button>
        ) : (
          <button onClick={toggleEdit}>Edit Todo</button>
        )}

        <button onClick={deleteTodo} className="delete">
          Delete Todo
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
