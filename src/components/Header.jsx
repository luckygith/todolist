import React, { Component } from "react";
import "../blocks/Header.css";
import { IoAddCircleOutline } from "react-icons/io5";

function Header({ handleCreateNewListClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="header">
      <p className="header__date">{currentDate}</p>

      <IoAddCircleOutline
        type="button"
        className="header__add-list-button"
        onClick={handleCreateNewListClick}
      />
    </div>
  );
}

export default Header;
