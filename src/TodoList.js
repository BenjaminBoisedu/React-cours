import { useState, useEffect } from "react";
import { myTasks, addTask } from "./Data/data";
import "./todolist.css";

export default function TodoList() {
  const [todos, setTodos] = useState(myTasks);
  const [showActive, setShowActive] = useState(false);
  const [activeTodos, setActiveTodos] = useState([]);
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [footer, setFooter] = useState(null);
  const [check, setCheck] = useState(false);

  function handleDoubleClick(name) {
    console.log("Double click detected" + name);
  }

  useEffect(() => {
    setActiveTodos(todos.filter((todo) => !todo.done));
  }, [todos]);

  useEffect(() => {
    setVisibleTodos(showActive ? activeTodos : todos);
  }, [showActive, todos, activeTodos]);

  useEffect(() => {
    setFooter(<footer>{activeTodos.length} todos left</footer>);
  }, [activeTodos]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} />
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      {footer}
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
