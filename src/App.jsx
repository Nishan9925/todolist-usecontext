import "./App.css";
import { useState } from "react";
import { TodoContext } from "../Context";
import ToDoList from "./components/ToDoList";
function App() {
  const [todos, setTodos] = useState([
    { id: 101, text: "Go for a walk", completed: false },
    { id: 102, text: "Buy groceries", completed: true },
    { id: 103, text: "Read a book", completed: false },
  ]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const handleAdd = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };
  const handleUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id != id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  }
  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          onAdd: handleAdd,
          onUpdate: handleUpdate,
          filter: currentFilter,
          setFilter: setCurrentFilter,
          onDelete: onDelete,
        }}
      >
        <ToDoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
