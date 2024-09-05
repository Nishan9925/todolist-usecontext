import AddToDo from "./AddToDo";
import FilterToDo from "./FilterToDo";
import List from "./List";
import "../App.css";
const ToDoList = () => {
  return (
    <>
      <AddToDo />
      <FilterToDo />
      <List />
    </>
  );
};

export default ToDoList;
