import React, { Component, useState } from "react";
import axios from "axios";

function CreateItem() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="create-item">
      <input
        type="text"
        className="create-item__input"
        placeholder="task"
        onChange={(e) => setTask(e.target.value)}
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
