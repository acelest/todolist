import { useState } from "react";
import Items from "./items";
import "./todoApp.scss";
export default function list() {
  const [itemTodo, setitemTodo] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setitemTodo(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: itemTodo,
      completed: false,
    };

    function handleUpdate(id, value) {
      const temp = [...list];
      const item = temp.find((item) => item, id === id);
      item.title;
    }
    setList([...list, newTodo]);
    setitemTodo("");
  }
}

return (
  <>
    <div className="todoContainer">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Creer une tache </button>
        <p>{list}</p>
      </form>
      <div className="todoContainer">
        <ul>
          {list.map((item) => {
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
