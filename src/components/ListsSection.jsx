import List from "./List";

import React, { Component } from "react";

function ListsSection({
  lists,
  todos,
  fetchTodos,
  handleEditCheck,
  handleDeleteTask,
  fetchLists,
}) {
  return (
    <div className="lists-section">
      <div className="lists-section__container">
        <p className="lists-section__title">Your Lists</p>
      </div>

      <ul className="lists__list">
        {lists.map((list) => (
          <List
            key={list._id}
            list={list}
            todos={todos}
            fetchTodos={fetchTodos}
            handleEditCheck={handleEditCheck}
            handleDeleteTask={handleDeleteTask}
            fetchLists={fetchLists}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListsSection;
