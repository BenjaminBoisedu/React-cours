import React from "react";
import { useState } from "react";
import { myTasks } from "./Data/data";
import "./Tache.css";

export default function Tache() {
  function DoubleClick(e) {
    console.log("Double click on " + e);
  }

  return (
    <div>
      <ul>
        {myTasks.map((task) => (
          <li
            key={task.name}
            className="tasks"
            onDoubleClick={(e) => DoubleClick(task.name)}
          >
            <input type="checkbox" />
            <label>{task.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
