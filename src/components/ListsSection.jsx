import React from "react";
import List from "./List";

import React, { Component } from "react";

function ListsSection() {
  return (
    // <div>
    //   <h1>Hello from ListsSection!</h1>
    // </div>

    <div className="lists-section">
      <div className="lists-section__container">
        <p className="lists-section__title">Your Lists</p>
        <button
          type="button"
          onClick={handleAddClick}
          className="lists-section__add-lists-button"
        >
          + Create New List
        </button>
      </div>

      <ul className="lists__list">
        {isOwnClothingItems.map((item) => {
          // takes each item from ownlists array and returns as itemcard
          return (
            <List list={list} />
            // <ItemCard
            //   item={item}
            //   key={item._id}
            //   handleCardClick={handleCardClick}
            // />
          );
        })}
      </ul>
    </div>
  );
}

export default ListsSection;
