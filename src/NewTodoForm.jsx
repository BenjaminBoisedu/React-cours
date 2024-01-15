import { useState } from "react";

export function NewTodoForm(onSubmit) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="newItem">New Item</label>
        <input
          type="text"
          id="newItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
