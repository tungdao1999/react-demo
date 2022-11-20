import { useState } from "react";
import "./List.css";

function Item(props) {
  return (
    <li className="item-container">
        <p className="list-text">{props.item}</p>
        <div className="buttons">
          <button
            className="list-button"
            onClick={() => props.openPopup(props.item)}
          >
            Edit
          </button>
          <button
            className="list-button"
            onClick={() => {
              props.del(props.item);
            }}
          >
            Del
          </button>
        </div>
  </li>
  );
}
export default Item;
