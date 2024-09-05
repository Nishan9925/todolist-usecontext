import { TodoContext } from "../../Context";
import { useContext } from "react";
const FilterToDo = () => {
  const { filter, setFilter } = useContext(TodoContext);
  const list = ["all", "completed", "active"];
  return (
    <>
      {list.map((criteria) => (
        <button
          key={criteria}
          className={filter == criteria ? "button-active" : null}
          onClick={() => setFilter(criteria)}
        >{criteria}</button>
      ))}
    </>
  );
};

export default FilterToDo;
