import "./App.css";
import InputTodo from "./Components/Input/InputTodo";
import Todo from "./Components/List/Todo";

function App() {
  return (
    <div className="App">
      <Todo />
      <InputTodo />
    </div>
  );
}

export default App;
