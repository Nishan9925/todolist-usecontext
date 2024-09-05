import { TodoContext } from "../../Context";
import { useContext } from "react";
import ToDoItem from "./ToDoItem";

const List = () => {
    const { todos, filter, onUpdate, onDelete } = useContext(TodoContext);
    let filtered = todos;
    if (filter == "active"){
        filtered = todos.filter(todo => !todo.completed)
    } else if (filter == "completed") {
        filtered = todos.filter(todo => todo.completed)
    }
    return (
        <>
            <p>showing: <strong>{filter}</strong></p>
            {filtered.map(todo => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}

        </>
    )
}

export default List;