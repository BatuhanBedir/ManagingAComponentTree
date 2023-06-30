import React, { useState } from "react";

function ToDoItem(props) {
  //1- const [isDone, setIsDone] = useState(false);

  function handleClick() {
    //1- setIsDone((prevValue) => {
    //1-   return !prevValue;
    //1- });
  }
  return (
    //1- <div onClick={handleClick}>
    //1-   <li style={{textDecoration: isDone ? "line-through": "none"}}>{props.text}</li>;
    //1- </div>
    // <div onClick={props.onChecked(props.id)}>-->Executed on render
    <div
      onClick={() => {
        //Executed on click
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
