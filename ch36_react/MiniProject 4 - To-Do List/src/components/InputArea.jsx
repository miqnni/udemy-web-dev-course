import React, { useState } from "react";

export default function InputArea(props) {
  const [newTaskInputText, setNewTaskInputText] = useState("");

  function handleChange(e) {
    setNewTaskInputText(e.target.value);
  }

  const { onAdd } = props;
  return (
    <div className="form">
      <input
        name="newTask"
        value={newTaskInputText}
        type="text"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onAdd(newTaskInputText);
          setNewTaskInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
