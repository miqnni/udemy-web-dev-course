import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonBackgroundColour, setButtonBackgroundColour] =
    useState("#FFFFFF");

  function handleClick() {
    // console.log("C L I C K E D !");
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: buttonBackgroundColour }}
        onMouseOver={() => {
          setButtonBackgroundColour("#000000");
        }}
        onMouseOut={() => {
          setButtonBackgroundColour("#FFFFFF");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
