import React from "react";
import { useState } from "react";
import { myTasks, addTask } from "./Data/data";

export default function TodoForm() {
  const [input, setInput] = useState("");
  function handleClick(e) {
    alert("A task was submitted: " + input);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleClick(e)}>
          Add
        </button>
      </form>
    </div>
  );
}
