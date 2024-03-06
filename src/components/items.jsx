import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleChange(e) {
      setNewValue(e.target.value);
    }

    function handleClickUpdate(e) {
      e.preventDefault();
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }

    return (
      <form onSubmit={handleClickUpdate}>
        <input type="text" onChange={handleChange} defaultValue={newValue} />
        <button type="submit">Modifier</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <>
        <div key={item.id} className="title">
          {item.title}
        </div>
        <div className="settings">
          <button onClick={() => setIsEdit(true)}>
            <CiEdit />
          </button>
          <button onClick={() => onDelete(item.id)}>
            <FaTrash />
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="todo">
      <li className="cardTodo">{isEdit ? <FormEdit /> : <TodoElement />}</li>
    </div>
  );
}
