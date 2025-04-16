import React, { Component, useState } from "react";
import "../blocks/CreateNewListModal.css";
import ModalWithForm from "./ModalWithForm";
import { createList } from "../utils/api";

function CreateNewListModal({
  isOpen,
  handleCloseModal,
  handleAddList,
  list,
  setList,
}) {
  const [title, setTitle] = useState("");
  // const [list, setList] = useState("");

  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleAddList();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddList();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      // onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="modal__container">
        <label htmlFor="list-title" className="modal__label">
          List Title{" "}
          <input
            type="text"
            className="modal__input"
            id="title"
            name="list title"
            placeholder="Title name"
            value={list}
            onChange={(e) => setList(e.target.value)}
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
