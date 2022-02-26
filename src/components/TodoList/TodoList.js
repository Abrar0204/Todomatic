import React from "react";

export const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li>
            <label>
              <input type="checkbox" checked={todo.isCompleted} />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
