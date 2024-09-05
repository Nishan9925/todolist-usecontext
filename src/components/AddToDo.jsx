import { TodoContext } from "../../Context";
import { useContext, useState } from "react";

const AddToDo = () => {
  const { todos, onAdd } = useContext(TodoContext);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    } 
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddToDo;
