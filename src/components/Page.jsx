import React, { useState } from "react";
import CreateItem from "./CreateItem";

function Page() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="page">
      <h2 className="page__title">To Do List</h2>
      <CreateItem />
      {todos.length === 0 ? (
        <div className="page__prompt">
          <h3>No Record</h3>
        </div>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
}

export default Page;
