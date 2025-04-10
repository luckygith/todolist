import React, { useState } from "react";
import CreateItem from "./CreateItem";

function Page() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="page">
      <h2 className="page__title">To Do List</h2>
      <CreateItem />
      {todos.length === 0 ? (
        <div className="page__list">
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
}

export default Page;
