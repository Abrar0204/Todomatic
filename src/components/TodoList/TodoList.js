import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} todoIndex={index} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
