import React, { Component } from "react";

function CreateItem() {
  return (
    <div className="create-item">
      <input type="text" className="create-item__input" placeholder="task" />
      <button type="submit" className="create-item__submit">
        Add
      </button>
    </div>
  );
}

export default CreateItem;
