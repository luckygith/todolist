import React, { Component } from "react";
import "../blocks/Header.css";

function Header({ handleCreateNewList }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="header">
      <p className="header__date">{currentDate}</p>
      <p className="header__add-list" onClick={() => handleCreateNewList()}>
        +
      </p>
    </div>
  );
}

export default Header;
