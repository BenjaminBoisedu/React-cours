import React from "react";
import { useState } from "react";
import { myTasks } from "./Data/data";
import "./Tache.css";

export default function Tache() {
  const [check, setCheck] = useState(false);

  function handleClick() {
    setCheck((check) => !check);
  }

  function DoubleClick(name) {
    console.log(`You double clicked ${name}`);
  }

  return (
    <div>
      <ul>
        {myTasks.map((task) => (
          <li
            key={task.name}
            className="tasks"
            onDoubleClick={(name) => DoubleClick(task.name)}
          >
            <input type="checkbox" checked={check} onChange={handleClick} />
            <label>{task.name}</label>

            <p>You {check ? "done" : "did not make"} this.</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
