import React from "react";
export function TodoItem({
  completed,
  id,
  title,
  date,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className="list__item">
      <label htmlFor="">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <span role="img" aria-label="delete">
          ❌
        </span>
      </button>
    </li>
  );
}
