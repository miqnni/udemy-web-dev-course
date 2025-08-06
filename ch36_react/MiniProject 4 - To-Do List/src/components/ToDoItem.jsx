import React, { useState } from "react";

export default function ToDoItem(props) {
  const { task, onDeleteButtonClicked } = props;

  const [isCompleted, setIsCompleted] = useState(false);

  function completeTask() {
    setIsCompleted((prevIsCompleted) => !prevIsCompleted);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <li
        onClick={completeTask}
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {task}
      </li>
      <button onClick={onDeleteButtonClicked}>Delete</button>
    </div>
  );
}
