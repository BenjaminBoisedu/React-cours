import "./App.css";
import Taches from "./Taches";

function App() {
  const name = "World";
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <Taches/>
    </div>
  );
}

export default App;
