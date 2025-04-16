import React, { Component, useState } from "react";
import axios from "axios";

import "../blocks/CreateItem.css";
import { createTodo } from "../utils/api";

function CreateItem({ fetchTodos }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    createTodo({ task: task })
      .then((result) => {
        console.log(result);
        fetchTodos();
        setTask("");
      })
      .catch((error) => console.log(error));
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="create-item">
      <input
        type="text"
        className="create-item__input"
        placeholder="task"
        value={task} // binding value of input to task to be able to reset setTask to ""
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button
        type="submit"
        className="create-item__submit"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}

export default CreateItem;
