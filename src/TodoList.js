import React from "react";
import { useState } from "react";
import { myTasks, addTask } from "./Data/data";

export default function TodoList() {
  const [todos, setTodos] = useState(myTasks);

  function handleDoubleClick(name) {
    console.log("Double click detected" + name);
  }

  function submitTask(e) {
    e.preventDefault();
  }

  return (
    <>
      <ul>
        {myTasks.map((task) => (
          <li key={task.id} onDoubleClick={() => handleDoubleClick(task.text)}>
            {task.text}
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={(e) => submitTask(e)}>
          <NewTodo onAdd={(newTask) => setTodos([...todos, newTask])} />
        </form>
      </div>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState("");
  function handleAddClick() {
    setText("");
    onAdd(addTask(text));
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}
