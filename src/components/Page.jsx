import React, { useEffect, useState } from "react";
import CreateItem from "./CreateItem";
import axios from "axios";
import "../blocks/Page.css";
import { getTodos, updateTodo, deleteTodo } from "../utils/api";

import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

function Page() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    getTodos()
      .then((result) => {
        setTodos(result.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEditCheck = (id) => {
    updateTodo(id)
      .then((result) => {
        fetchTodos();
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteTask = (id) => {
    deleteTodo(id).then((result) => {
      console.log(result);
      handleDeleteTask();
      fetchTodos();
    });
  };

  const handleTesting = (_id) => {
    console.log("handle testing");
    console.log(_id);
  };

  return (
    <div className="page">
      <h2 className="page__title">To Do List</h2>
      <CreateItem onAdd={fetchTodos} />
      {todos.length === 0 ? (
        <div className="page__prompt">
          <h3>No Record</h3>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className="page__task">
            <div
              className="page__task-checkbox"
              onClick={() => handleEditCheck(todo._id)}
            >
              {todo.done ? (
                <BsFillCheckCircleFill
                  className="page__task-check"
                  onClick={handleTesting}
                />
              ) : (
                <BsCircleFill className="page__task-circle" />
              )}
              <p
                className={
                  todo.done
                    ? "page__task-item page__task-item-done"
                    : "page__task-item page__task-item-undone"
                }
              >
                {todo.task}
              </p>
            </div>
            <div
              className="page__task-trash-container"
              onClick={() => handleDeleteTask(todo._id)}
            >
              <BsFillTrashFill className="page__task-trash"></BsFillTrashFill>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Page;
