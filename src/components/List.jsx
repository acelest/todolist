import { useState } from "react";
import Items from "./items";
import "./todoApp.scss";

export default function List() {
  const [itemTodo, setItemTodo] = useState("");
  const [List, setList] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItemTodo(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: itemTodo,
      completed: false,
    };

    function handleUpdate() {}
    function handleDelete() {}

    setList([...List, newTodo]);
    setItemTodo("");
  }
  return (
    <>
      <div className="todoContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit">Create task</button>
        </form>
        <div className="todoContainer">
          <ul className="listTodo">
            {List.map((item) => {
              <Items
                key={item.id}
                item={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
