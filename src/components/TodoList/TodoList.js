import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div id="todo-list-container">
      <h2>Tasks:</h2>
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            todoIndex={index}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
