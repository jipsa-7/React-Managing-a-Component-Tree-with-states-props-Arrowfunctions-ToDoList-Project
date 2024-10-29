import React, { useState } from "react";
function ToDoItem(props) {
  const [isCrossed, setCrossed] = useState(false);
  function changeAppearance() {
    setCrossed((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={changeAppearance}
      style={{ textDecoration: isCrossed ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}
export default ToDoItem;
