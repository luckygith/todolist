import React, { useEffect, useState } from "react";
import CreateItem from "./CreateItem";
import axios from "axios";
import "../blocks/List.css";

import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

function List({ todos, fetchTodos, handleEditCheck, handleDeleteTask }) {
  // const fetchTodos = () => {
  //   getTodos()
  //     .then((result) => {
  //       setTodos(result.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const handleTesting = (_id) => {
  //   console.log("handle testing");
  //   console.log(_id);
  // };

  return (
    <div className="list">
      <h2 className="list__title">To Do List</h2>
      <CreateItem onAdd={fetchTodos} />
      {todos.length === 0 ? (
        <div className="list__prompt">
          <h3>No Record</h3>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="list__task">
            <div
              className="list__task-checkbox"
              onClick={() => handleEditCheck(todo._id)}
            >
              {todo.done ? (
                <BsFillCheckCircleFill
                  className="list__task-check"
                  onClick={handleTesting}
                />
              ) : (
                <BsCircleFill className="list__task-circle" />
              )}
              <p
                className={
                  todo.done
                    ? "list__task-item list__task-item-done"
                    : "list__task-item list__task-item-undone"
                }
              >
                {todo.task}
              </p>
            </div>
            <div
              className="list__task-trash-container"
              onClick={() => handleDeleteTask(todo._id)}
            >
              <BsFillTrashFill className="list__task-trash"></BsFillTrashFill>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default List;
