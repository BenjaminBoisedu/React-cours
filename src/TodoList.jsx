import { TodoItem } from "./TodoItem";
import React from "react";
import "./todolist.css";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  const SortedTodos = todos.sort((a, b) => {
    return Number(a.completed) - Number(b.completed);
  });

  return (
    <ul className="list">
      {todos.length === 0 && "No todos to display"}
      {SortedTodos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
