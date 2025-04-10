import React, { Component } from "react";

function CreateItem() {
  return (
    <div>
      <input type="text" className="create-item__input" />
      <button type="submit" className="create-item__button">
        Add
      </button>
    </div>
  );
}

export default CreateItem;
