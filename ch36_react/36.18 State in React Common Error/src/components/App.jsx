import React from "react";

let isDone = false;

const strikeThrough = { textDecoration: "line-through" };

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? strikeThrough : null}>Buy mjolk</p>
      <button onClick={strike}>Task complete</button>
      <button onClick={unStrike}>Task incomplete</button>
      <p
        style={{
          fontSize: "2rem",
          lineHeight: "3rem",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        THIS WILL NOT WORK! The elements have been rendered once along with
        their styles. In order to change the rendered elements, you need to use
        HOOKS.
      </p>
    </div>
  );
}

export default App;
