import { useState } from "react";
import "./Form.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          className="inputField"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Enter to do item.."
        />
        <button className="button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
