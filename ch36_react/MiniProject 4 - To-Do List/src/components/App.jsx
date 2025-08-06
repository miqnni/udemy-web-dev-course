import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [allTasks, setAllTasks] = useState([
    {
      id: uuidv4(),
      content: "An Item",
    },
  ]);

  function addTask(newTaskContent) {
    const taskId = uuidv4();
    setAllTasks([...allTasks, { id: taskId, content: newTaskContent }]);
  }

  function deleteTask(task) {
    setAllTasks([...allTasks].filter((currTask) => currTask.id !== task.id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addTask} />
      <div>
        <ul>
          {allTasks.map((task) => {
            return (
              <ToDoItem
                key={task.id}
                id={task.id}
                task={task.content}
                onDeleteButtonClicked={() => deleteTask(task)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
