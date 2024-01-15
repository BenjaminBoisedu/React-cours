import React from "react";
import { useState } from "react";
import Tache from "./Tache";
import TodoForm from "./TodoForm";

export default function TodoList() {
  return (
    <div>
      <ul>
        <Tache />
        <TodoForm />
      </ul>
    </div>
  );
}
