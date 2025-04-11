import React, { useEffect, useState } from "react";
import CreateItem from "./CreateItem";
import axios from "axios";

function Page() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleCheckbox = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="page">
      <h2 className="page__title">To Do List</h2>
      <CreateItem />
      {todos.length === 0 ? (
        <div className="page__prompt">
          <h3>No Record</h3>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="page__task">
            <input
              type="checkbox"
              onClick={() => {
                handleCheckbox(todo._id);
              }}
            />
            <span className="checkmark">
              <p className="page__task-item">{todo.task}</p>
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default Page;
