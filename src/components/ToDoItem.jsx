import { TodoContext } from "../../Context";
import { useContext } from "react";
import "../App.css";
const ToDoItem = ({ todo, onUpdate, onDelete }) => {
  // const { todo } = useContext(TodoContext);
  return (
    <div className={"todo" + (todo.completed ? "done" : "")}>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onUpdate(todo.id)}>
        {todo.completed ? "Cancel" : "Complete"}
      </button>
    </div>
  );
};

export default ToDoItem;
