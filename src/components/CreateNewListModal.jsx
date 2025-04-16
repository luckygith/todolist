import React, { Component, useState } from "react";
import "../blocks/CreateNewListModal.css";
import ModalWithForm from "./ModalWithForm";
import { createList } from "../utils/api";

function CreateNewListModal({ isOpen, handleCloseModal }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New list title:", title);
    handleCloseModal();
    setTitle("");
  };

  // function CreateList({ onAdd })

  // {
  const [list, setList] = useState("");

  const handleAddList = () => {
    createList({ list: list })
      .then((result) => {
        console.log(result);
        fetchLists();
        setList("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="modal__container">
        <label className="modal__label">
          List Title{" "}
          <input
            type="text"
            className="modal__input"
            id="title"
            name="list title"
            placeholder="Title name"
            value={title}
            onChange={handleChange}
            onKeyDown={handleEnterKey}
          />
        </label>

        <div className="modal__buttons-container">
          <button
            type="submit"
            className="modal__form-submit"
            // disabled={isLoading || isDisabled}f
            onClick={() => handleAddList()}
          >
            Create new list
            {/* {isLoading ? "Signing Up" : "Sign Up"} */}
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default CreateNewListModal;
