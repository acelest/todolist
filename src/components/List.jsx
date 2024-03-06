import { useState } from "react";
import Items from "./items";
import "./todoApp.scss";

const TodoApp = () => {
  const [itemTodo, setItemTodo] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItemTodo(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9), // Génération d'un identifiant unique
      title: itemTodo,
      completed: false,
    };
    setList([...list, newTodo]);
    setItemTodo("");
  }

  function handleUpdate(id, value) {
    const temp = [...list];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setList(temp);
  }

  function handleDelete(id) {
    const temp = list.filter((item) => item.id !== id);
    setList(temp);
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={itemTodo} />
        <button type="submit">Créer une tache</button>
      </form>

      <div className="todoContainer">
        <ul className="listTodo">
          {list.map((item) => (
            <Items
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
