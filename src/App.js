import "./App.css";
import TodoList from "./TodoList";

function App() {
  const name = "World";
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <TodoList />
    </div>
  );
}

export default App;
